// Finance Bingo Game - Prompt Bank
const promptBank = [
    {
      number: 1,
      tile: "Buy Apples",
      scenario: "Your friends say you should eat more fruits. You decide to get apples.",
      options: [
        { label: "Imported Apples – ₹180", cost: 180 },
        { label: "Local Apples (20% off) – ₹90 → ₹72", cost: 72 }
      ]
    },
    {
      number: 2,
      tile: "Streaming Subscription",
      scenario: "You're bored and want entertainment. Should you get a Netflix subscription?",
      options: [
        { label: "Full Subscription – ₹499", cost: 499 },
        { label: "Split with Friends – ₹150", cost: 150 },
        { label: "Skip It", cost: 0 }
      ]
    },
    {
      number: 3,
      tile: "Buy Shampoo",
      scenario: "You ran out of shampoo. You're at the store now.",
      options: [
        { label: "Branded Shampoo – ₹260", cost: 260 },
        { label: "Generic Store Brand – ₹100", cost: 100 }
      ]
    },
    {
      number: 4,
      tile: "Weekend Snacks",
      scenario: "You're craving snacks while watching TV. What do you do?",
      options: [
        { label: "Order Online Snacks – ₹300", cost: 300 },
        { label: "Buy from Local Kirana – ₹120", cost: 120 },
        { label: "Skip", cost: 0 }
      ]
    },
    {
      number: 5,
      tile: "Monthly Groceries",
      scenario: "It's time for your monthly grocery stock-up.",
      options: [
        { label: "Buy in Bulk – ₹500 (saves ₹100)", cost: 500 },
        { label: "Buy Week-by-Week – ₹150 x 4 = ₹600", cost: 600 }
      ]
    },
    {
      number: 6,
      tile: "Buy Toothpaste",
      scenario: "You're low on toothpaste. Time to restock.",
      options: [
        { label: "Big Pack – ₹120 (lasts longer)", cost: 120 },
        { label: "Small Tube – ₹50", cost: 50 }
      ]
    },
    {
      number: 7,
      tile: "Online Sale Temptation",
      scenario: "There's a HUGE online sale going on. Do you splurge?",
      options: [
        { label: "Buy Clothes – ₹800", cost: 800 },
        { label: "Just Window Shop – ₹0", cost: 0 }
      ]
    },
    {
      number: 8,
      tile: "Buy Milk",
      scenario: "You need milk for tea/coffee every day.",
      options: [
        { label: "Daily Pack – ₹40", cost: 40 },
        { label: "Monthly Subscription – ₹900 (₹30/day)", cost: 900 }
      ]
    },
    {
      number: 9,
      tile: "Go Out for Dinner",
      scenario: "Your friends invite you for dinner at a fancy place.",
      options: [
        { label: "Go Out – ₹700", cost: 700 },
        { label: "Host at Home – ₹250", cost: 250 },
        { label: "Skip", cost: 0 }
      ]
    },
    {
      number: 10,
      tile: "Buy Detergent",
      scenario: "Laundry day is here. You're out of detergent.",
      options: [
        { label: "Eco-friendly Detergent – ₹280", cost: 280 },
        { label: "Regular Detergent – ₹140", cost: 140 }
      ]
    },
    {
      number: 11,
      tile: "Buy Facewash",
      scenario: "You want to take better care of your skin.",
      options: [
        { label: "Popular Brand – ₹350", cost: 350 },
        { label: "Ayurvedic Brand – ₹180", cost: 180 }
      ]
    },
    {
      number: 12,
      tile: "Weekend Getaway",
      scenario: "You're feeling burned out. Should you go on a trip?",
      options: [
        { label: "Go to Nearby Resort – ₹1500", cost: 1500 },
        { label: "Netflix & Chill – ₹0", cost: 0 }
      ]
    },
    {
      number: 13,
      tile: "Buy Coffee",
      scenario: "You can't function without caffeine. How do you get your fix?",
      options: [
        { label: "Buy Café Coffee – ₹250", cost: 250 },
        { label: "Brew at Home – ₹60", cost: 60 }
      ]
    },
    {
      number: 14,
      tile: "Gift for Friend",
      scenario: "It's your friend's birthday.",
      options: [
        { label: "Buy a Gift – ₹600", cost: 600 },
        { label: "DIY Handmade Gift – ₹100", cost: 100 },
        { label: "Skip", cost: 0 }
      ]
    },
    {
      number: 15,
      tile: "Buy Soap",
      scenario: "Your soap is almost finished.",
      options: [
        { label: "Organic Brand – ₹130", cost: 130 },
        { label: "Regular Bar – ₹45", cost: 45 }
      ]
    },
    {
      number: 16,
      tile: "Buy Vegetables",
      scenario: "You're prepping meals for the week.",
      options: [
        { label: "Organic Veggies – ₹300", cost: 300 },
        { label: "Market Veggies – ₹120", cost: 120 }
      ]
    },
    {
      number: 17,
      tile: "Weekend Delivery",
      scenario: "Too lazy to cook this Sunday.",
      options: [
        { label: "Order Food – ₹500", cost: 500 },
        { label: "Make Maggi – ₹30", cost: 30 }
      ]
    },
    {
      number: 18,
      tile: "Buy Hair Oil",
      scenario: "Your hair's been dry lately.",
      options: [
        { label: "Coconut Oil – ₹110", cost: 110 },
        { label: "Fancy Herbal Oil – ₹350", cost: 350 }
      ]
    },
    {
      number: 19,
      tile: "Recharge Mobile Plan",
      scenario: "Your prepaid plan expires today.",
      options: [
        { label: "Monthly Recharge – ₹249", cost: 249 },
        { label: "3-Month Plan – ₹699 (₹233/mo)", cost: 699 }
      ]
    },
    {
      number: 20,
      tile: "Weekend Movie Plan",
      scenario: "You want to relax with a movie this weekend.",
      options: [
        { label: "Theatre Ticket + Snacks – ₹450", cost: 450 },
        { label: "Movie at Home – ₹0", cost: 0 }
      ]
    },
    {
      number: 21,
      tile: "Buy Stationery",
      scenario: "You're running low on pens and notebooks.",
      options: [
        { label: "Full Stationery Kit – ₹300", cost: 300 },
        { label: "Buy Only What You Need – ₹120", cost: 120 }
      ]
    },
    {
      number: 22,
      tile: "Pay for Gym",
      scenario: "You've been thinking of starting workouts.",
      options: [
        { label: "1-Month Gym Pass – ₹1000", cost: 1000 },
        { label: "YouTube Workouts – ₹0", cost: 0 }
      ]
    },
    {
      number: 23,
      tile: "Buy Eggs",
      scenario: "You need protein in your diet.",
      options: [
        { label: "Free Range Eggs – ₹180", cost: 180 },
        { label: "Regular Eggs – ₹100", cost: 100 }
      ]
    },
    {
      number: 24,
      tile: "Replace Charger",
      scenario: "Your charger broke this morning.",
      options: [
        { label: "Original Brand – ₹900", cost: 900 },
        { label: "Local Charger – ₹250", cost: 250 }
      ]
    },
    {
      number: 25,
      tile: "Buy Ice Cream",
      scenario: "You're craving something sweet after a long day.",
      options: [
        { label: "Ice Cream Tub – ₹250", cost: 250 },
        { label: "Kulfi from street vendor – ₹50", cost: 50 }
      ]
    }
  ];
  
  // Wait for DOM to fully load before initializing
  document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded, initializing bingo game");
    
    // Game state
    let budget = 1000;
    let currentNumber = null;
    let drawnNumbers = new Set();
    let selectedTiles = new Set();
    let apiKey = "AIzaSyC5W_suzlz8f5EYxTjz5QTTxCv57gAn2Q4";
    
    // Get DOM elements
    const bingoBoard = document.getElementById('bingo-board');
    const drawButton = document.getElementById('draw-ball');
    const drawnNumberDisplay = document.getElementById('drawn-number');
    const budgetDisplay = document.getElementById('budget-display');
    const resultDisplay = document.getElementById('result-display');
    const questionModal = document.getElementById('question-modal');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const apiKeyModal = document.getElementById('api-key-modal');
    const apiKeyInput = document.getElementById('apiKey');
    const submitApiKey = document.getElementById('submit-api-key');
    const aiFeedbackPanel = document.getElementById('ai-feedback-panel');
    const loadingSpinner = document.querySelector('.loading-spinner');
    const aiFeedbackContent = document.getElementById('ai-feedback-content');
    const aiInsights = document.getElementById('ai-insights');
    const lessonTitle = document.getElementById('lesson-title');
    const lessonContent = document.getElementById('lesson-content');
    const aiSummary = document.getElementById('ai-summary');
    const restartGame = document.getElementById('restart-game');
    
    // Update budget display
    function updateBudgetDisplay() {
      budgetDisplay.textContent = `Budget: ₹${budget}`;
    }
    
    // Generate a randomized board
    function createBoard() {
      // Generate random numbers 1-25
      const numbers = Array.from({length: 25}, (_, i) => i + 1);
      for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
      }
      
      // Create the visual board
      bingoBoard.innerHTML = '';
      numbers.forEach(num => {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.textContent = num;
        tile.dataset.number = num;
        
        // Set click handler
        tile.addEventListener('click', function() {
          handleTileClick(num, tile);
        });
        
        bingoBoard.appendChild(tile);
      });
      
      return numbers;
    }
    
    // Handle tile clicks
    function handleTileClick(number, tileElement) {
      console.log(`Tile ${number} clicked. Current drawn number: ${currentNumber}`);
      
      // Can only select the current drawn number
      if (number != currentNumber || selectedTiles.has(number)) {
        console.log("Cannot select this tile now");
        return;
      }
      
      // Find prompt for this number
      const prompt = promptBank.find(p => p.number === number);
      if (!prompt) {
        console.error(`No prompt found for number ${number}`);
        return;
      }
      
      // Mark the tile as being processed
      tileElement.classList.add('processing');
      
      // Show the scenario in the modal
      openScenarioModal(prompt, tileElement);
    }
    
    // Open the scenario modal with the prompt
    function openScenarioModal(prompt, tileElement) {
      console.log("Opening modal with prompt:", prompt);
      
      questionText.textContent = prompt.scenario;
      optionsContainer.innerHTML = '';
      
      // Create buttons for each option
      prompt.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.label;
        button.className = 'option-btn';
        
        button.addEventListener('click', function() {
          handleOptionSelection(prompt.number, option, tileElement);
        });
        
        optionsContainer.appendChild(button);
      });
      
      // Show the modal
      questionModal.classList.remove('hidden');
    }
    
    // Track choices made in the game
    const playerChoices = new Map();
    
    // Handle option selection
    function handleOptionSelection(tileNumber, option, tileElement) {
      console.log(`Selected option: ${option.label} costing ₹${option.cost}`);
      
      // Check if we can afford it
      if (budget < option.cost) {
        resultDisplay.textContent = "Game Over: You can't afford this!";
        drawButton.disabled = true;
        closeModal();
        // Show AI feedback when game ends
        setTimeout(() => {
          saveGameAndGetFeedback();
        }, 1500);
        return;
      }
      
      // Update budget
      budget -= option.cost;
      updateBudgetDisplay();
      
      // Store the choice made for this tile
      playerChoices.set(tileNumber, option);
      
      // Mark as selected
      selectedTiles.add(tileNumber);
      tileElement.classList.remove('processing');
      tileElement.classList.add('clicked');
      
      // Reset current number
      currentNumber = null;
      drawnNumberDisplay.textContent = '';
      
      // Close the modal
      closeModal();
      
      // Check for bingo
      if (checkBingo()) {
        resultDisplay.textContent = "🎉 Bingo! You win!";
        drawButton.disabled = true;
        // Show AI feedback when game ends
        setTimeout(() => {
          saveGameAndGetFeedback();
        }, 1500);
      }
    }
    
    // Close the modal
    function closeModal() {
      questionModal.classList.add('hidden');
    }
    
    // Draw a new bingo ball
    function drawBall() {
      console.log("Drawing a new ball");
      
      // If a number is already drawn but not selected, don't draw a new one
      if (currentNumber !== null) {
        console.log("Cannot draw a new number until current one is processed");
        return;
      }
      
      // Get numbers not yet drawn
      const remainingNumbers = Array.from({length: 25}, (_, i) => i + 1)
        .filter(n => !drawnNumbers.has(n));
      
      if (remainingNumbers.length === 0) {
        drawnNumberDisplay.textContent = "All numbers drawn!";
        return;
      }
      
      // Draw a random number
      const randomIndex = Math.floor(Math.random() * remainingNumbers.length);
      const drawnNumber = remainingNumbers[randomIndex];
      
      // Update state
      currentNumber = drawnNumber;
      drawnNumbers.add(drawnNumber);
      
      // Update display
      drawnNumberDisplay.textContent = `You got: ${drawnNumber}`;
      console.log(`Drew number ${drawnNumber}`);
    }
    
    // Check if player has achieved bingo
    function checkBingo() {
      // Convert selectedTiles to a board layout
      const board = [];
      const boardSize = 5;
      
      // Find all tiles
      const allTiles = Array.from(bingoBoard.querySelectorAll('.tile'));
      
      // Create 5x5 grid representation
      for (let row = 0; row < boardSize; row++) {
        const boardRow = [];
        for (let col = 0; col < boardSize; col++) {
          const index = row * boardSize + col;
          const tileNumber = parseInt(allTiles[index].dataset.number);
          boardRow.push(selectedTiles.has(tileNumber));
        }
        board.push(boardRow);
      }
      
      // Check rows
      for (let i = 0; i < boardSize; i++) {
        if (board[i].every(cell => cell)) return true;
      }
      
      // Check columns
      for (let i = 0; i < boardSize; i++) {
        const column = board.map(row => row[i]);
        if (column.every(cell => cell)) return true;
      }
      
      // Check diagonals
      const diagonal1 = Array.from({length: boardSize}, (_, i) => board[i][i]);
      const diagonal2 = Array.from({length: boardSize}, (_, i) => board[i][boardSize - 1 - i]);
      
      if (diagonal1.every(cell => cell)) return true;
      if (diagonal2.every(cell => cell)) return true;
      
      return false;
    }
    
    // Get game summary for AI analysis
    function getGameSummary() {
      const choices = [];
      
      // Find all choices made during the game
      selectedTiles.forEach(number => {
        const prompt = promptBank.find(p => p.number === number);
        const selectedOption = playerChoices.get(number);
        
        if (prompt && selectedOption) {
          const choice = {
            tileNumber: number,
            tileName: prompt.tile,
            scenario: prompt.scenario,
            choice: selectedOption.label,
            cost: selectedOption.cost
          };
          
          choices.push(choice);
        }
      });
      
      return {
        startingBudget: 1000,
        remainingBudget: budget,
        totalSpent: 1000 - budget,
        choices: choices,
        outcome: checkBingo() ? "WIN" : (budget <= 0 ? "LOSS" : "ONGOING")
      };
    }
    
    // Save game and get AI feedback
    // ======== FINANCE BINGO AI ANALYZER ========
async function saveGameAndGetFeedback() {
  const summary = getGameSummary();
  showLoading();

  // 1. FIRST TRY GEMINI API
  try {
    const aiResponse = await callGeminiAPI(summary);
    displayFeedback(aiResponse, false); // false = API success
  } 
  // 2. IF API FAILS, USE LOCAL AI
  catch (error) {
    console.error("API Failed. Using local analysis:", error);
    const localAnalysis = generateLocalAnalysis(summary);
    displayFeedback(localAnalysis, true); // true = fallback mode
  }
}

// ====== GEMINI API CALL ======
async function callGeminiAPI(summary) {
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAvJ0unQoZCMpwZYj1zwDr-2mRzVGNthAA`;
  
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{
        parts: [{ 
          text: `Analyze these financial choices in JSON format:
          ${JSON.stringify({
            budget: summary.remainingBudget,
            choices: summary.choices.map(c => ({
              item: c.tileName,
              cost: c.cost,
              choice: c.choice
            }))
          })}`
        }]
      }]
    })
  });

  if (!response.ok) throw new Error(`API Error: ${response.status}`);
  return await response.json();
}

// ====== LOCAL AI ENGINE ======
function generateLocalAnalysis(summary) {
  // Advanced financial metrics
  const metrics = {
    totalSpent: summary.totalSpent,
    avgSpend: (summary.totalSpent / summary.choices.length).toFixed(0),
    luxuryItems: summary.choices.filter(c => c.cost > 300).length,
    savings: summary.remainingBudget,
    worstChoice: [...summary.choices].sort((a, b) => b.cost - a.cost)[0],
    bestChoice: [...summary.choices].sort((a, b) => a.cost - a.cost)[0]
  };

  // AI-style feedback rules
  return {
    insights: [
      {
        icon: metrics.savings > 500 ? "💰" : "💸",
        text: metrics.savings > 500 ? 
          `Great savings! ₹${metrics.savings} remaining` : 
          `Only ₹${metrics.savings} left - budget tighter next time`,
        type: metrics.savings > 500 ? "good" : "bad"
      },
      {
        icon: "📊",
        text: `Average spend: ₹${metrics.avgSpend} per choice`,
        type: metrics.avgSpend > 200 ? "warning" : "good"
      },
      {
        icon: "⚠️",
        text: metrics.luxuryItems > 0 ?
          `${metrics.luxuryItems} luxury purchases (₹300+ each)` :
          "No luxury items - smart!",
        type: metrics.luxuryItems > 0 ? "bad" : "good"
      }
    ],
    advice: generatePersonalizedAdvice(metrics)
  };
}

// ====== DISPLAY SYSTEM ======
function displayFeedback(data, isFallback) {
  if (!isFallback) {
    // Process real API response
    const aiText = data.candidates[0].content.parts[0].text;
    aiInsights.innerHTML = `
      <div class="insight">
        <span class="insight-icon">🤖</span>
        <div>${aiText || "Gemini analysis complete"}</div>
      </div>`;
  } else {
    // Display local analysis
    aiInsights.innerHTML = data.insights.map(i => `
      <div class="insight ${i.type}">
        <span class="insight-icon">${i.icon}</span>
        <div>${i.text}</div>
      </div>`).join('');
  }

  hideLoading();
}

// ====== UTILITIES ======
function showLoading() {
  aiFeedbackPanel.classList.remove('hidden');
  loadingSpinner.classList.remove('hidden');
  aiFeedbackContent.style.display = 'none';
}

function hideLoading() {
  loadingSpinner.classList.add('hidden');
  aiFeedbackContent.style.display = 'block';
}
      
      // Backup local analysis
      function getLocalAnalysis() {
        const summary = getGameSummary();
        const avgSpend = (summary.totalSpent / summary.choices.length).toFixed(0);
        return `You spent ₹${avgSpend} per choice on average. ${avgSpend > 200 ? "Too expensive!" : "Good budget control!"}`;
      }
    
    // Initialize game
    function initGame() {
      // Create the board
      createBoard();
      
      // Add event listener for the draw button
      drawButton.addEventListener('click', drawBall);
      
      // Close button for modal
      document.querySelector('.close-button').addEventListener('click', closeModal);
      document.querySelector('.close-modal-btn').addEventListener('click', closeModal);
      
      // Restart game button
      restartGame.addEventListener('click', function() {
        window.location.reload();
      });
      
      // Initialize budget display
      updateBudgetDisplay();
      
      console.log("Game initialized");
    }
    
    // Start the game
    initGame();
  });