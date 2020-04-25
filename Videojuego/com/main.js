var mStoreApp;
var mUtils;
console.log('ssssshey');


function GetRandom(pMax){
    return pMax*Math.random()
}


window.onload= function(){

    if (document.readyState=="complete"){
        console.log("Hey");
        mStoreApp= new clsStoreApp(window,document);
   
    }
  
}