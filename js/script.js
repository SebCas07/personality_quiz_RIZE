console.log("script.js connected!");

const selectedAnswers = {}; 

// toggle button fill and trsack answer 
const questionBlocks = document.querySelectorAll(".question-block"); 
 questionBlocks.forEach((block, questionIndex) => { 
    const buttons = block.querySelectorAll(".answer-btn"); 

    buttons.forEach((btn) => { 
        btn.addEventListener("click", () => { 
            // remove selected from every button in this block
            buttons.forEach((b) => b.classList.remove("selected")); 

            // highligjt the clicked button
            btn.classList.add("selected"); 

            // stores the answer letter for the question 
            selectedAnswers[questionIndex] = btn.getAttribute("data-answer"); 

        });
    });
 });