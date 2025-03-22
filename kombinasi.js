// Initialize particles.js when DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    // Set Main content as active by default
    showMain();
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
          "value": "#3a86ff"
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
    animateBalls();
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
  function animateBalls() {
    const balls = document.querySelectorAll('.ball');
    balls.forEach((ball, index) => {
      ball.style.animation = 'none';
      setTimeout(() => {
        ball.style.animation = `bounce 2s infinite alternate ${index * 0.2}s`;
      }, 10);
    });
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
  
  // Combination calculation C(n,r) = n! / (r! * (n-r)!)
  function combination(n, r) {
    if (r > n) {
      return 0;
    }
    
    if (r === 0 || r === n) {
      return 1;
    }
    
    try {
      // Direct calculation with math.js if available
      return math.combinations(n, r);
    } catch (e) {
      // Manual calculation as fallback
      // To avoid overflow, we calculate C(n,r) = n! / (r! * (n-r)!)
      // by dividing and multiplying terms to keep numbers manageable
      
      // Use the smaller of r and n-r to minimize calculations
      let k = Math.min(r, n - r);
      let c = 1;
      
      for (let i = 1; i <= k; i++) {
        c *= (n - (i - 1));
        c /= i;
      }
      
      return Math.round(c);
    }
  }
  
  // Format large numbers with commas
  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  
  // Calculate combinations from form inputs
  function calculateCombinations() {
    // Get values from inputs
    const merah = parseInt(document.getElementById('merah').value) || 0;
    const pilihMerah = parseInt(document.getElementById('pilihMerah').value) || 0;
    const biru = parseInt(document.getElementById('biru').value) || 0;
    const pilihBiru = parseInt(document.getElementById('pilihBiru').value) || 0;
    const kuning = parseInt(document.getElementById('kuning').value) || 0;
    const pilihKuning = parseInt(document.getElementById('pilihKuning').value) || 0;
    
    // Validate inputs
    if (pilihMerah > merah) {
      showError('Jumlah bola merah yang dipilih tidak boleh lebih dari jumlah total bola merah');
      return;
    }
    
    if (pilihBiru > biru) {
      showError('Jumlah bola biru yang dipilih tidak boleh lebih dari jumlah total bola biru');
      return;
    }
    
    if (pilihKuning > kuning) {
      showError('Jumlah bola kuning yang dipilih tidak boleh lebih dari jumlah total bola kuning');
      return;
    }
    
    // Calculate combinations
    const combiMerah = combination(merah, pilihMerah);
    const combiBiru = combination(biru, pilihBiru);
    const combiKuning = combination(kuning, pilihKuning);
    
    // Calculate total ways
    const total = combiMerah * combiBiru * combiKuning;
    
    // Display results
    const resultDiv = document.getElementById('result');
    
    let resultHTML = '';
    
    if (merah > 0 && pilihMerah > 0) {
      resultHTML += `<p><strong>Bola Merah:</strong><br>
      <span class="combination-symbol"><sub>${merah}</sub>C<sub>${pilihMerah}</sub></span> = ${formatNumber(combiMerah)} cara</p>`;
    }
    
    if (biru > 0 && pilihBiru > 0) {
      resultHTML += `<p><strong>Bola Biru:</strong><br>
      <span class="combination-symbol"><sub>${biru}</sub>C<sub>${pilihBiru}</sub></span> = ${formatNumber(combiBiru)} cara</p>`;
    }
    
    if (kuning > 0 && pilihKuning > 0) {
      resultHTML += `<p><strong>Bola Kuning:</strong><br>
      <span class="combination-symbol"><sub>${kuning}</sub>C<sub>${pilihKuning}</sub></span> = ${formatNumber(combiKuning)} cara</p>`;
    }
    
    resultHTML += `<p><strong>Total cara:</strong> ${formatNumber(total)}</p>`;
    
    resultDiv.innerHTML = resultHTML;
    
    // Generate ball visualization
    generateBallVisualization(merah, pilihMerah, biru, pilihBiru, kuning, pilihKuning);
    
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
  
  // Generate ball visualization
  function generateBallVisualization(merah, pilihMerah, biru, pilihBiru, kuning, pilihKuning) {
    const visualizationDiv = document.getElementById('ball-visualization');
    visualizationDiv.innerHTML = '';
    
    // Limit the number of balls displayed to prevent overcrowding
    const maxBallsToShow = 50;
    const totalBalls = merah + biru + kuning;
    const scaleFactor = totalBalls > maxBallsToShow ? maxBallsToShow / totalBalls : 1;
    
    // Calculate how many balls of each color to show
    const redToShow = Math.ceil(merah * scaleFactor);
    const blueToShow = Math.ceil(biru * scaleFactor);
    const yellowToShow = Math.ceil(kuning * scaleFactor);
    
    // Calculate selected balls (highlighted)
    const redSelected = Math.ceil(pilihMerah * scaleFactor);
    const blueSelected = Math.ceil(pilihBiru * scaleFactor);
    const yellowSelected = Math.ceil(pilihKuning * scaleFactor);
    
    // Create container for each color
    const redContainer = document.createElement('div');
    redContainer.className = 'color-group';
    
    const blueContainer = document.createElement('div');
    blueContainer.className = 'color-group';
    
    const yellowContainer = document.createElement('div');
    yellowContainer.className = 'color-group';
    
    // Add red balls
    for (let i = 0; i < redToShow; i++) {
      const ball = document.createElement('div');
      ball.className = 'small-ball red';
      if (i < redSelected) {
        ball.style.border = '2px solid white';
        ball.style.boxShadow = '0 0 5px rgba(255, 255, 255, 0.7)';
      }
      redContainer.appendChild(ball);
    }
    
    // Add blue balls
    for (let i = 0; i < blueToShow; i++) {
      const ball = document.createElement('div');
      ball.className = 'small-ball blue';
      if (i < blueSelected) {
        ball.style.border = '2px solid white';
        ball.style.boxShadow = '0 0 5px rgba(255, 255, 255, 0.7)';
      }
      blueContainer.appendChild(ball);
    }
    
    // Add yellow balls
    for (let i = 0; i < yellowToShow; i++) {
      const ball = document.createElement('div');
      ball.className = 'small-ball yellow';
      if (i < yellowSelected) {
        ball.style.border = '2px solid white';
        ball.style.boxShadow = '0 0 5px rgba(255, 255, 255, 0.7)';
      }
      yellowContainer.appendChild(ball);
    }
    
    // Add all containers to visualization
    visualizationDiv.appendChild(redContainer);
    visualizationDiv.appendChild(blueContainer);
    visualizationDiv.appendChild(yellowContainer);
    
    // Apply animation to balls
    const balls = visualizationDiv.querySelectorAll('.small-ball');
    balls.forEach((ball, index) => {
      ball.style.transform = 'scale(0)';
      setTimeout(() => {
        ball.style.transition = 'transform 0.3s ease';
        ball.style.transform = 'scale(1)';
      }, 20 * index);
    });
  }
  