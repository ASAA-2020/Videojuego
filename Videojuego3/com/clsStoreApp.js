class clsStoreApp{
    constructor(pWin, pDoc){
        this.doc=pDoc;
        this.win=pWin;
        this.ctx = this.doc.getElementById('canvas').getContext('2d');
        this.imageBACKG = new clsImage('css/bckgrd-img-Copy.png', this.ctx, 1);
        this.imageDoor = new clsImage('css/gate.png', this.ctx, 1);
        this.imageDoor2 = new clsImage('css/gate10.png', this.ctx, 1);
        
        
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
        
        
        this.win.requestAnimationFrame(this._loop.bind(this));
    }
    Move(e){
        if(this.e.x > 850 && this.e.x < -1030 && this.e.y > 260 && this.e.y < 440){
            this.posx2 = this.posx2 + 1;
            this.posy2 = this.posy2 - 1;
            this.imageDoor2 = new clsImage('css/gate11.png', this.ctx, 1);
            
        } else {
            //audio.play('css/puerta_de_aire_comprimido.mp3');
        }
    }
    onClick(e) {
        console.log('x' + e.x+ ' // y' + e.y);
        this.Move(e);
    }
}