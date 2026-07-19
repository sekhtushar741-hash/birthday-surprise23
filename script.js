/**
 * ULTRA-PREMIUM CINEMATIC CELEBRATION RUNTIME ENVIRONMENT
 * Architecture Framework: High-performance Procedural Particle Mechanics Engine
 * Dedicated Client: Princess Suhana
 */

// -------------------------------------------------------------
// 1. COMPLEX PROCEDURAL GRAPHICS MACHINE (HTML5 CANVAS LIFE-SIM)
// -------------------------------------------------------------
const canvas = document.getElementById('magicCanvas');
const ctx = canvas.getContext('2d');

let particles = [];
let butterflies = [];
let lilies = [];
let hearts = [];
let globalBloomProgress = 0.0;

// Setup Adaptive Retinal Display Sizing
function structuralResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', structuralResize);
structuralResize();

// Core High Performance Particle Constructors
class Particle {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.radius = Math.random() * 3 + 1;
        this.speedY = Math.random() * 0.8 + 0.3;
        this.speedX = Math.sin(Math.random() * 5) * 0.3;
        this.alpha = Math.random() * 0.5 + 0.2;
        this.color = Math.random() > 0.5 ? '255, 192, 203' : '230, 230, 250'; // Pink & Lavender
    }
    update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        if (this.y < -10) this.reset();
    }
    draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${this.color}, 0.5)`;
        ctx.fill();
        ctx.restore();
    }
}

class FloatingHeart {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 50;
        this.scale = Math.random() * 8 + 6;
        this.speedY = Math.random() * 0.6 + 0.4;
        this.angle = Math.random() * 10;
        this.alpha = Math.random() * 0.4 + 0.3;
    }
    update() {
        this.y -= this.speedY;
        this.angle += 0.01;
        this.x += Math.sin(this.angle) * 0.2;
        if (this.y < -20) this.reset();
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(this.scale / 10, this.scale / 10);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-5, -5, -10, 0, 0, 10);
        ctx.bezierCurveTo(10, 0, 5, -5, 0, 0);
        ctx.fillStyle = `rgba(183, 110, 121, ${this.alpha})`;
        ctx.shadowBlur = 4;
        ctx.shadowColor = 'rgba(183, 110, 121, 0.3)';
        ctx.fill();
        ctx.restore();
    }
}

class Butterfly {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 6 + 4;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 1 + 0.5;
        this.wingFlap = 0;
    }
    update() {
        this.angle += (Math.random() - 0.5) * 0.1;
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.wingFlap += 0.2;

        if (this.x < -20) this.x = canvas.width + 20;
        if (this.x > canvas.width + 20) this.x = -20;
        if (this.y < -20) this.y = canvas.height + 20;
        if (this.y > canvas.height + 20) this.y = -20;
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = 'rgba(220, 208, 255, 0.8)'; // Soft purple wings
        let flapWidth = Math.abs(Math.sin(this.wingFlap)) * this.size;
        
        ctx.beginPath();
        ctx.ellipse(-flapWidth/2, -this.size/2, flapWidth/2, this.size/2, Math.PI/4, 0, Math.PI*2);
        ctx.ellipse(flapWidth/2, -this.size/2, flapWidth/2, this.size/2, -Math.PI/4, 0, Math.PI*2);
        ctx.fill();
        ctx.restore();
    }
}

class LivingLily {
    constructor(x) {
        this.x = x;
        this.targetHeight = Math.random() * 80 + 60;
        this.currentHeight = 0;
        this.bloomScale = 0;
        this.petals = [];
    }
    update() {
        // Growth control integrated dynamically with global layout pipeline
        if (this.currentHeight < this.targetHeight) {
            this.currentHeight += 0.4;
        } else if (this.bloomScale < 1) {
            this.bloomScale += 0.005;
        }

        // Intermittent petal dropping calculation logic
        if (this.bloomScale >= 0.9 && Math.random() < 0.002) {
            this.petals.push({
                x: this.x + (Math.random() - 0.5) * 20,
                y: canvas.height - this.currentHeight,
                fallY: 0,
                rot: Math.random() * Math.PI,
                rotSpeed: (Math.random() - 0.5) * 0.02
            });
        }

        for (let i = this.petals.length - 1; i >= 0; i--) {
            let p = this.petals[i];
            p.fallY += 0.5;
            p.x += Math.sin(p.fallY * 0.05) * 0.3;
            p.rot += p.rotSpeed;
            if (p.y + p.fallY > canvas.height + 20) {
                this.petals.splice(i, 1);
            }
        }
    }
    draw() {
        let topY = canvas.height - this.currentHeight;
        
        // Draw elegant stem
        ctx.beginPath();
        ctx.moveTo(this.x, canvas.height);
        ctx.quadraticCurveTo(this.x - 10, canvas.height - this.currentHeight/2, this.x, topY);
        ctx.strokeStyle = 'rgba(183, 110, 121, 0.4)';
        ctx.lineWidth = 3;
        ctx.stroke();

        // Draw elegant blooming Lily petals using complex programmatic vectors
        if (this.bloomScale > 0) {
            ctx.save();
            ctx.translate(this.x, topY);
            ctx.scale(this.bloomScale, this.bloomScale);
            ctx.fillStyle = 'rgba(255, 240, 245, 0.9)'; // Soft white/pink flesh
            ctx.strokeStyle = 'rgba(220, 208, 255, 0.6)';

            for (let i = 0; i < 6; i++) {
                ctx.rotate(Math.PI / 3);
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.quadraticCurveTo(-12, -25, 0, -40);
                ctx.quadraticCurveTo(12, -25, 0, 0);
                ctx.fill();
                ctx.stroke();
            }
            // Golden Pistils center core
            ctx.fillStyle = '#E6C280';
            ctx.beginPath();
            ctx.arc(0, 0, 4, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }

        // Draw dropped petal tracking arrays
        this.petals.forEach(p => {
            ctx.save();
            ctx.translate(p.x, p.y + p.fallY);
            ctx.rotate(p.rot);
            ctx.fillStyle = 'rgba(255, 240, 245, 0.7)';
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.quadraticCurveTo(-6, -12, 0, -18);
            ctx.quadraticCurveTo(6, -12, 0, 0);
            ctx.fill();
            ctx.restore();
        });
    }
}

// Master Engine Spawning Loops
function initializeBackgroundEcosystem() {
    for (let i = 0; i < 45; i++) particles.push(new Particle());
    for (let i = 0; i < 15; i++) hearts.push(new FloatingHeart());
    for (let i = 0; i < 8; i++) butterflies.push(new Butterfly());
    
    // Position Lilies across boundary baselines
    let step = canvas.width / 5;
    for (let i = 0; i < 6; i++) {
        lilies.push(new LivingLily(step * i + (Math.random() - 0.5) * 30));
    }
}

function processFrameAnimationLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(p => { p.update(); p.draw(); });
    hearts.forEach(h => { h.update(); h.draw(); });
    butterflies.forEach(b => { b.update(); b.draw(); });
    lilies.forEach(l => { l.update(); l.draw(); });
    
    requestAnimationFrame(processFrameAnimationLoop);
}

initializeBackgroundEcosystem();
processFrameAnimationLoop();


// -------------------------------------------------------------
// 2. LUXURY AUDIO LOGIC CONTROLLER SYSTEM
// -------------------------------------------------------------
const bgMusic = document.getElementById('bgMusic');
const audioWidget = document.getElementById('audioWidget');
const discBtn = document.getElementById('discBtn');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumeSlider = document.getElementById('volumeSlider');
const muteBtn = document.getElementById('muteBtn');

function establishAudioCore() {
    discBtn.addEventListener('click', () => {
        audioWidget.classList.toggle('expanded-drawer');
    });

    playPauseBtn.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play().catch(e => console.log("System Alert: Interactions required first."));
            audioWidget.classList.add('playing');
            playPauseBtn.innerText = '⏸';
        } else {
            bgMusic.pause();
            audioWidget.classList.remove('playing');
            playPauseBtn.innerText = '▶';
        }
    });

    volumeSlider.addEventListener('input', (e) => {
        bgMusic.volume = e.target.value;
        if(bgMusic.volume === 0) {
            muteBtn.innerText = '🔇';
        } else {
            muteBtn.innerText = '🔊';
        }
    });

    muteBtn.addEventListener('click', () => {
        if (bgMusic.muted) {
            bgMusic.muted = false;
            muteBtn.innerText = '🔊';
            volumeSlider.value = bgMusic.volume;
        } else {
            bgMusic.muted = true;
            muteBtn.innerText = '🔇';
            volumeSlider.value = 0;
        }
    });
}
establishAudioCore();


// -------------------------------------------------------------
// 3. STORY ENTRY & NARRATIVE SCROLL MONITORING
// -------------------------------------------------------------
const enterExperienceBtn = document.getElementById('enterExperienceBtn');
const introLoader = document.getElementById('introLoader');
const mainExperience = document.getElementById('mainExperience');

enterExperienceBtn.addEventListener('click', () => {
    introLoader.classList.remove('active');
    mainExperience.classList.add('activated-flow');
    
    // Safely attempt background audio initiation
    bgMusic.play().then(() => {
        audioWidget.classList.add('playing');
    }).catch(err => console.log("Context initialized safely. Media tracking operational."));

    setTimeout(() => {
        triggerLoveLetterTypewriter();
    }, 1000);
});

// Structural Scannable Animations using Apple Viewport Triggers
const standardBlocks = document.querySelectorAll('.story-block');
const layoutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible-in-viewport');
        }
    });
}, { threshold: 0.15 });

standardBlocks.forEach(b => layoutObserver.observe(b));


// -------------------------------------------------------------
// 4. REALISTIC TEXT DISPATCH SYSTEM (TYPEWRITER COMPONENT)
// -------------------------------------------------------------
const letterDataString = `Dear Princess Suhana ❤️,

You entered my life quietly...
but became the loudest happiness in my heart.

You are my favourite notification,
my safest place,
my biggest smile,
and the most beautiful chapter of my life.

If I had one wish,
I'd choose you again...
every single lifetime.

Happy Birthday, my pretty girl.

I hope today brings you all the happiness you've brought into my life.

Forever yours,

Tushar ❤️`;

function triggerLoveLetterTypewriter() {
    const container = document.getElementById('typewriterTarget');
    let index = 0;
    container.innerText = "";
    
    function appendChar() {
        if (index < letterDataString.length) {
            container.innerText += letterDataString.charAt(index);
            index++;
            setTimeout(appendChar, 35 + (Math.random() * 20)); // Dynamic variance for human realism
        }
    }
    appendChar();
}


// -------------------------------------------------------------
// 5. GIFT HUB STATE MANAGEMENT WITH DEEP DIALOG MESSAGE PROPS
// -------------------------------------------------------------
const giftModal = document.getElementById('giftModal');
const closePopupBtn = document.getElementById('closePopupBtn');
const popupIcon = document.getElementById('popupIcon');
const popupTitle = document.getElementById('popupTitle');
const popupMessage = document.getElementById('popupMessage');

const giftVaultRegistry = {
    ring: {
        icon: '💍',
        title: 'The Promise Ring',
        msg: 'A symbol of my complete commitment to you. Boundless, timeless, and shining brightly just like your incredible presence in my world. This is a promise for all lifetimes.'
    },
    bracelet: {
        icon: '📿',
        title: 'The Infinity Bracelet',
        msg: 'Interlocked nodes that mirror our journey together. It links elegance with protection, hugging your wrist softly to remind you that my love stands guard forever.'
    },
    perfume: {
        icon: '🌸',
        title: 'Enchanted Oud Perfume',
        msg: 'A complex, aromatic elixir chosen to match your majestic charm. Let its exquisite notes trail behind you, capturing hearts exactly the way you captured mine.'
    },
    diary: {
        icon: '📖',
        title: 'Our Written Diary',
        msg: 'Every page holds a shared laugh, a sweet dynamic memory, and a secret dream. This is our continuous masterpiece. Let us author endless chapters together.'
    },
    teddy: {
        icon: '🎀',
        title: 'The Royal Teddy',
        msg: 'Your dedicated night guardian when I am afar. Formed out of absolute plush luxury, it is ready to absorb all your warm embraces whenever you miss me.'
    },
    chocolate: {
        icon: '🍫',
        title: 'Luxury Truffles',
        msg: 'A velvet burst of rich sweetness designed for your royal palate. Not quite as sweet as your smile, but chosen carefully to bring a joyful spark to your birthday!'
    }
};

document.querySelectorAll('.gift-glass-card').forEach(card => {
    card.addEventListener('click', () => {
        const itemKey = card.getAttribute('data-gift');
        const data = giftVaultRegistry[itemKey];
        if (data) {
            popupIcon.innerText = data.icon;
            popupTitle.innerText = data.title;
            popupMessage.innerText = data.msg;
            giftModal.classList.add('active-popup');
        }
    });
});

closePopupBtn.addEventListener('click', () => {
    giftModal.classList.remove('active-popup');
});

giftModal.addEventListener('click', (e) => {
    if(e.target === giftModal) giftModal.classList.remove('active-popup');
});


// -------------------------------------------------------------
// 6. ADORABLE DEFENSIVE MEME CAT SYSTEM LOGIC
// -------------------------------------------------------------
const angryCatEntity = document.getElementById('angryCatEntity');
const catSpeechBubble = document.getElementById('catSpeechBubble');
const catActionRow = document.getElementById('catActionRow');
const catApologyBtn = document.getElementById('catApologyBtn');

// Trigger Cat Entrance state machine once section becomes visible
const catSection = document.querySelector('.cat-defense-arena');
const catObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            executeCatThreatSequence();
            catObserver.unobserve(catSection);
        }
    });
}, { threshold: 0.4 });
catObserver.observe(catSection);

function executeCatThreatSequence() {
    angryCatEntity.classList.remove('hidden-actor');
    angryCatEntity.classList.add('staged-actor');
    
    setTimeout(() => {
        catSpeechBubble.querySelector('p').innerHTML = `😾 <strong>HEY!! DON'T TOUCH PRINCESS SUHANA'S CAKE!!</strong><br><br>I spent all night protecting it. Mr. Tushar made this cake for the cutest girl in the entire universe. No touching!!`;
        catSpeechBubble.classList.add('active-speech');
        
        setTimeout(() => {
            catActionRow.classList.add('active-row');
        }, 1200);
    }, 1500);
}

catApologyBtn.addEventListener('click', () => {
    catActionRow.classList.remove('active-row');
    catSpeechBubble.classList.remove('active-speech');
    
    // Switch vector states instantly to hilarious laughing cat mode
    setTimeout(() => {
        // Switch cat state to cute laughing imagery asset
        angryCatEntity.querySelector('img').src = "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=400";
        angryCatEntity.querySelector('.cat-weapon').innerHTML = "🎉";
        
        catSpeechBubble.querySelector('p').innerHTML = `😂😂😂<br><br>Okay okay... I was just joking. You're allowed. Take this knife 🔪. Now cut the cake for Princess Suhana ❤️`;
        catSpeechBubble.classList.add('active-speech');
    }, 600);
});


// -------------------------------------------------------------
// 7. CINEMATIC MASTER COUNTDOWN RUNTIME ROUTINE
// -------------------------------------------------------------
const startGrandCountdownBtn = document.getElementById('startGrandCountdownBtn');
const countdownOverlay = document.getElementById('countdownOverlay');
const countdownCounter = document.getElementById('countdownCounter');
const heartbeatMsg = document.getElementById('heartbeatMsg');

startGrandCountdownBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
        countdownOverlay.classList.add('active');
        executeCountdownDecrements(10);
    }, 300);
});

function executeCountdownDecrements(count) {
    if(count > 0) {
        countdownCounter.innerText = count;
        countdownCounter.style.transform = 'scale(1.3)';
        setTimeout(() => {
            countdownCounter.style.transform = 'scale(1)';
        }, 200);
        
        setTimeout(() => {
            executeCountdownDecrements(count - 1);
        }, 1000);
    } else if (count === 0) {
        countdownCounter.innerText = "Hold on...";
        countdownCounter.style.fontSize = "5rem";
        setTimeout(() => {
            countdownCounter.classList.add('hidden');
            heartbeatMsg.classList.remove('hidden');
            
            // Allow declarations to sink deep before shifting to the bakery studio room
            setTimeout(() => {
                countdownOverlay.classList.remove('active');
                openCakeBakingStudio();
            }, 4000);
        }, 2000);
    }
}


// -------------------------------------------------------------
// 8. CELEBRATION STUDIO ENGINE (CAKE INTERFACE LABS)
// -------------------------------------------------------------
const cakeBakingRoom = document.getElementById('cakeBakingRoom');
const blowCandleBtn = document.getElementById('blowCandleBtn');
const mainFlame = document.getElementById('mainFlame');

function openCakeBakingStudio() {
    cakeBakingRoom.classList.add('active');
}

blowCandleBtn.addEventListener('click', () => {
    mainFlame.classList.add('extinguished');
    blowCandleBtn.style.opacity = '0';
    
    // Launch high graphics particle explosions
    triggerExplosiveConfettiCelebration();
    
    setTimeout(() => {
        cakeBakingRoom.classList.remove('active');
        launchFinaleSplatSurprise();
    }, 3000);
});

function triggerExplosiveConfettiCelebration() {
    // Inject massive amounts of celebratory physics particles directly into our canvas matrix
    for (let i = 0; i < 150; i++) {
        setTimeout(() => {
            particles.push({
                x: canvas.width / 2,
                y: canvas.height / 2,
                radius: Math.random() * 6 + 2,
                speedY: (Math.random() - 0.5) * 15,
                speedX: (Math.random() - 0.5) * 15,
                alpha: 1.0,
                color: `${Math.floor(Math.random()*55+200)}, ${Math.floor(Math.random()*100+100)}, ${Math.floor(Math.random()*100+150)}`,
                update: function() {
                    this.x += this.speedX;
                    this.y += this.speedY;
                    this.speedY += 0.1; // Add gravity effects to falling debris
                    this.alpha -= 0.008;
                },
                draw: function() {
                    if (this.alpha <= 0) return;
                    ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                    ctx.fill();
                }
            });
        }, Math.random() * 200);
    }
}


// -------------------------------------------------------------
// 9. GRAND FINALE STATE CONTROLLERS (SPLAT & ETERNAL LOVE LETTERS)
// -------------------------------------------------------------
const finaleSplatRoom = document.getElementById('finaleSplatRoom');
const prideCatActor = document.getElementById('prideCatActor');
const splatImpactScreen = document.getElementById('splatImpactScreen');
const eternalScrollRoom = document.getElementById('eternalScrollRoom');

function launchFinaleSplatSurprise() {
    finaleSplatRoom.classList.add('active');
    
    // Animate Proud Cat dashing forward aggressively across viewports
    setTimeout(() => {
        prideCatActor.style.transform = `translateX(${window.innerWidth + 400}px) scale(1.8)`;
        
        // Midpoint collision calculations
        setTimeout(() => {
            splatImpactScreen.classList.add('visible-in-viewport');
            splatImpactScreen.classList.add('splatted');
            
            setTimeout(() => {
                finaleSplatRoom.classList.remove('active');
                revealEternalParadiseScroll();
            }, 3500);
        }, 750);
    }, 500);
}

function revealEternalParadiseScroll() {
    eternalScrollRoom.classList.add('active');
    
    // Amplify background magical density for the rest of eternity
    setInterval(() => {
        particles.push(new Particle());
        if(Math.random() > 0.7) hearts.push(new FloatingHeart());
    }, 150);
}