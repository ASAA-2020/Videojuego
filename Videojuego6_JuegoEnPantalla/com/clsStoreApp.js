class clsStoreApp {
    constructor(pWin, pDoc) {
        this.doc = pDoc;
        this.win = pWin;
        this.ctx = this.doc.getElementById('canvas').getContext('2d');
        this.cAnvas = this.doc.getElementById('canvas');
        this.cAnvas.addEventListener('click', this.onClick.bind(this));
        this.imageBACKG = new clsImage('css/bckgrd-img-Copy.png', this.ctx, 1);
        this.imageDoor = new clsImage('css/gate.png', this.ctx, 1);
        this.imageDoor2 = new clsImage('css/gate10.png', this.ctx, 1);
        this.activar = false;

        console.log("hola");
        this.posx1 = -10;
        this.posx2 = 380;
        this.posy1 = -20;
        this.posy2 = -515;
        this.imageDoorFollow = new clsFollow(this.posx1, this.posx2, this.posy1, this.posy2);
        this.contador=0;

        
        
        this._loop();
    }

    _loop() {
        
        this.imageBACKG.Draw(0, 0);
        this.imageDoor.Draw(this.posx1, this.posx2);
        this.imageDoor2.Draw(this.posy1, this.posy2);
        
       console.log("loop " + this.activar);
        if (this.activar == true) {
            this.contador++;
            var jueguito = document.getElementById('jueguito');
            console.log('contadooooor' + this.contador)
            if(this.contador >= 520){
               
                jueguito.style.visibility ='visible';
               }
            this.posx2 = this.posx2 + 1;
            this.posy2 = this.posy2 - 1;
            this.imageDoor2 = new clsImage('css/gate11.png', this.ctx, 1);
        } 

        this.win.requestAnimationFrame(this._loop.bind(this));
    }
    onClick(e) {
        this.activar = true;
        console.log('x' + e.x + ' // y' + e.y + '////' + this.activar);
    }
    Move() {

        //audio.play('css/puerta_de_aire_comprimido.mp3');
    }

}