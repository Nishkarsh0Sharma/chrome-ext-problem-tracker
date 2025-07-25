const AZ_PROBLEM_KEY = "AZ_PROBLEM_KEY";
const bookmarkSection = document.getElementById("bookmarks");

const assetURLMap = {
    "play" : chrome.runtime.getURL("assets/play.png"),
    "delete" : chrome.runtime.getURL("assets/delete.png"),
}

document.addEventListener("DOMContentLoaded", () => {
    // Fetching existing bookmarks from storage and displaying them
    chrome.storage.sync.get("AZ_PROBLEM_KEY", (data)=>{
        const currentBookmarks = data[AZ_PROBLEM_KEY] || [];
        viewBookmarks(currentBookmarks);
    })
});

// Function to add bookmark button to the page
function viewBookmarks(bookmarks){
    bookmarkSection.innerHTML = ""; // clear the exiting bookmarks

    if(bookmarks.length === 0){
        bookmarkSection.innerHTML = "<i>No bookmark to show</i>";
        return;
    }

    bookmarks.forEach((bookmark) => addNewBookmarks(bookmark) );
}

// Function to create and add a new bookmark element to the bookmark section
function addNewBookmarks(bookmark){
    // Create new bookmark element
    const newBookmark = document.createElement("div");
    const bookmarkTitle = document.createElement("div");
    const bookmarkControls = document.createElement("div");

    // set content
    bookmarkTitle.textContent = bookmark.name;
    // set attributes
    bookmarkTitle.classList.add("bookmark-title");
    
    // set controls
    setControlAttributes(assetURLMap["play"] , onPlay , bookmarkControls);
    setControlAttributes(assetURLMap["delete"] , onDelete , bookmarkControls);
    
    bookmarkControls.classList.add("bookmark-controls");
    newBookmark.classList.add("bookmark");

    newBookmark.appendChild(bookmarkTitle);
    newBookmark.appendChild(bookmarkControls);

    // set attributes for the new bookmark (URL)
    newBookmark.setAttribute("url", bookmark.url);
    newBookmark.setAttribute("bookmark-id", bookmark.id);

    bookmarkSection.appendChild(newBookmark);
}

function setControlAttributes(src , handler , parentDiv){
    const controlElement = document.createElement("img");
    controlElement.src = src;
    controlElement.addEventListener("click", handler);
    parentDiv.appendChild(controlElement);
}

function onPlay(event){
    const problemURL = event.target.parentNode.parentNode.getAttribute("url");
    window.open(problemURL , "_blank");
}

function onDelete(event){
    const bookmarkItem = event.target.parentNode.parentNode;
    const bookmarkName = bookmarkItem.querySelector('.bookmark-title').textContent;
    const idToRemove = bookmarkItem.getAttribute("bookmark-id");
    
    // ask for user confirmation before deletion
    const confirmDelete = confirm(`Are you sure you want to delete "${bookmarkName}"?`);
    
    if (confirmDelete) {
        bookmarkItem.remove();
        deleteItemFromStorage(idToRemove);
    }
    // if user clicks "Cancel", nothing happens (bookmark stays)
}

// deleteItemFromStorage function to remove a bookmark from storage
function deleteItemFromStorage(idToRemove){
    chrome.storage.sync.get( [AZ_PROBLEM_KEY] , (data)=> {
        const currentBookmarks = data[AZ_PROBLEM_KEY] || [];
        const updatedBookmarks = currentBookmarks.filter( (bookmark) => bookmark.id !== idToRemove );
        chrome.storage.sync.set({AZ_PROBLEM_KEY : updatedBookmarks});
    })
}