
   
        const questions = [
            {
              question: "What is the capital of France?",
              options: ["Paris", "Berlin", "Rome", "Madrid"],
              answer: "Paris"
            },
            {
              question: "What is the largest mammal?",
              options: ["Elephant", "Blue Whale", "Giraffe", "Lion"],
              answer: "Blue Whale"
            },
            {
              question: "Which planet is known as the Red Planet?",
              options: ["Earth", "Mars", "Jupiter", "Venus"],
              answer: "Mars"
            },
            {
              question: "Who painted the Mona Lisa?",
              options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
              answer: "Leonardo da Vinci"
            },
            {
              question: "What is the chemical symbol for water?",
              options: ["H2O", "CO2", "NaCl", "O2"],
              answer: "H2O"
            },
            {
              question: "What is the capital of Japan?",
              options: ["Beijing", "Tokyo", "Seoul", "Shanghai"],
              answer: "Tokyo"
            },
            {
              question: "Which is the largest ocean on Earth?",
              options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
              answer: "Pacific Ocean"
            },
            {
              question: "Who wrote 'Romeo and Juliet'?",
              options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
              answer: "William Shakespeare"
            },
            {
              question: "What is the tallest mountain in the world?",
              options: ["Mount Kilimanjaro", "Mount Everest", "K2", "Mount Fuji"],
              answer: "Mount Everest"
            },
            {
              question: "Which country is known as the Land of the Rising Sun?",
              options: ["China", "India", "Japan", "South Korea"],
              answer: "Japan"
            },
            {
              question: "What is the largest organ in the human body?",
              options: ["Heart", "Liver", "Brain", "Skin"],
              answer: "Skin"
            },
            {
              question: "Who developed the theory of relativity?",
              options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
              answer: "Albert Einstein"
            },
            {
              question: "What is the currency of India?",
              options: ["Yen", "Dollar", "Rupee", "Euro"],
              answer: "Rupee"
            },
            {
              question: "Which gas do plants use for photosynthesis?",
              options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
              answer: "Carbon Dioxide"
            },
            {
              question: "Who was the first woman to win a Nobel Prize?",
              options: ["Marie Curie", "Mother Teresa", "Rosa Parks", "Indira Gandhi"],
              answer: "Marie Curie"
            }
          ];
          

          const quizContainer = document.getElementById('quiz-container');
          const resultContainer = document.getElementById('result-container');
      
          function displayQuiz() {
            questions.forEach((question, index) => {
              let questionHTML = `<div class="question">`; // Start a div with class "question"
              questionHTML += `<h2>Question  ${index + 1}: ${question.question}</h2>`;
              
              // Limiting options to only four
              for (let i = 0; i < 4; i++) {
                if (question.options[i]) { // Check if option exists
                    questionHTML += `<input type="checkbox" name="q${index}" value="${question.options[i]}" style="color: blue;"> ${question.options[i]}<br>`;
                }
              }
          
              questionHTML += `</div>`; // Close the div
              quizContainer.innerHTML += questionHTML; // Append each question to quiz container directly
            });
          }
          
          function submitQuiz() {
            let score = 0;
            questions.forEach((question, index) => {
              const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
              if (selectedOption) {
                if (selectedOption.value === question.answer) {
                  score++;
                }
              }
            });
            resultContainer.innerHTML = `<h2>Your score is: ${score}</h2>`;
          }
      
          // Display quiz when the page loads
          displayQuiz();
          let timerInterval;
          let timeRemaining = 60; 
          const countdownElement = document.getElementById('countdown');
          const playPauseButton = document.getElementById('play-pause');
          
          function startTimer() {
            timerInterval = setInterval(() => {
              if (timeRemaining > 0) {
                timeRemaining--;
                updateTimerDisplay();
              } else {
                clearInterval(timerInterval);
                submitQuiz(); // Submit quiz automatically when time runs out
              }
            }, 1000); // Update every second
          }
          
          function updateTimerDisplay() {
            const minutes = Math.floor(timeRemaining / 60);
            const seconds = timeRemaining % 60;
            countdownElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
          }
          
          function toggleTimer() {
            if (playPauseButton.classList.contains('paused')) {
              playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
              playPauseButton.classList.remove('paused');
              startTimer();
            } else {
              playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
              playPauseButton.classList.add('paused');
              clearInterval(timerInterval);
            }
          }
          
          playPauseButton.addEventListener('click', toggleTimer);
          
          // Call startTimer() to begin the countdown when the page loads
          startTimer();
          
      
         