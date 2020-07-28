function darkmode() {
    
    document.getElementById("theme").style.backgroundColor = "black";
    
}

function lightmode(){
    document.getElementById("theme").style.backgroundColor = "white";
    
}

function calcularpotencia() {
    
    var area = document.getElementById("area").value;

    if (area < 10) {
        document.getElementById("potenciacalculada").innerHTML = "100VA";
    } else {

        var fatorBruto = (area - 6)/4
        
        console.log('o fator bruto é',fatorBruto)
        
        var fatorCorrigido = Math.floor(fatorBruto)
        
        console.log('o fator corrigido é',fatorCorrigido)
        
        let potencia = 100 + 60*fatorCorrigido 
        
        console.log('A potencia minima para',area,'m² é de',potencia,'VA')

        document.getElementById("potenciacalculada").innerHTML = 'A potencia minima para'+ " "+ area +"m²" + " " +  "é de" + " " + potencia +'VA'

        }





}