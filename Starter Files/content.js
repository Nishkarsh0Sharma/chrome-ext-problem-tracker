const bookmarkImgURL = chrome.runtime.getURL("assets/bookmark.png");

window.addEventListener("load", addBookmarkButton);

function addBookmarkButton(){
    const bookmarkButton = document.createElement('img');
    bookmarkButton.id = "add-bookmark-button";
    bookmarkButton.src = bookmarkImgURL;
    bookmarkButton.style.height = "30px";
    bookmarkButton.style.width = "30px";

    const askDoubtButton = document.getElementsByClassName("d-flex flex-row gap-2 justify-content-between m-0 hide-scrollbar ")[0];
    askDoubtButton.insertAdjacentElement("afterend", bookmarkButton);
}
