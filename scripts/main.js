let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/stolen.jpeg') {
        myImage.setAttribute('src', 'images/stolen2.jpeg');
    }else{
        myImage.setAttribute('src', 'images/stolen.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    myHeading.textContent = '欢迎光临' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '欢迎光临' + storedName;
}

myButton.onclick = function() {
    setUserName();
}