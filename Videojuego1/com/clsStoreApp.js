class clsStoreApp{
    constructor(pWin, pDoc){
        this.doc=pDoc;
        this.win=pWin;
        this.ctx = this.doc.getElementById('canvas').getContext('2d');
        this.imageBACKG = new clsImage('css/bckgrd-img.jpg', this.ctx, 1);
        this.imageDoor = new clsImage('css/gate.png', this.ctx, 1);
        this.imageDoor2 = new clsImage('css/gate2.png', this.ctx, 1);
        
        console.log("hola");
        this.posx1 = -10;
        this.posx2 = 380;
        this.posy1 = -20;
        this.posy2 = -515;
        this.imageDoorFollow = new clsFollow(this.posx1, this.posx2, this.posy1, this.posy2);
        this._loop();
    }

    _loop() {
        
        this.imageBACKG.Draw(0, 0);
        this.imageDoor.Draw(this.posx1, this.posx2);
        this.imageDoor2.Draw(this.posy1, this.posy2);
        //this.imageDoorFollow.Open();
        
        if(this.posx2 > 3000 && posy2 < -3000){
            this.posx2 = 3000;
            this.posy2 = -3000;
        } else {
            this.posx2 = this.posx2 + 5;
            this.posy2 = this.posy2 - 5;
        }
    
        this.win.requestAnimationFrame(this._loop.bind(this));
    }
}