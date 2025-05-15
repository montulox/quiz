    let questionCounter = 1;
    let pageCounter = 1;
    let percent = 0;
    let userAnswers = {};
function buttonsClick(button, type) {
    if (questionCounter == 21)
        return;
    console.log(questionCounter);
    


    let questionId = `${questionCounter}`;
    let selectedValue = button.dataset.value;
    userAnswers[questionId] = selectedValue;    

    let percentCounter = document.querySelector(".progress__percentage");
    let percentBarFill = document.querySelector(".progress__fill");
    let currentAnswerBox = document.getElementById(`question-${questionCounter}`);
    let nextAnswerBox = document.getElementById(`question-${questionCounter + 1}`);

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

percent += 5; 
percentCounter.innerHTML = `${percent + "%"}`

percentBarFill.style.width = `${percent + "%"}`
}

function nextButton(){

    if (![6, 11, 16, 21].includes(questionCounter)){
        return      
    }
    const currentAnswerGroup = document.getElementById(`group-${pageCounter}`);
    const nextAnswerGroup = document.getElementById(`group-${pageCounter + 1}`);

    currentAnswerGroup.classList.remove("page-quiz__group--active");
    if(nextAnswerGroup){
        nextAnswerGroup.classList.add("page-quiz__group--active");
    }
    pageCounter++;
    console.log("work");
    window.scrollTo({
        top: 400,
        behavior: 'smooth'
    });
}

