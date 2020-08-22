'use strict'

// function check(){
//     let empty=document.searchParams
//     if(empty==""){
//         window.alert('入力してください');
//         return false;
//     }else if(!empty.match(/\S/g)){
//         return false;
//     }
// }

// 入力されたキーワードをgetParamで処理した後ｑに代入
let q = getParam('q');
renderQuery(q);   // ”○○の検索結果"を表示する関数
searchBooksByQuery(q); //"検索結果を実際に出力するためにfetchで変換する関数"

function getParam(paramName){
    let params = (new URL(document.location)).searchParams;
    return params.get(paramName);
}

// ”○○の検索結果”を出力
function renderQuery(q){
    console.log('a');
    let queryElement = document.getElementById('query');
    queryElement.innerText =`${q}の検索結果`;
}

function makeUrl(q){
    return `https://www.googleapis.com/books/v1/volumes?q=${q}`; //URLがあっているか要確認
}

// fetchでURLからの情報をJSONにしている
function searchBooksByQuery(q){
    let url = makeUrl(q);
    fetch(url)
        .then(response => response.json())
        .then(json => renderResults(json))
        .catch(err => console.error('error',err));
        console.log('aa');
        
        // レスポンスが通っているか確認用に使用した
        // .then(response => {
        //     if(response.ok){
        //         return response.json();
        //     }else{
        //         return Promise.reject(new Error('エラー'))
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
}


// JSONのデータを受け取り、idのlistsにinnerHTMLでデータを出力させている
function renderResults(data){
    console.log('aaa')
    for( let i = 0; i < data.items.length ; i++){
        console.log(data.items[i].id);
        let listsElement =document.getElementById('lists');
        listsElement.innerHTML += `
        <a href="./detail.html
        " class="booklink" onClick="detail()">
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
  
 
/*   class Bookでできるのかを試したが出力しなかった
function renderResults(data){
    console.log('bb')
    for(let i = 0; i < data.items.length; i++){
        console.log(data.items[i].id)
        const book = new Book(data.items[i])
        let listsElement = document.getElementById('lists');
        listsElement.innerHTML += `
        <a href="./detail.html" class="booklink">
            <div class="contentsWrapper layout">
                <div class="flex flex-center">
                    <img src="book.getSmallThumbnail()" alt="book.getTitle()">
                </div>
                <div class="layout flex-vertical flex-2">
                    <h3 class="booktitle">book.getTitle()</h3>
                    <p id="description" class="flex">book.getDescription</p>
                </div>
            </div>
        </a>    
        `
    }
}

*/

// descriptionの文章の長さを調整しようとしているが、うまくいかない
// そもそも文字列を数えることができているのか不確か
// function getDescription(string){
//     const maxLength = 120;
//     let descriptionElement = document.getElementsByClassName(string);
//     n = descriptionElement.length;
//     if(n>maxLength){
//         return string.substr(0, maxLength) + '...';
//     }    
//     return string;
// }


    
        // let titleElement = document.createElement('h2');
        // const sentenseElement = document.createElement('p');
        // titleElement.innerText = jsObject.volumeInfo[i].title;
        // descriptionElement.innerText = jsObject.volumeInfo[i].description;
        // document.getElementById('')






//  //ここからはボタンクリック時に名前が出てくるイベント
//  function _onClickFetchReqButton(event) {
//     fetchBookReq();
// }

// // function bottonClick(){
// //     location.href ='index2.html';
// // }

// function viewBooks(jsObject) {
//     console.log(jsObject.items);

//     for(let i = 0; i < jsObject.items.length; i++){
//         const book = jsObject.items[i];
        
//         // <h2></2>
//         const bookElement =document.createElement('h2')
//         // <h2>first_name</h2>
//         bookElement.innerText = book.id;

//         document.getElementById('bookList').appendChild(bookElement);
//         console.log(jsObject.items[i].title);
//     }
// }
// // fetchの仕組
// // URLをいれる、Javascriptに変換する、関数に送る

// function fetchBookReq() {
//     fetch( 'https://www.googleapis.com/books/v1/volumes?q=' + { method: 'GET' })   // リクエスト先のURL, リクエスト方法などのオプション
//         .then( response => response.json() )        // レスポンス結果(JSON)を JSオブジェクト に変更します
//         .then( jsObject => viewBooks(jsObject))          // jsObjectを コンソールに出力します
//         .catch( error => console.error('error:', error) );  // エラーの場合は コンソールに出力します
// }