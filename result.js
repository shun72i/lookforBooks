'use strict'

renderQuery(q);   // ”○○の検索結果"を表示する関数
searchBooksByQuery(q); //"検索結果を実際に出力するためにfetchで変換する関数"

// ”○○の検索結果”を出力
function renderQuery(q){
    console.log('a');
    let queryElement = document.getElementById('query');
    queryElement.innerText =`${q}の検索結果`;
}

// fetchでURLからの情報をJSONにしている
function searchBooksByQuery(q){
    let url = makeUrl(q);
    fetch(url)
    .then(response => response.json())
        .then(json => renderResults(json))
        .catch(err => console.error('error',err));
        console.log('aa');
    }
        
    
    
    function makeUrl(q){
        return `https://www.googleapis.com/books/v1/volumes?q=${q}`; //URLがあっているか要確認
    }
    
       // JSONのデータを受け取り、idのlistsにinnerHTMLでデータを出力させている
       function renderResults(data){
        console.log('aaa');
        for( let i = 0; i < data.items.length ; i++){
        // classBook(data.items[i]);
        // if(!data.items[i].volumeInfo.imageLinks){
        // console.log(data.items[i].volumeInfo.imageLinks);
        
            let listsElement =document.getElementById('lists');
            listsElement.innerHTML += `
            <a href="./detail.html" class="booklink" onClick="" >
                <div class="contentsWrapper layout ">
                <div class="flex flex-center">
                        <img src="${data.items[i].volumeInfo.imageLinks.smallThumbnail}" alt="${data.items[i].volumeInfo.title}の画像" class="bookimg">
                        </div>
                    <div class="layout flex-vertical flex-2">
                        <h3 class="booktitle">${data.items[i].volumeInfo.title}</h3>
                        <p id="description" class="flex">${data.items[i].volumeInfo.description}</p> 
                    </div>
                </div>
                </a>
                    `;
                }
            }
    //    }
     
    
    

   
    

        
        // レスポンスが通っているか確認用に使用した searchBooksByQuery(q)の中で使用
            // .then(response => {
            //  if(response.ok){
            //         return response.json();
            //  }else{
            //return Promise.reject(new Error('エラー'))
            //     }
            // }
            // )
                // .then(json => {
            //     console.log(json);
                // })
            // .catch(err => console.log(err));
            // console.log('a');               
            // ?id=
             // ${data.items[i].id}





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

// function classBook(data){
//     const book = new Book(item);
    
// }

// function detail(item){   
//     let view = book.getId();
//     console.log(view);
    
// }

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