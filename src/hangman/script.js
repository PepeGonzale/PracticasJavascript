var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];
let nombreCategoria;
let categoriaElegida; //seleccionamos el nombre de la categoria 
var categoria;
const grid = document.querySelector('.grid')
const display = document.getElementById('display')
for(var i=0; i < alphabet.length;i++){
    const letter = document.createElement('button')
    letter.id = 'letter'
    letter.innerHTML = alphabet[i]
    grid.appendChild(letter)
    console.log(letter)
}
var seleccionarCategoria = () => {
    if(categoriaElegida === categoria[0]){
        nombreCategoria.innerHTML = 'Premier'
        console.log(nombreCategoria)
    }
}






