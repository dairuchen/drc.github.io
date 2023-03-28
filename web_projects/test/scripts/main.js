//设置图片切换
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/snp.jpg'){
        myImage.setAttribute('src','images/snp2.jpg');
    }else{
        myImage.setAttribute('src','images/snp.jpg');
    }
};

//设置欢迎信息
//获取新按钮和标题的引用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

//欢迎信息的函数
function setUserName(){
    let myName = prompt('请输入你的名字。');
    if(!myName){
        setUserName;
    }else{
        localStorage.setItem('name',myName);
        myHeading.textContent = '你好，' + myName;
    } 
}

//初始化代码，在页面初次读取时进行构造工作
if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '你好,'+ storedName;
}

//为按钮设置onclick事件处理器
myButton.onclick = function(){
    setUserName();
};