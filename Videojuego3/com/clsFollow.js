class clsFollow{
    constructor(posx1, posx2, posy1, posy2){
        this.posx1 = posx1;
        this.posx2 = posx2;
        this.posy1 = posy1;
        this.posy2 = posy2;
        this.pt = new clsPoint(0,0)
        this._velocity=Math.random()*5;
        this.friction=-0.01;
        this._velomax=25;
    }
    /*
    setVelocity(pVelo){
        if (pVelo<0) pVelo=0;
        if (pVelo>this._velomax) pVelo=this._velomax;
        this._velocity=pVelo;
        console.log('Velo_ '+this._velocity);
    }
    ////////////////////////////////////////////////
    increaseVelocity(){
        this.setVelocity(this._velocity+1);
    }
    decreaseVelocity(){
        this.setVelocity(this._velocity-1);
    }
    ///////////////////////////////////////////////
    Move(){
        //this.setVelocity(this._velocity+this.friction);

        this.pt.y=this.pt.y -1 ;
        this.pt.y2=this.pt.y2 + 1;
    }*/
    ////////////////////////////////////////////////
    /*Open(){
        if(this.posx2 > 3000 && posy2 < -3000){
            this.posx2 = 3000;
            this.posy2 = -3000;
        } else {
            this.posx2 = this.posx2 + 30;
            this.posy2 = this.posy2 - 30;
        }
        

        
        
    }
*/}