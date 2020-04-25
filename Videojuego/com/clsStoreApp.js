class clsStoreApp{
    constructor(pWin, pDoc){
        this.doc=pDoc;
        this.win=pWin;
        // CheckCredentials()
    }
/////////////////////////////////////////////////////////////////////////////
    Login(){
        if (this.ValidateFields()==true){
            console.log('Datos todo correcto '+ this.GetScreenValue('username') );
            var tUN= this.GetScreenValue('username');
            var tPW= this.GetScreenValue('password');

            if (tPW=='1234' && tUN=='admin'){
                this.NavigateTo('initialscreen');
                return true
            }
            //
        }
        return false;
    }
/////////////////////////////////////////////////////////////////////////////
    NavigateTo(pScreen){
        if (pScreen=='initialscreen'){
            this.win.location.href = "initialscreen.html";
        }

    }
/////////////////////////////////////////////////////////////////////////////
    ValidateFields(){
        var tUN= this.GetScreenValue('username');
        var tPW= this.GetScreenValue('password');
        console.log('Validate fields' + tUN.length);

        if (!(tUN.length>3)){
            this.GenerateScreenErr('Usuario no válido');
            return false;
        }
        if (!(tPW.length>3)){
            this.GenerateScreenErr('Password  no válido');
            return false;
        }
        console.log("ValidateFields OK");
        return true;
       

    }
/////////////////////////////////////////////////////////////////////////////
    GetScreenValue(pFieldName){
        var tS=this.doc.getElementById(pFieldName).value;
        console.log('________ '+tS + '  ' + tS.length);
        return tS
    }
/////////////////////////////////////////////////////////////////////////////
    GenerateScreenErr(pMessage){
        console.log('Error message ' + pMessage);
        // Alert
    }

}