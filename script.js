var answer;//global var for answer
var randomNumOne;//global var for numOne
var randomNumTwo;//global var for numTwo
/*var userScore = 0;//int to keep track of user score
var totalCorrectAnswer = 0;//int to keep track of total correct answer
var totalIncorrectAnswer = 0;//int to keep track of total incorrent answer
var userStreak = 0;//int to keep track of total streak
var highestAnswerStreak = 0;//used to keep track of highest streak*/
var user = {//user and properties of user
    userScore: 0,
    totalCorrectAnswer: 0,
    totalIncorrectAnswer: 0,
    userStreak: 0,
    highestAnswerStreak: 0
};

function submitButtonFunction(){
    let textBoxValue = document.getElementById('answerBoxId').value; //gets users answer
    if(textBoxValue == answer){
        user.totalCorrectAnswer += 1;//increments total correct answer by one
        user.userScore += 1 + (user.userStreak * 2); //formula for user score
        user.userStreak += 1;//increments user streak by one
        if(user.userStreak > user.highestAnswerStreak){//checks user streak is higher then highest streak and if it is, it updates it
            user.highestAnswerStreak = userStreak;//updates highest streak by changing it to current streak
        }
        document.getElementById('answerCommentId').innerHTML = `The answer was ${answer}`;//says weather the answer was corrent or incorrect
        document.getElementById('userScoreCommentId').innerHTML = `Your current score is ${user.userScore}`;//displays user score they answer the equation
        document.getElementById('userStreakCommentId').innerHTML = `Your current streak is ${user.userStreak}`;//displays users correct answer streak after they answer the equation
        
    }else{//if answer is incorrect
        user.userStreak = 0;//resets user streak
        user.totalIncorrectAnswer--;//increments total incorrect answers
        document.getElementById('answerCommentId').innerHTML = `The answer was ${answer}`;//says weather the answer was corrent or incorrect
        document.getElementById('userScoreCommentId').innerHTML = user.userScore;//displays user score they answer the equation
        document.getElementById('userStreakCommentId').innerHTML = user.userStreak;//displays users correct answer streak after they answer the equation
        
    }
    newEquationFunction();//gets new equation

}
function toggleHidden(){
    document.getElementById('hiddenButtonId').classList.toggle('hidden');//Shows the equation on click along with answer box and submit button 
    randomNumOne = randomNumber(1, 10);//gets first num 
    randomNumTwo = randomNumber(1, 10);//gets second num
    document.getElementById('numOneId').innerHTML = randomNumOne;//Shows the first number of equation
    document.getElementById('numTwoId').innerHTML = randomNumTwo;//Shows the second number of equation  
}
function randomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function additionSignFunction(){//function that lets the user add numOne and numTwo
    answer = randomNumOne + randomNumTwo; //sets answer to the sum of numOne and numTwo
}
function subtractionSignFunction(){//function that lets the user subtract
    answer = randomNumOne - randomNumTwo;//difference of numOne and numTwo
    
}
function multiplicationSignFunction(){//function that lets the user multiply numOne and numTwo
    answer = randomNumOne * randomNumTwo;//sets answer to the product of numOne and numTwo
}
function divisionSignFunction(){//function that lets the user divide numOne by numTwo
    answer = randomNumOne / randomNumTwo;//quotent of numOne and numTwo
}
function newEquationFunction(){//function to regenerate the equation
    randomNumOne = randomNumber(1, 10);//gets first num 
    randomNumTwo = randomNumber(1, 10);//gets second num
    document.getElementById('numOneId').innerHTML = randomNumOne;//Shows the first number of equation
    document.getElementById('numTwoId').innerHTML = randomNumTwo;//Shows the second number of equation  
    answer = "Error 0";//resets answer so user can't get same thing in a row
}
function seeScoreBoard(){//function to see scoreboard
    document.getElementById('scoreBoardId').classList.toggle('hiddenScoreBoard');//gets element then triggers css display hidden
    document.getElementById('totalCorrectAnswerId').innerHTML = user.totalCorrectAnswer;//displays users number of correct by getting inner html based on id then changing it to the variable for correct answer
    document.getElementById('totalIncorrectAnswerId').innerHTML = user.totalIncorrectAnswer;//displays users number of incorrect answers by getting inner html and changing it to the variable for incorrect answer
    document.getElementById('highestAnswerStreakId').innerHTML = user.highestAnswerStreak;//displays users highest answer streak by getting element by id then changing it to the variable for highest streak
}