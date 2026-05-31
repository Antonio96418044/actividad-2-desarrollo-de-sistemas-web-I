var Alert = new Cu0stomA0lert();

function CustomAlert(){

    this.render = function(){
        //Show Modal
        let popUpBox = document.getElementById('popUpBox');
        popUpBox.style.display = "block";
        //Close modal
        document.getElementById('closeModal').innerHTML = '<a href="index.php"><button type="button" a href>¡si quiero!</button></a> ';

    }
    
    this.ok = function(){

        document.getElementById('popUpBox').style.display = "none";
        document.getElementById('popUpOverlay').style.display = "none";    
    }
}
