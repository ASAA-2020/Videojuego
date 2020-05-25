class clsImage {
    constructor(pImagePath, pCtx, pAutodraw) {
        console.log("constructor")
        this.image = new Image();
        this.imagepath = pImagePath;
        this.ctx = pCtx;
        this._loaded = 0;
        this._autodraw = pAutodraw;
        this.Init();
    }
    Init() {
        //console.log("init")
        this._CreateListeners();
        this.LoadImage();
    }
    _onLoad() {
        //console.log('clsImage->onload' + this.image.width);
        this._loaded = 1;
        if (this._autodraw == 1) {
            this.Draw(0, 0);
        }
    }
    _CreateListeners() {
        //console.log("listener")
        this.image.addEventListener('load', this._onLoad.bind(this));
    }
    LoadImage() {
        //console.log("load clsimg")
        this.image.src = this.imagepath;
    }
    Draw(pX, pY) {
        //console.log("draw")
        this.x = pX;
        this.y = pY;
        if (this._loaded == 1) {
            //console.log("drawimage")
            this.ctx.drawImage(this.image, this.x, this.y);
        }

    }
    

}