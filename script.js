 document.querySelector("#tesoura").addEventListener("click", (event) => play(event) )
 document.querySelector("#pedra").addEventListener("click", (event) => play(event) )
 document.querySelector("#papel").addEventListener("click", (event) => play(event) )

 function play (event) {
    let pcTurn = new Array ();
    pcTurn[0] = "Tesoura";
    pcTurn[1] = "Pedra";
    pcTurn[2] = "Papel";
    let i = Math.floor(3*Math.random())
    document.querySelector(".botResult").innerText = pcTurn[i]
    document.querySelector(".playerResult").innerText = event.target.value   
    victory()   
   venceu()
}
let victoryResult = document.querySelector(".victoryResult")
function victory() {
  let botChoice = document.querySelector(".botResult")
  let playerChoice = document.querySelector(".playerResult")  

  let textContentBot = botChoice.innerText
  let textContentPlayer = playerChoice.innerText


    if(textContentPlayer === "Tesoura" && textContentBot === "Tesoura"){
        victoryResult.innerText = "Vocês empataram!"
    } else if(textContentPlayer === "Tesoura" && textContentBot === "Pedra"){
        victoryResult.innerText = "Você perdeu!"
    } else if(textContentPlayer === "Tesoura" && textContentBot === "Papel"){
        victoryResult.innerText = "Você ganhou!"
    } 


    if(textContentPlayer === "Pedra" && textContentBot === "Pedra"){
        victoryResult.innerText = "Vocês empataram!"
    } else if(textContentPlayer === "Pedra" && textContentBot === "Papel"){
        victoryResult.innerText = "Você perdeu!"
    } else if(textContentPlayer === "Pedra" && textContentBot === "Tesoura"){
        victoryResult.innerText = "Você ganhou!"
    } 


    if(textContentPlayer === "Papel" && textContentBot === "Papel"){
        victoryResult.innerText = "Vocês empataram!"
    } else if(textContentPlayer === "Papel" && textContentBot === "Tesoura"){
        victoryResult.innerText = "Você perdeu!"
    } else if(textContentPlayer === "Papel" && textContentBot === "Pedra"){
        victoryResult.innerText = "Você ganhou!"
    }  
       
}
function venceu() {
    const elemento = document.querySelector("#modal");
    elemento.classList.add("mostrar-modal"); 
    
      
    const fechar = document.querySelector("#fechar-botao");
    fechar.addEventListener("click", () => {
    elemento.classList.remove("mostrar-modal");
    document.location.reload(true);
    })
}



