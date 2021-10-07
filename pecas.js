let peso = 80;
if (peso > 100) {
    console.log ("A peça possui um peso adequado, pode ser cadastrada!")
} else {
 console.log ("A peça não pode ser cadastrada, não possui o peso mínimo")   
}
let listaPeças = ["Disco de freio", "Amortecedor", "alternador", "vela", "radiador", "Correia", "Ignição", "Bateria", "Carter", "Embreagem"]

if (listaPeças.length < 10) {

    console.log ("A lista ainda possui espaço para mais peças")    
} else {
    console.log ("Não há espaço disponível na lista, a capacidade máxima foi atingida")
    
}
let nomePeca = "Disco de freio"
if ( nomePeca.length> 3) {
    console.log("Nome da peça é válido, pode seguir com o cadastro")
} else {
    console.log("Nome da peça é invalido, o nome deve mais de 3 caracteres")
}