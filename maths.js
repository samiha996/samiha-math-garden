var answer;
var score=0;
var backGroundImages=[];

function nextQuestion() {
    const n1= getRandomInt(5);
    document.getElementById('n1').innerHTML= n1;
    const n2= getRandomInt(6);
    document.getElementById('n2').innerHTML= n2;

    answer=n1+n2;
}


function getRandomInt(max) {
    return Math.floor(Math.random()*max)   
}

function checkAnswer() {
    const prediction = predictImage();
    console.log(`answer ${answer}, prediction ${prediction}`);

    if (answer==prediction){
        console.log('Correct !');
        score ++;
        if (score<=6){
            backGroundImages.push(`url('images/background${score}.svg')`);
            document.body.style.backgroundImage=backGroundImages;
        } else {
            alert('Well Done! Your math garden is in full bloom! Want to start again?');
            score=0;
            backGroundImages=[];
            document.body.style.backgroundImage=backGroundImages;
        }
    }
    else {
        console.log('Wrong!');
        if (score!=0) {score--};
        alert ('Oops !');
        setTimeout(function () {
        backGroundImages.pop();
        document.body.style.backgroundImage=backGroundImages;
        }, 1000);
        console.log(`${score}`);

    }
}