const bookmarkImgURL = chrome.runtime.getURL("assets/bookmark.png");

// if any changes in the DOM then call the addBookmarkButton function
const observer = new MutationObserver(()=>{
    addBookmarkButton();
})

// checks if anything changes in the body of the document
// and if so, the observer will trigger its callback function addBookmarkButton
observer.observe(document.body , { childList: true , subtree: true });

// Initial call to add the bookmark button when the script loads
addBookmarkButton();

function onProblemPage(){
    // by checking if the URL starts with "/problems/"
    return window.location.pathname.startsWith("/problems/");
}

function addBookmarkButton(){
    // check if the current page is problem page or not and if the bookmarkbutton is already present or not
    if(!onProblemPage() || document.getElementById("add-bookmark-button")) return;

    const bookmarkButton = document.createElement('img');
    bookmarkButton.id = "add-bookmark-button";
    bookmarkButton.src = bookmarkImgURL;
    bookmarkButton.style.cursor = 'pointer';
    bookmarkButton.style.height = "30px";
    bookmarkButton.style.width = "30px";
    bookmarkButton.style.marginLeft = '10px';
    bookmarkButton.style.marginTop = '3px';
    bookmarkButton.style.transition = "transform 0.2s ease, filter 0.2s ease";
    
    bookmarkButton.addEventListener("mouseover", () => {
    bookmarkButton.style.transform = "scale(1.1)";
    bookmarkButton.style.filter = "brightness(1.2)";
    });
    
    bookmarkButton.addEventListener("mouseout", () => {
      bookmarkButton.style.transform = "scale(1)";
      bookmarkButton.style.filter = "brightness(1)";
    });
    
    const askDoubtButton = document.getElementsByClassName("d-flex flex-row gap-2 justify-content-between m-0 hide-scrollbar ")[0];
    askDoubtButton.insertAdjacentElement("afterend", bookmarkButton);

    bookmarkButton.addEventListener('click', addNewBookmarkHandler);
}

async function addNewBookmarkHandler(){
    // getting currentBookmark
    const currentBookmark = await getCurrentBookmarks();

    const azProblemURL = window.location.href; // URL
    const uniqueID = extractUniqueID(azProblemURL); // extract uniqueID from URL
    const problemName = document.getElementsByClassName("Header_resource_heading__cpRp1")[0].innerText; // getting Problem name from DOM

    // if already present then do nothing (return)
    if(currentBookmark.some( (bookmark)=> bookmark.id === uniqueID )) return;

    // preparing newBookmark data
    const bookmarkObj = {
        id : uniqueID,
        name : problemName,
        url : azProblemURL
    }

    // adding the new bookmark data to the existing data
    const updateBookmarks = [...currentBookmark , bookmarkObj];

    // set the data to chrome storage
    chrome.storage.sync.set({ AZ_PROBLEM_KEY : updateBookmarks} , ()=>{
        console.log("Updated the currently bookmark to : " , updateBookmarks);
    })

}

function extractUniqueID(url){
    const start = url.indexOf("problems/") + "problems/".length;
    const end = url.indexOf("?",start);
    return end === -1 ? url.substring(start) : url.substring(start,end);
}

function getCurrentBookmarks(){
    return new Promise((resolve,reject) => {
        // fetching the current bookmark from chrome storage or if not present then return empty array
        chrome.storage.sync.get("[AZ_PROBLEM_KEY]", (data)=>{
            resolve(data.AZ_PROBLEM_KEY || []);
        })
    })
}