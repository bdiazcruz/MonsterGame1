
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;


const backImg1 = new Image();
backImg1.src = './assets/BGDesertMountains/background1.png';

const backImg2 = new Image();
backImg2.src = './assets/BGDesertMountains/background2.png';

const backImg3 = new Image();
backImg3.src = './assets/BGDesertMountains/background3.png';



const playerImage = new Image();
playerImage.src = './assets/SLKnight/Idle.png';

const spriteWidth = 128;
const spriteHeight = 64;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 15;
const staggerAtkFrames = 15;

let playerLocX = 20;
let playerLocY = 500;

let maxFramesX = 1;
let maxFramesY = 3;

// here 1 is no, zero is yes
let frameYLocked = 1;


//player2
const playerImage2 = new Image();
playerImage2.src = './assets/SLKnight/Idle3.png';

let playerLocX2 = 370;
let playerLocY2 = 500;

let frameX2 = 0;
let frameY2 = 0;

let maxFramesX2 = 1;
let maxFramesY2 = 3;

let frameYLocked2 = 1;



//player objects

const player1 = new fighter({
    hpStat: 100,
    attackStat: 10,
    defenseStat:5,
    name: "player1",
    hpTag: 'plhealth3'
})

const player2 = new fighter({
    hpStat: 100,
    attackStat: 10,
    defenseStat:5,
    name: "player2",
    hpTag: 'p2health3'
})





function animate(){
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.fillRect(50, 50, 100, 100);

    ctx.drawImage(backImg1,0,0);
    ctx.drawImage(backImg2,0,0);
    ctx.drawImage(backImg3,0,0);

    ctx.drawImage(playerImage, frameX * spriteWidth , frameY * spriteHeight, spriteWidth, spriteHeight, playerLocX, playerLocY, spriteWidth*1.5, spriteHeight*1.5);


    //second character


    ctx.drawImage(playerImage2, frameX2* spriteWidth, frameY2 *spriteHeight, spriteWidth, spriteHeight, playerLocX2, playerLocY2, spriteWidth*1.5, spriteHeight*1.5);


    //create location variables for drawimage knight replace 50,500 with movement variables positioning


    
    
    
   
        
    if(gameFrame % staggerFrames == 0){
        if(frameX <maxFramesX){
            frameX++;
        } 
        else frameX = 0;
        if(frameYLocked == 1){
            if(frameY <maxFramesY){
            
                frameY++;
            } 
            else frameY = 0;
        }
        
    }

    if(gameFrame % staggerFrames == 0){
        if(frameX2 <maxFramesX2){
            frameX2++;
        } 
        else frameX2 = 0;
        if(frameYLocked2 == 1){
            if(frameY2 <maxFramesY2){
            
                frameY2++;
            } 
            else frameY2 = 0;
        }
        
    }


    

    gameFrame++;
    requestAnimationFrame(animate);
}

animate();




document.getElementById('attack1').addEventListener('click', event =>{
    player1.attack(player2);
    
    document.getElementById('attack1').style.display = 'block';
    document.getElementById('attack1').style.display = 'none';
    



    playerImage.src = './assets/SLKnight/Attacks.png';
    

    //starting player anim from begining
    frameX=0;
    //selecting row of attack sprite
    frameY=1;


    //moving player forwards
    playerLocX += 150;
    maxFramesX = 7;
    maxFramesY = 3;
    frameYLocked = 0;
    
    

    


    setTimeout(()=>{
        playerImage.src = './assets/SLKnight/Idle.png';
        playerLocX -= 150;
        maxFramesX = 1;
        maxFramesY = 3;
        frameYLocked = 1;

        //red animation

        //playerImage2.src = './assets/SLKnight/'



        document.getElementById('attack1').style.display = 'block';
   }, 2000)


    //retaliation





   

})






player1.attack(player2);


//player1.attack(player2);
//player1.attack(player2);

//player1.attack(player2);
//player1.attack(player2);

//player1.attack(player2);
//player1.attack(player2);

//player1.attack(player2);
//player1.attack(player2);

//player1.attack(player2);
