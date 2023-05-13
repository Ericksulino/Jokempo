var elementos = document.querySelectorAll('.player-options div > img');
            const enemyOp = document.querySelectorAll('.enemy-options div');
            var playerOpt = "";
            var enemyOpt = "";

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
                });
            }