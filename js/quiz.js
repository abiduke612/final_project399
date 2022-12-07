(function(){
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        answerContainers[questionNumber].innerHTML = answerContainers[questionNumber].innerHTML.replace('<br> Incorrect!', "");
        answerContainers[questionNumber].innerHTML = answerContainers[questionNumber].innerHTML.replace('<br> Correct!', "");
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'green';

          answerContainers[questionNumber].innerHTML += '<br> Correct!';
          
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = '#BD0000';

          answerContainers[questionNumber].innerHTML += '<br> Incorrect!';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `<br> &nbsp &nbsp &nbsp ${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
        {
            question: "1. Americans use about ____ of the world's energy each year",
            answers: {
              a: "10%",
              b: "3%",
              c: "19%", 
              d: "25%"
            },
            correctAnswer: "d"
        },
        {
            question: "2. How many gallons of water does one pair of jeans take to produce? (Hint: think about the water needed to grow cotton, etc.)",
            answers: {
            a: "180",
            b: "1800",
            c: "18,000",
            d: "18"
            },
            correctAnswer: "b"
        },
        {
            question: "3. What is NOT something you as an individual should do to help sustainability?",
            answers: {
            a: "Recycle",
            b: "Drive alone to work everyday",
            c: "Cut beef out of your diet",
            d: "Turn of lights when you're not using them"
            },
            correctAnswer: "b"
        },
        {
          question: "4. What is NOT a type of renewable energy?",
          answers: {
          a: "Gas",
          b: "Solar",
          c: "Wind",
          d: "Geothermal"
          },
          correctAnswer: "a"
        },
        {
          question: "5. How many years does it take for a plastic water bottle to decompose completely?",
          answers: {
          a: "10 years",
          b: "250 years",
          c: "450 years",
          d: "1000 years"
          },
          correctAnswer: "c"
        },
        {
          question: "6. When you turn on an incandescent light bulb, how much of the energy is wasted (not turned into light)?",
          answers: {
          a: "99",
          b: "50",
          c: "90",
          d: "10"
          },
          correctAnswer: "c"
        },
        {
          question: "7. What was NOT one of the 3 important sustainability laws passed in 1970?",
          answers: {
          a: "Clean Air Act",
          b: "Clean Water Act",
          c: "Clean Homes Act",
          d: "Toxic Substances Control Act"
          },
          correctAnswer: "c"
        },
        {
          question: "8. About how many gallons of water does the average person use per year?",
          answers: {
          a: "5,000",
          b: "30,000",
          c: "1,000",
          d: "95,000"
          },
          correctAnswer: "b"
        },
        {
          question: "9. What animal contributes the most to climate change?",
          answers: {
          a: "Pigs",
          b: "Dogs",
          c: "Chickens",
          d: "Cattle"
          },
          correctAnswer: "d"
        },
        {
          question: "10. What is the most sustainable country in the world?",
          answers: {
          a: "USA",
          b: "Iceland",
          c: "Norway",
          d: "Finland"
          },
          correctAnswer: "d"
        }
    ];
  
    // Kick things off
    buildQuiz();
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
  })();