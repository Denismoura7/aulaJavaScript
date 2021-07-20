/*
let nome = "Denis";
let idade = 32;
let idade2 = 10;
let frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil")); //Troca 'Japão' por 'Brasil'
console.log(frase.replace("Japão", "Brasil").toUpperCase());
//alert(frase.replace("Japão", "Brasil"));
*/

/*
let lista = ["maçã", "pêra", "laranja", "banana"];
console.log(lista);
console.log(lista[0]);
//alert(lista[1]);
lista.push("uva"); //Insere 'uva' na ultima posição
console.log(lista);
lista.pop(); //Retira o último elemento
console.log(lista);
console.log(lista.length) //Mostra qtd de Elementos na lista
console.log(lista.reverse()); //Reverte
console.log(lista.toString()); //Transforma em String
console.log(lista.join(" - ")); //Insere o ' - ' Traço no lugar da ' , ' Vírgula
*/

/*
let fruta = {nome: "laranja", cor: "amarela"};
console.log(fruta);
console.log(fruta.nome);

let frutas = [{nome: "laranja", cor: "amarela"}, {nome: "morango", cor: "vermelho"}, {nome: "uva", cor: "roxa"}];
console.log(frutas);
console.log(frutas[1].nome);
*/

/*
let idade = prompt("Qual sua idade ?");
if (idade >= 18){
    console.log("Maior de idade.");
}else {
    console.log("Menor de idade.");
}
*/

/*
let d = new Date();
console.log(d);
console.log(d.getMonth()+1);
console.log(d.getHours());
console.log(d.getMinutes());
*/

/*
let count = 0;
while (count <= 5){
    console.log(count);
    //count = count + 1;
    count ++;
}
*/

/*
for (let count = 0; count <= 5; count ++){
    console.log(count);
}
*/

/*
function soma (n1, n2){
    return n1 + n2
}
console.log(soma(2, 2)); // 4

outraSoma = (n3, n4) => {return n3 + n4};
console.log(outraSoma(2, 2)); // 4

setReplace = (frase, nome, novoNome) => {
    return frase.replace(nome, novoNome);
}
console.log(setReplace("Bem vindo Fulano", "Fulano", "Denis"));
*/

clique = () => {
    alert("Obrigado por clicar !");
    document.getElementById("thanks").innerHTML = "<strong>Thanks</strong>";

}

trocar = (elemento) => {
    //document.getElementById("mouseMove").innerHTML = "Novo texto aqui."
    elemento.innerHTML = "Novo texto aqui."
}

voltar = (elemento) => {
    //document.getElementById().innerHTML = "Passe o mouse de novo."
    elemento.innerHTML = "Passe o mouse de novo."
}

load = () => {alert("Página carregada.")}

change = (elemento) => {console.log(elemento.value)}