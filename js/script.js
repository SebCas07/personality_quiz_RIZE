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

// SCoring map 

const scoringMap = [
    
    // Question 1
    { A: "Hip-Hop", B: "Pop", C: "Rock", D: "R&B"}, 

    // Question 2
    { A: "Hip-Hop", B: "Pop", C: "Latin", D: "Electronic (EDM)"},

    // Question 3
    { A: "R&B", B: "Jazz", C: "CLassical", D: "Indie"},

    // Question 4
    { A: "Country", B: "Metal", C: "Classical", D: "R&Electronic (EDM)"},

    // Question 5
    { A: "Afrobeats", B: "Indie", C: "Rock", D: "K-Pop"}
]

// descriptions shown with each result 

const genreDescriptions = { 
    
}