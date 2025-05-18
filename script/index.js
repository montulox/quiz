    let questionCounter = 1;
    let pageCounter = 1;
    let percent = 0;
    let userAnswers = {};
    // let pageScroll =  777;

    const scale = {
    "totally-agree": 1,
    "agree": 0.85,
    "partly-agree": 0.70,
    "neutral": 0.55,
    "partly-disagree": 0.40,
    "disagree": 0.25,
    "totally-disagree": 0
};

const group1Indexes = [6, 8, 12, 17, 20];
const group2Indexes = [1, 2, 3, 4, 5];
const group3Indexes = [7, 9, 10, 11, 13];
const group4Indexes = [14, 15, 16, 18, 19];

const ctx = document.querySelector(".quiz-page__chart").getContext('2d');
const chartWrap = document.querySelector(".quiz-page__chart-wrap");




function buttonsClick(button, type) {
    if (questionCounter == 21)
        return;
    console.log(questionCounter);
    
    //     window.scrollTo({
    //     top: 0 + `${pageScroll}`,
    //     behavior: 'smooth'
    // });
    // pageScroll += 377;
    let questionId = `${questionCounter}`;
    let selectedValue = button.dataset.value;
    userAnswers[questionId] = selectedValue;   
    console.log(userAnswers);
    

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
    window.scrollTo({
        top: 400,
        behavior: 'smooth'
    });

    if(pageCounter == 5){
        chartWrap.classList.add("quiz-page__chart-wrap--active")
        document.querySelector(".next-page__button").style.display = "none";


        const group1 = group1Indexes.map(i => userAnswers[i]);
        const group2 = group2Indexes.map(i => userAnswers[i]);
        const group3 = group3Indexes.map(i => userAnswers[i]);
        const group4 = group4Indexes.map(i => userAnswers[i]);

        const sum1 = group1.reduce((total, answer) => total + (scale[answer] || 0), 0);
        const sum2 = group2.reduce((total, answer) => total + (scale[answer] || 0), 0);
        const sum3 = group3.reduce((total, answer) => total + (scale[answer] || 0), 0);
        const sum4 = group4.reduce((total, answer) => total + (scale[answer] || 0), 0);

        console.log("sum1 = ", sum1, "sum2 = ", sum2, "sum3 = ", sum3, "sum4 = ", sum4);

        const chart = new Chart(ctx, {
            type: 'pie',
            data: {
                // labels: ['Mr Punktualnost⌚', 'Liri hohil🧋', 'Dasha (potato)🥔', 'Roman🪨', 'Dania👱🏿', 'Erik🎸', 'Mark Bernard🍵'],
                labels: ['first', 'second', 'third', 'fourth'],
                datasets: [{
                    label: 'You are',
                    data: [sum1, sum2, sum3, sum4],
                    backgroundColor: [
                        '#033F63',
                        '#28666E',
                        '#7C9885',
                        '#B5B682',
                        // '#797596',
                        // '#0B1D51',
                        // '#34344A'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true
            }
        })
    }
}

