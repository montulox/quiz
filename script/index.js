    let questionCounter = 1;
    let percent = 0;
function buttonsClick(button, type) {
    if (questionCounter == 6)
        return;

    let percentCounter = document.querySelector(".progress__percentage");
    let percentBar = document.querySelector(".progress__bar");
    let currentAnswerBox = document.getElementById(`${questionCounter}`);
    let nextAnswerBox = document.getElementById(`${questionCounter + 1}`);


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

percent += 20; 
percentCounter.innerHTML = `${percent + "%"}`

percentBar.style = `background: linear-gradient(to right, #21978B 0%, #21978B ${percent}%, #e4e5e8 ${percent}%, #e4e5e8 100%);`

}