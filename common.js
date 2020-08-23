'use strict'

let q = getParam('q');

function getParam(paramName){
    let params = (new URL(document.location)).searchParams;
    return params.get(paramName);
}

