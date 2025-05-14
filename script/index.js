    let questionCounter = 1;
function buttonsClick(button, type) {
    if (questionCounter == 6)
        return;

    let currentAnswerBox = document.getElementById(`${questionCounter}`)
    let nextAnswerBox = document.getElementById(`${questionCounter + 1}`)

    if (type == "green"){
        button.style.backgroundColor = " #21978B";
    }
    else if (type == "red"){
        button.style.backgroundColor = " #D43B3B"
    }
    else{
        button.style.backgroundColor = " #5e5e5e"
    }
    
    currentAnswerBox.classList.remove("quiz-page__questions--active");
    if(nextAnswerBox){
        nextAnswerBox.classList.add("quiz-page__questions--active");
    }

    questionCounter++;
}
