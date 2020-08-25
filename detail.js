'use strict'

window.addEventListener('load',()=>{
    console.log('b');
    const id = getParam('id')
    _idChanged(id);
});


function _idChanged(id) {
    if (!id) {
        console.warn('idが空です');
        return;
    }
    // decodeURIを実行してデコードする
    id = decodeURI(id);
    searchBookBy(id);
}


function searchBookBy(id){

    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
    .then(response => response.json())
    .then(json => detailCard(json))
    .catch(err => console.error('error',err));
    console.log('rr');
}


function detailCard(item){
    console.log('c');
    const detailElement = document.getElementById('bookdetail');
    const book = new Book(item);
    console.log('y')

    const thumbnail =document.getElementById('thumbnail')
    thumbnail.src = book.getSmallThumbnail();
    thumbnail.alt = book.getTitle();
    document.getElementById('title').innerHTML = book.getTitle();
    document.getElementById('pageCount').innerHTML = book.getPageCount();
    document.getElementById('authors').innerHTML = book.getAuthors();
    document.getElementById('publisher').innerHTML = book.getPublisher();
    document.getElementById('buyLink').innerHTML = book.getBuyLink();
    document.getElementById('description').innerHTML = book.getDescription();

}

// searchBooksByQuery(q); //"検索結果を実際に出力するためにfetchで変換する関数"

//fetchでURLからの情報をJSONにしている
// function searchBooksByQuery(q){
//     let url = makeUrl(q);    
//     fetch(url)
//     .then(response => response.json())
//         .then(json => renderDetail(json))
//         .catch(err => console.error('error',err));
//         console.log('bb');
// }

// function makeUrl(q){
//     return `https://www.googleapis.com/books/v1/volumes?q=${q}`; //URLがあっているか要確認    
// }

/*function renderDetail(data){
    console.log('bbb');
    for( let i = 0 ; data.items.length ; i++){
        console.log(data.items[i].volumeInfo.title);
        let detailElement = document.getElementById('bookdetail');
        detailElement.innerHTML += `
        <div>
            <img src="${data.items[i].volumeInfo.imageLinks.smallThumbnail}" alt="${data.items[i].volumeInfo.title}">
        </div>    
        <div>
            <h3>${data.items[i].volumeInfo.title}</h3>
            <p>ページ数：${data.items[i].volumeInfo.pageCount}</p>
            <p>出版社：${data.items[i].volumeInfo.publisher}</p>
            <p>著者：${data.items[i].volumeInfo.authors}</p>
        </div>    
        <div>
            <bottom>購入ページ</bottom>
        </div>    
        <div>
            <h3>詳細</h3>
        <div>${data.items[i].volumeInfo.description}    
        </div>
        </div>
        `
    }    
}    
*/

