'use strict'

function detail(){
    console.log('うれしい');    

}
/*
class Book{

    constructer(item){
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
        this.id = items.id;

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

    getBuylink(){
        return this.buyLink;
    }

    getPageCount(){
        return this.pageCount;
    }

    getId(){
        return this.id;
    }
    
}
*/

// const book = new Book(item);

/*

let bookDetailElement = document.getElementById('bookdetail');
bookDetailElement.innerHTML = `
    <div class="flex flex-center">
        <img src="book.getSmallThumbnail()">
        <h3>book.getTitle()</h3>
        <h3>book.getAuthor()</h3>
        <h3>book.getPublisher()</h3>
        <h3>book.getPageCount()</h3>
    </div>
    <div class="flex-end-justiified buy-btn">book.getBuylink()</div>
    <div>
        <p>book.getDescription()</p>
    </div>

`
*/