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
  "Hip-Hop/Rap":
    "You're all about rhythm, wordplay, and cultural energy. You keep it real, stay current, and always know what's hot. Hip-Hop/Rap is your soundtrack.",
  Pop: "Catchy hooks, big feelings, and mainstream vibes — that's your world. You love music that's fun, relatable, and gets stuck in your head for days.",
  Rock: "Bold, loud, and unapologetically yourself. You're drawn to raw emotion and guitar-driven energy. Rock speaks to your rebellious spirit.",
  "R&B": "Smooth, soulful, and deeply emotional — R&B matches your vibe perfectly. You appreciate music that hits you right in the heart.",
  Latin:
    "Rhythm is in your DNA. Whether it's reggaeton, salsa, or bachata, Latin music's passion and energy reflect your personality perfectly.",
  Electronic:
    "You're forward-thinking, creative, and love losing yourself in a beat. EDM and electronic music match your futuristic, high-energy outlook.",
  Jazz: "Sophisticated, free-spirited, and deeply expressive — Jazz mirrors your complex, artistic soul. You appreciate improvisation and musical depth.",
  Classical:
    "Timeless, disciplined, and emotionally rich. You value craftsmanship and depth, and Classical music speaks to your refined, thoughtful nature.",
  Indie:
    "Independent, authentic, and ahead of the curve. You discover artists before anyone else and love music with genuine, unfiltered character.",
  Afrobeats:
    "Vibrant, joyful, and globally connected. Afrobeats reflects your love for infectious rhythms and a music scene that brings the whole world together.",
  "K-Pop":
    "You love the full package — incredible production, stunning visuals, and unstoppable energy. K-Pop matches your appreciation for artistry and detail.",
  Country:
    "Storytelling, heart, and rootsy authenticity — Country music reflects your love for honest, down-to-earth vibes and timeless themes.",
  Metal:
    "Intense, powerful, and unapologetically heavy — Metal reflects your passion for raw energy, technical skill, and music that goes all out.",
};

// display results 

function displayResult() { 
    // check if ALL questions are answered 
    if(Object.keys(selectedAnswers).length <questionBlocks.length) { 
        alert("Please answer all questions before seeing your result!"); 
        return; 
    }

    // tally scores per genre
    const scores = {}; 

    scoringMap.forEach((questionMap, index) => { 
        const chosenLetter = selectedAnswers[index]; 
        const genre = questionMap[chosenLetter]; 

        if(!genre) return; 

        if(index === 3) { 
            // Q4 is least favorite question so subtract a point
            scores[genre] = (scores[genre] || 0) - 1; 

        } else { 
            // all other questions add a point
            scores[genre] = (scores[genre] || 0) + 1;

        }
    });

    // find genre with the highest score

    let topGenre = null; 
    let topScore = -Infinity; 

    for(const [ genre, score] of Object.entries(scores)) { 
        if(score > topScore) { 
            topScore = score; 
            topGenre = genre; 
        }
    }

    // result message 

    const description = genreDescriptions[topGenre] || "You have a truly unique musical taste that defies a single genre!";
    const resultText = `You are: <strong> ${topGenre} </strong><br><br> ${description}`; 

    // show the result contaner and injecrt result 
    const resultContainer = document.getElementById("result-container"); 
    const resultTextEl = document.getElementById("result-text"); 

    resultTextEl.innerHTML = resultText; 
    resultContainer.style.display = "block"; 

    // scroll smoothly to the result 
    resultContainer.scrollIntoView({behavior: "smooth"}); 

}

// hook up the "Show results" button 

document.getElementById("show-result").addEventListener("click", displayResult); 

