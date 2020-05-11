class clsStoreApp{
    constructor(pWin, pDoc){
        this.doc=pDoc;
        this.win=pWin;
        this.ctx = this.doc.getElementById('canvas').getContext('2d');
        this.imageBACKG = new clsImage('css/bckgrd-img.jpg', this.ctx, 1);
        console.log("hola");
       
        this._loop();
    }

    _loop() {
        
        this.imageBACKG.Draw(0, 0);
        
        
        
    
        this.win.requestAnimationFrame(this._loop.bind(this));
    }
}