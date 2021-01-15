//Initialize lists of questions, answers, and match questions to the right answers
const questionArray = ["Which of these is not a javascript data type?", "Which of these is a valid boolean value?", "Which of these is not a loop?", "What type of variable is this: 56,789 ?", "What kind of variable is this: 1234 ?", "Which function returns the length of a string?", "Which of these holds corresponding keys and values?", "What kind of variable is called by this syntax: var example = []?", "What symbol goes at the end of a line of code?"];
const answersArray = [["String", "Boolean", "Puzzle"], ["false", "wrong", "correct"],["for","while","during"],["int","string","number"],["int","string","number"], [".length",".howLong",".amount"], ["array", "div", "dictionary"], ["array", "div", "dictionary"], [",",";","."]];
const answersDict = {
    "Which of these is not a javascript data type?": "Puzzle",
    "Which of these is a valid boolean value?": "false",
    "Which of these is not a loop?": "during",
    "What type of variable is this: 56,789 ?": "string",
    "What kind of variable is this: 1234 ?": "int",
    "Which function returns the length of a string?": ".length",
    "Which of these holds corresponding keys and values?": "dictionary",
    "What kind of variable is called by this syntax: var example = []?": "array",
    "What symbol goes at the end of a line of code?": ";"
        }
// Initialize score variable and timer variables
let timeLeft = 120;
let secondsCounter = 60;
let minutes = "2";
let seconds = "00";
let quizScore = 0;
let currentQuestion = 0;

//Build out code for the quiz to run
function startQuiz(){
    $("#questionContainer").show();
    $("#questionContainer").text(questionArray[0]);
    for(let i = 0; i<answersArray[0].length; i++){
        let answerli = $("<li>");
        answerli.text(answersArray[0][i]);
        $("#quizQuestions").append(answerli);
    }

    let timer = setInterval(function(){
        if(timeLeft == 0 ){
         clearInterval(timer);
        }     
        else if(timeLeft == 60){
            
            seconds = "00";
            secondsCounter = 60;
            timeLeft--;
        }
        else if(timeLeft <= 60){
            minutes = "0";
            secondsCounter--;
            timeLeft--;
            seconds = secondsCounter.toString();
        }
        else if(timeLeft <= 119){
            secondsCounter--;
            timeLeft--;
            minutes = "1";
            seconds = secondsCounter.toString();
        }
        else{
            timeLeft--;
        }
        if(secondsCounter <=9){
            seconds = "0"+secondsCounter.toString();
        }
        $("#titleText").text(minutes+":"+seconds);
        console.log(timeLeft)
    }, 1000)
}