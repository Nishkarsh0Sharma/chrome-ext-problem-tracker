const bookmarkImgURL = chrome.runtime.getURL("assets/bookmark.png");

window.addEventListener("load", addBookmarkButton);

function addBookmarkButton(){
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
    bookmarkButton.addEventListener("click",()=>{
        alert("Your Problem has been stored");
    })
}
