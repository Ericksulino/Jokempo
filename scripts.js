var elementos = document.querySelectorAll('.player-options div > img');
const enemyOp = document.querySelectorAll('.enemy-options div');
var vencedor = document.querySelector('.vencedor');
var playerOpt = "";
var enemyOpt = "";

validVictory = () =>{
    let result = 0; 
    if(playerOpt == "pedra"){
        if(enemyOpt == "papel"){
            //empate
            result = 1;
        }
        else if(enemyOpt == "tesoura"){
            //perdeu
            result = 2;
        }
        else if(enemyOpt == "pedra"){
            //ganhou
            result = 0;
        }
    }
    else if(playerOpt == "papel"){
        if(enemyOpt == "papel"){
            //empate
            result = 0;
        }
        else if(enemyOpt == "tesoura"){
            //perdeu
            result = 1;
        }
        else if(enemyOpt == "pedra"){
            //ganhou
            result = 2;
        }
    }
    else if(playerOpt == "tesoura"){
        if(enemyOpt == "papel"){
            //empate
            result = 2;
        }
        else if(enemyOpt == "tesoura"){
            //perdeu
            result = 0;
        }
        else if(enemyOpt == "pedra"){
            //ganhou
            result = 1;
        }
    }
    //alert(result)
    switch(result){
        case 0:
            vencedor.innerHTML = "O jogo foi empatado!";
            break;
        case 1:
            vencedor.innerHTML = "O jogador perdeu o jogo!";
            break;
        case 2:
            vencedor.innerHTML = "O jogador ganhou o jogo!";
            break;
    }
}

resetOpacityEnemy = () =>{
    for(let i =0;i<enemyOp.length; i++){
        
        enemyOp[i].childNodes[0].style.opacity = 0.3;
        
    }
}

inimigoPlay = () =>{
    let rand = Math.floor(Math.random()*3);
    //alert(rand)
    
    resetOpacityEnemy();
    for(let i =0;i<enemyOp.length; i++){
        if(i==rand){
            enemyOp[i].childNodes[0].style.opacity = 1;
            enemyOpt = enemyOp[i].childNodes[0].getAttribute('opt');
        }
        
    }
    
}

function resetOpacityPlayer(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.3;
    }
}

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click',function(t){
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');

        // alert(playerOpt);
        inimigoPlay();
        validVictory();
    });
}