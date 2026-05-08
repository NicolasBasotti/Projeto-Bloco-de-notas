/* 
    Váriaveis no JS

    -let / const / var (Não se usa mais o var)
        Const -> é constante, toda vez que crio uma variável com const, eu não posso atribuir um novo valor depois.
        Let -> Posso alterar o valor dela  

    let name = "Nícolas"

    console.log(name)


*/


/*  IF e else
    let num = 8

    if(num > 10)
        console.log("É maior que 10")
    else if (num == 10)
        console.log("É 10")
    else 
        console.log("É menor que 10")


*/



/* Funções JS
    function like(){
        console.log("teste chamando função!")
    }

    like() //chama a função
*/


/* Laços de repetição */


let produtos = ['blusa', 'tenis nike'] //array ou matriz(lista)

let flag = false

produtos.forEach(produto =>{
    if( produto === 'blus'){
        console.log(produto)
        flag = true
    }
})

if(flag === false)
        console.log("O produto não foi encontrado")