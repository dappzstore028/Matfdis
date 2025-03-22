// Initialize particles.js when DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    // Set Main content as active by default
    showMain();
    
    // Start the animation for the queue numbers
    animateQueueNumbers();
  });
  
  // Particles.js configuration
  function initParticles() {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ff006e"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#8338ec",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 3,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }
  
  // Navigation Functions
  function showMain() {
    hideAllContent();
    document.getElementById('main-content').classList.add('active');
    scrollToTop();
  }
  
  function showKasus() {
    hideAllContent();
    document.getElementById('kasus-content').classList.add('active');
    scrollToTop();
    animateQueueNumbers();
  }
  
  function showKasusPembahasan() {
    hideAllContent();
    document.getElementById('kasus-pembahasan-content').classList.add('active');
    scrollToTop();
    animateSteps();
  }
  
  function showCalculator() {
    hideAllContent();
    document.getElementById('calculator-content').classList.add('active');
    scrollToTop();
  }
  
  function hideAllContent() {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
      content.classList.remove('active');
    });
  }
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Animation Functions
  function animateQueueNumbers() {
    const digit1 = document.getElementById('digit1');
    const digit2 = document.getElementById('digit2');
    const digit3 = document.getElementById('digit3');
    
    if (!digit1 || !digit2 || !digit3) return;
    
    // Reset animations
    [digit1, digit2, digit3].forEach(digit => {
      digit.style.animation = 'none';
      setTimeout(() => {
        digit.style.animation = 'flipNumber 5s infinite';
      }, 10);
    });
    
    // Change numbers randomly
    let numbers = [0, 1, 2, 3];
    setInterval(() => {
      const randomNumbers = getRandomNumbers(numbers, 3);
      digit1.textContent = randomNumbers[0];
      setTimeout(() => {
        digit2.textContent = randomNumbers[1];
      }, 1500);
      setTimeout(() => {
        digit3.textContent = randomNumbers[2];
      }, 3000);
    }, 5000);
  }
  
  function getRandomNumbers(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
  
  function animateSteps() {
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
      step.style.opacity = '0';
      step.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        step.style.opacity = '1';
        step.style.transform = 'translateY(0)';
      }, 100 * index);
    });
  }
  
  // Factorial calculation
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    
    try {
      // Use math.js for larger calculations
      return math.factorial(n);
    } catch (e) {
      // Fallback to manual calculation
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
      return result;
    }
  }
  
  // Permutation calculation P(n,r) = n! / (n-r)!
  function permutation(n, r) {
    if (r > n) {
      return 0;
    }
    
    try {
      // Direct calculation with math.js if available
      return math.permutations(n, r);
    } catch (e) {
      // Manual calculation as fallback
      return factorial(n) / factorial(n - r);
    }
  }
  
  // Format large numbers with commas
  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  
  // Parse input string to get array of numbers
  function parseNumberInput(input) {
    // Check if input uses range format (e.g., "0-9")
    if (input.includes('-')) {
      const [start, end] = input.split('-').map(n => parseInt(n.trim()));
      const numbers = [];
      for (let i = start; i <= end; i++) {
        numbers.push(i);
      }
      return numbers;
    }
    
    // Otherwise, parse as comma separated list
    return input.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
  }
  
  // Calculate permutations from form inputs
  function calculatePermutationsFromInput() {
    // Get values from inputs
    const numbersInput = document.getElementById('numbers').value;
    const panjangAntrian = parseInt(document.getElementById('panjangAntrian').value);
    const allowRepeats = document.getElementById('allowRepeats').checked;
    
    // Validate inputs
    if (!numbersInput) {
      showError('Masukkan angka yang tersedia.');
      return;
    }
    
    if (isNaN(panjangAntrian) || panjangAntrian < 1) {
      showError('Masukkan panjang antrian yang valid (minimal 1).');
      return;
    }
    
    // Parse numbers input
    const numbers = parseNumberInput(numbersInput);
    
    if (numbers.length === 0) {
      showError('Format angka tidak valid. Gunakan format "1,2,3" atau "0-9".');
      return;
    }
    
    // Calculate result
    let result;
    let resultText;
    
    if (allowRepeats) {
      // With repeats, permutation is n^r
      result = Math.pow(numbers.length, panjangAntrian);
      resultText = `<p>Permutasi dengan pengulangan:<br>
      <span class="permutation-symbol">P</span> = ${numbers.length}<sup>${panjangAntrian}</sup> = ${formatNumber(result)}</p>`;
    } else {
      // Without repeats, permutation is P(n,r) = n! / (n-r)!
      if (panjangAntrian > numbers.length) {
        showError(`Panjang antrian (${panjangAntrian}) tidak boleh lebih besar dari jumlah angka tersedia (${numbers.length}) jika tidak mengizinkan pengulangan.`);
        return;
      }
      
      result = permutation(numbers.length, panjangAntrian);
      resultText = `<p>Permutasi tanpa pengulangan:<br>
      <span class="permutation-symbol">P</span>(${numbers.length},${panjangAntrian}) = 
      ${numbers.length}! / (${numbers.length}-${panjangAntrian})! = ${formatNumber(result)}</p>`;
    }
    
    // Display results
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = resultText;
    
    // Generate visualization
    generatePermutationVisualization(numbers, panjangAntrian, allowRepeats);
    
    // Apply animation effect to result
    resultDiv.style.animation = 'none';
    setTimeout(() => {
      resultDiv.style.animation = 'fadeIn 0.5s ease-in-out';
    }, 10);
  }
  
  // Show error message
  function showError(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p class="error"><i class="fas fa-exclamation-circle"></i> Error: ${message}</p>`;
    
    // Shake animation for error
    resultDiv.style.animation = 'none';
    setTimeout(() => {
      resultDiv.style.animation = 'shake 0.5s ease-in-out';
    }, 10);
  }
  
  // Shake animation for errors
  document.styleSheets[0].insertRule(`
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
      20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
  `, document.styleSheets[0].cssRules.length);
  
  // Generate permutation visualization
  function generatePermutationVisualization(numbers, length, allowRepeats) {
    const visualizationDiv = document.getElementById('permutation-visualization');
    if (!visualizationDiv) return;
    
    visualizationDiv.innerHTML = '';
    
    // Only show a subset of possible permutations to avoid overwhelming the UI
    const maxToShow = 20;
    const possiblePerms = generatePermutationExamples(numbers, length, allowRepeats, maxToShow);
    
    // Create container for permutation examples
    const examplesContainer = document.createElement('div');
    examplesContainer.className = 'permutation-examples';
    
    // Add a label
    const label = document.createElement('p');
    label.textContent = possiblePerms.length >= maxToShow 
      ? `Beberapa contoh permutasi (dari total ${formatNumber(allowRepeats ? Math.pow(numbers.length, length) : permutation(numbers.length, length))}):`
      : 'Semua kemungkinan permutasi:';
    examplesContainer.appendChild(label);
    
    // Add examples
    const examples = document.createElement('div');
    examples.className = 'example-grid';
    examples.style.display = 'grid';
    examples.style.gridTemplateColumns = 'repeat(auto-fill, minmax(80px, 1fr))';
    examples.style.gap = '0.5rem';
    
    possiblePerms.forEach((perm, index) => {
      const example = document.createElement('div');
      example.className = 'permutation-example';
      example.style.display = 'flex';
      example.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
      example.style.padding = '0.5rem';
      example.style.borderRadius = '4px';
      example.style.justifyContent = 'center';
      example.style.opacity = '0';
      example.style.transform = 'scale(0.8)';
      
      perm.forEach(num => {
        const numElement = document.createElement('div');
        numElement.className = 'number-small';
        numElement.textContent = num;
        example.appendChild(numElement);
      });
      
      // Animate the examples in sequence
      setTimeout(() => {
        example.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        example.style.opacity = '1';
        example.style.transform = 'scale(1)';
      }, 50 * index);
      
      examples.appendChild(example);
    });
    
    examplesContainer.appendChild(examples);
    visualizationDiv.appendChild(examplesContainer);
  }
  
  // Generate a sample of possible permutations
  function generatePermutationExamples(numbers, length, allowRepeats, maxCount) {
    const result = [];
    
    if (allowRepeats) {
      // With repeats: Generate random samples
      const totalPossible = Math.pow(numbers.length, length);
      const samplesToGenerate = Math.min(totalPossible, maxCount);
      
      // If small enough, generate all combinations
      if (totalPossible <= maxCount) {
        return generateAllPermutationsWithRepeats(numbers, length);
      }
      
      // Otherwise generate random samples
      const seen = new Set();
      while (result.length < samplesToGenerate) {
        const perm = [];
        for (let i = 0; i < length; i++) {
          perm.push(numbers[Math.floor(Math.random() * numbers.length)]);
        }
        
        const permKey = perm.join(',');
        if (!seen.has(permKey)) {
          seen.add(permKey);
          result.push(perm);
        }
      }
    } else {
      // Without repeats
      const totalPossible = permutation(numbers.length, length);
      const samplesToGenerate = Math.min(totalPossible, maxCount);
      
      // If small enough, generate all combinations
      if (totalPossible <= maxCount) {
        return generateAllPermutationsWithoutRepeats(numbers, length);
      }
      
      // Otherwise generate random samples
      const seen = new Set();
      while (result.length < samplesToGenerate) {
        // Fisher-Yates shuffle for a random permutation
        const shuffled = [...numbers].sort(() => 0.5 - Math.random());
        const perm = shuffled.slice(0, length);
        
        const permKey = perm.join(',');
        if (!seen.has(permKey)) {
          seen.add(permKey);
          result.push(perm);
        }
      }
    }
    
    return result;
  }
  
  // Helper function to generate all permutations with repeats (for small sets)
  function generateAllPermutationsWithRepeats(numbers, length) {
    const result = [];
    
    function backtrack(current) {
      if (current.length === length) {
        result.push([...current]);
        return;
      }
      
      for (let i = 0; i < numbers.length; i++) {
        current.push(numbers[i]);
        backtrack(current);
        current.pop();
      }
    }
    
    backtrack([]);
    return result;
  }
  
  // Helper function to generate all permutations without repeats (for small sets)
  function generateAllPermutationsWithoutRepeats(numbers, length) {
    const result = [];
    
    function backtrack(current, remaining) {
      if (current.length === length) {
        result.push([...current]);
        return;
      }
      
      for (let i = 0; i < remaining.length; i++) {
        const newRemaining = [...remaining];
        const chosen = newRemaining.splice(i, 1)[0];
        
        current.push(chosen);
        backtrack(current, newRemaining);
        current.pop();
      }
    }
    
    backtrack([], numbers);
    return result;
  }