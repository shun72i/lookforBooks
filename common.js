'use strict'

let q = getParam('q');

function getParam(paramName){
    let params = (new URL(document.location)).searchParams;
    return params.get(paramName);
}


class Book{

    constructor(item){
        const volumeInfo = item.volumeInfo;
        this.title = volumeInfo.title;
        this.subtitle = volumeInfo.subtitle;
        this.smallThumbnail = volumeInfo.imageLinks.smallThumbnail;
        this.Thumbnail = volumeInfo.imageLinks.Thumbnail;
        this.authors = volumeInfo.authors;
        this.publisher = volumeInfo.publisher;
        this.description = volumeInfo.description;
        this.buyLink = volumeInfo.buyLink;
        this.pageCount = volumeInfo.pageCount;
        this.id = item.id;
    }
    
    getTitle(){
        return this.title;
    }
    
    getSubtitle(){
        return this.subtitle;
    }

    getSmallThumbnail(){
        return this.smallThumbnail;
    }
    
    getThumbnail(){
        return this.Thumbnail;
    }
    
    getAuthors(){
        return this.authors;
    }
    
    getPublisher(){
        return this.publisher;
    }
    
    getDescription(){
        return this.description;
    }
    
    getBuyLink(){
        return this.buyLink;
    }
    
    getPageCount(){
        return this.pageCount;
    }
    
    getId(){
        return this.id;
    }    
//*  参考にした
    getResultLists(){
        console.log('k');
        return  `
        <a href="./detail.html?id=${this.getId()}" class="booklink"  >
            <div class="contentsWrapper layout ">
            <div class="flex flex-center">
                    <img src="${this.getSmallThumbnail()}" alt="${this.getTitle()}の画像" class="bookimg">
                    </div>
                <div class="layout flex-vertical flex-2">
                    <h3 class="booktitle">${this.getTitle()}</h3>
                    <p id="description" class="flex">${this.getDescription()}</p> 
                </div>
            </div>
            </a>
                `
    }

    attachInnerHTML(listsElement){
        if(!listsElement){
            console.log.warn('空です.');
            return;
        }
        listsElement.innerHTML += this.getResultLists();
    }
// 
}

/*
function _onClickDetail(item){
    const book = new Book(item);
    console.log('ddd')
}
*/

// clickされたときにresult.jsからidを取得し、HTMLに要素をいれようとした
// document.getElementById("clickDetail").onclick = function(){
//     document.getElementById("clickDetail").innerHTML = `クリックされた！`;
// };