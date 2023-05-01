const key = "4ae6e8857bedc01781ee217cd9764e35"



async function buscarCidade(cidade){

    const dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=London,uk&callback=test&appid=${key}`).then(resposta => resposta.json())

    console.log(dados); 
    
}



function cliqueiNoBotao(){
    const cidade = document.querySelector(".input-cidade").value
    
    buscarCidade()
}

