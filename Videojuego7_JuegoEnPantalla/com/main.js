var bWeb;
console.log('ssssshey');

window.onload = function () {

    if (document.readyState == "complete") {
        console.log("Hey");
        bWeb = new clsStoreApp(window, this.document);
        this.document.getElementById('audio').addEventListener('click', bWeb.onClick);
       
    }


}
