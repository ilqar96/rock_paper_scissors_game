const game = () => {
    let pScore = 0;
    let cScore = 0;


    // Start the Game

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
            
        });

    };

    // Play Match
    const playMatch = () =>{
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll('.hands img');
        hands.forEach(hand=>{
            hand.addEventListener('animationend', function(){
                this.style.animation ='';
            })
        })

        // Computer Options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option =>{
            option.addEventListener('click', function(){
                // Computer Choise
              const computerNumber = Math.floor(Math.random() * 3);
              const computerChoice = computerOptions[computerNumber];

              setTimeout(()=>{
                compareHands(this.textContent, computerChoice);

                //Update Images
  
                playerHand.src = `./img/${this.textContent}.png`;
                computerHand.src = `./img/${computerChoice}.png`;

              }, 2000)




              

              playerHand.style.animation ="shakePlayer 2s ease";
              computerHand.style.animation ="shakeComputer 2s ease";
              

            });
        });

    };

    const updateScore = ()=> {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;

         
    }

    const compareHands = (playerChoice, computerChoice) =>{

        const winner = document.querySelector('.winner');
        if(playerChoice === computerChoice){
           winner.textContent = 'It is a tie';
           document.querySelector('.player-score').style.backgroundColor = 'rgb(39,41,68)';
            document.querySelector('.computer-score').style.backgroundColor = 'rgb(39,41,68)';
           
           return;
        }
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player wins';
                document.querySelector('.player-score').style.backgroundColor = 'green';
                document.querySelector('.computer-score').style.backgroundColor = 'red';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer wins';
                document.querySelector('.player-score').style.backgroundColor = 'red';
                document.querySelector('.computer-score').style.backgroundColor = 'green';
                cScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === 'paper'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Player wins';
                document.querySelector('.player-score').style.backgroundColor = 'green';
                document.querySelector('.computer-score').style.backgroundColor = 'red';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer wins';
                document.querySelector('.player-score').style.backgroundColor = 'red';
                document.querySelector('.computer-score').style.backgroundColor = 'green';
                cScore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                winner.textContent = 'Player wins';
                document.querySelector('.player-score').style.backgroundColor = 'green';
                document.querySelector('.computer-score').style.backgroundColor = 'red';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer wins';
                document.querySelector('.player-score').style.backgroundColor = 'red';
                document.querySelector('.computer-score').style.backgroundColor = 'green';
                cScore++;
                updateScore();
                return;
            }
        }

        
     

       
            
        }

      

    




    // Is call all the inner function
    startGame();
    playMatch();

};
game();

