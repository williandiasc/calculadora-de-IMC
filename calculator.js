function calculate(){
        var height=(document.getElementById("height").value)/100;
        var weight=document.getElementById("weight").value;
    
        var imc=weight/(height**2);
        var textResult=""
        if(imc<18.50) {
            textResult="Você está magro"
        } else if(imc<24.9){
            textResult="Você está com um peso regular"
        } else if(imc<29.9){
            textResult="Você está com sobrepeso"
        } else if(imc<39.9){
            textResult="Você está com obesidade"
        } else if(imc>39.9){
            textResult="Você está com obesidade mórbida"
        }
    
        document.getElementById("result").innerText=textResult

}