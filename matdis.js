particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#48cae4'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#48cae4',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        }
    },
    retina_detect: true
});

particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#4CAF50' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#4CAF50', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        }
    },
    retina_detect: true
});

// Audio Player Implementation
class AudioController {
    constructor() {
        this.audio = new Audio('nyam.mp3');
        this.audio.loop = true;
        this.isPlaying = false;
        this.setupAudioControls();
    }

    setupAudioControls() {
        // Create audio controls container
        const controls = document.createElement('div');
        controls.className = 'audio-controls';
        
        // Create play/pause button
        const playButton = document.createElement('button');
        playButton.innerHTML = '▶️';
        playButton.onclick = () => this.togglePlay();
        
        // Create volume slider
        const volumeSlider = document.createElement('input');
        volumeSlider.type = 'range';
        volumeSlider.min = '0';
        volumeSlider.max = '100';
        volumeSlider.value = '50';
        volumeSlider.oninput = (e) => this.setVolume(e.target.value);
        
        // Append controls
        controls.appendChild(playButton);
        controls.appendChild(volumeSlider);
        document.body.appendChild(controls);
        
        // Store references
        this.playButton = playButton;
        this.volumeSlider = volumeSlider;
        
        // Set initial volume
        this.setVolume(50);
    }

    togglePlay() {
        if (this.isPlaying) {
            this.audio.pause();
            this.playButton.innerHTML = '▶️';
        } else {
            this.audio.play();
            this.playButton.innerHTML = '⏸️';
        }
        this.isPlaying = !this.isPlaying;
    }

    setVolume(value) {
        this.audio.volume = value / 100;
    }
}

// Team Members Grid Implementation
function createTeamGrid() {
    const teamSection = document.querySelector('.team-section');
    const oldList = teamSection.querySelector('ul');
    const members = Array.from(oldList.querySelectorAll('li a')).map(a => ({
        name: a.textContent,
        link: a.href
    }));
    
    // Remove old list
    oldList.remove();
    
    // Create new grid
    const grid = document.createElement('div');
    grid.className = 'team-grid';
    
    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'team-member-card';
        
        const link = document.createElement('a');
        link.href = member.link;
        link.textContent = member.name;
        
        card.appendChild(link);
        grid.appendChild(card);
    });
    
    teamSection.appendChild(grid);
}

// Calculator Functions
function calculateKombinasi() {
    const n = parseInt(document.getElementById('n-kombinasi').value);
    const r = parseInt(document.getElementById('r-kombinasi').value);
    
    if (isNaN(n) || isNaN(r) || r > n) {
        document.getElementById('result-kombinasi').textContent = 'Input tidak valid';
        return;
    }
    
    const result = math.combinations(n, r);
    document.getElementById('result-kombinasi').textContent = `C(${n},${r}) = ${result}`;
}

function calculatePermutasi() {
    const n = parseInt(document.getElementById('n-permutasi').value);
    const r = parseInt(document.getElementById('r-permutasi').value);
    
    if (isNaN(n) || isNaN(r) || r > n) {
        document.getElementById('result-permutasi').textContent = 'Input tidak valid';
        return;
    }
    
    const result = math.permutations(n, r);
    document.getElementById('result-permutasi').textContent = `P(${n},${r}) = ${result}`;
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AudioController();
    createTeamGrid();
});
