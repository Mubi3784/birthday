document.addEventListener("DOMContentLoaded", function () {
  // Countdown overlay
  const overlay = document.getElementById("countdownOverlay");
  const number = document.getElementById("countdownNumber");
  let count = 5;

  const interval = setInterval(() => {
    count--;
    number.textContent = count;
    if (count === 0) {
      clearInterval(interval);
      overlay.classList.add("hidden"); // hide overlay
      music.play(); // 🎵 start song after countdown
      musicPlaying = true;
      musicControl.innerHTML = '<i class="fas fa-pause"></i>';
    }
  }, 1000);

  // Music control
  const music = document.getElementById("birthdayMusic");
  const musicControl = document.querySelector(".music-control");
  let musicPlaying = false;

  // Try to play music on user interaction
  function enableMusic() {
    if (!musicPlaying) {
      music
        .play()
        .then(() => {
          musicPlaying = true;
          musicControl.innerHTML = '<i class="fas fa-pause"></i>';
        })
        .catch((error) => {
          console.log("Auto-play prevented:", error);
        });
    }
  }

  // Click to play/pause
  musicControl.addEventListener("click", function () {
    if (musicPlaying) {
      music.pause();
      musicPlaying = false;
      musicControl.innerHTML = '<i class="fas fa-music"></i>';
    } else {
      music.play();
      musicPlaying = true;
      musicControl.innerHTML = '<i class="fas fa-pause"></i>';
    }
  });

  // Initial animations
  gsap.to("h1", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "back.out(1.7)",
    delay: 0.5,
  });

  gsap.to(".subtitle", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "back.out(1.7)",
    delay: 1,
  });

  gsap.to(".wish", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "back.out(1.7)",
    delay: 1.5,
  });

  gsap.to(".gift-box", {
    opacity: 1,
    duration: 1,
    delay: 2,
  });

  gsap.to(".photo-item", {
    opacity: 1,
    scale: 1,
    duration: 0.8,
    stagger: 0.2,
    delay: 2.5,
    ease: "back.out(1.7)",
  });

  // special page 
  gsap.from(".next-page-btn", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "back.out(1.7)",
  delay: 2
});


  // Candle animation
  setTimeout(() => {
    document.querySelector(".candle").style.opacity = "1";
    document.querySelector(".flame").style.opacity = "1";

    // Flame flicker
    setInterval(() => {
      const flame = document.querySelector(".flame");
      gsap.to(flame, {
        scale: 0.9 + Math.random() * 0.2,
        duration: 0.2 + Math.random() * 0.3,
      });
    }, 300);
  }, 2500);

  // Create balloons
  function createBalloons() {
    const colors = [
      "#ff6b8b",
      "#ff8e9e",
      "#ffb6c1",
      "#ffcce6",
      "#d1a3ff",
      "#b388ff",
    ];
    const container = document.querySelector("body");

    for (let i = 0; i < 4; i++) {
      const balloon = document.createElement("div");
      balloon.className = "balloon";
      balloon.style.left = Math.random() * 100 + "vw";
      balloon.style.bottom = "-100px";
      balloon.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      balloon.style.transform = "scale(" + (0.5 + Math.random() * 0.7) + ")";
      container.appendChild(balloon);

      // Animate balloon
      gsap.to(balloon, {
        y: -window.innerHeight - 100,
        x: "+= " + (Math.random() * 100 - 50),
        duration: 15 + Math.random() * 20,
        delay: Math.random() * 5,
        ease: "none",
        onComplete: function () {
          balloon.remove();
          createBalloons();
        },
      });
    }
  }

  // Create hearts
  function createHearts() {
    const container = document.querySelector("body");
    const heart = document.createElement("div");
    heart.className = "hearts";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    heart.style.opacity = "0";
    heart.style.transform = "scale(" + (0.2 + Math.random()) + ")";
    container.appendChild(heart);

    // Animate heart
    gsap.to(heart, {
      y: "-=100",
      opacity: 0.6,
      duration: 3 + Math.random() * 5,
      ease: "power1.out",
      onComplete: function () {
        heart.remove();
      },
    });

    setTimeout(createHearts, 300);
  }

  // Create sparkles
  function createSparkles() {
    const container = document.querySelector("body");
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    container.appendChild(sparkle);

    // Animate sparkle
    gsap.to(sparkle, {
      opacity: 0.8,
      scale: 2,
      duration: 0.5,
      ease: "power1.out",
      onComplete: function () {
        gsap.to(sparkle, {
          opacity: 0,
          scale: 0.5,
          duration: 0.5,
          onComplete: function () {
            sparkle.remove();
          },
        });
      },
    });

    setTimeout(createSparkles, 100);
  }

  // Create butterflies
  function createButterflies() {
    const container = document.querySelector("body");
    const butterfly = document.createElement("div");
    butterfly.className = "butterfly";
    butterfly.style.left = "-50px";
    butterfly.style.top = Math.random() * 100 + "vh";
    butterfly.style.opacity = "0";
    container.appendChild(butterfly);

    // Animate butterfly
    gsap.to(butterfly, {
      x: window.innerWidth + 50,
      y: "+= " + (Math.random() * 200 - 100),
      opacity: 0.7,
      rotation: Math.random() * 360,
      duration: 15 + Math.random() * 20,
      ease: "none",
      onComplete: function () {
        butterfly.remove();
      },
    });

    setTimeout(createButterflies, 3000);
  }

  // Gift box interaction
  document.querySelector(".gift-box").addEventListener("click", function () {
    // Bounce animation
    this.classList.add("bounce");
    setTimeout(() => {
      this.classList.remove("bounce");
    }, 500);

    // Confetti explosion
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff0000", "#ff1493", "#9400d3", "#ff69b4", "#ff8e9e"],
    });
  });

  // Photo gallery interaction
  document.querySelectorAll(".photo-item").forEach((item) => {
    item.addEventListener("click", function () {
      this.classList.add("bounce");
      setTimeout(() => {
        this.classList.remove("bounce");
      }, 500);

      // Small confetti
      confetti({
        particleCount: 30,
        spread: 50,
        origin: {
          x: this.getBoundingClientRect().left / window.innerWidth,
          y: this.getBoundingClientRect().top / window.innerHeight,
        },
        colors: ["#ff1493", "#9400d3", "#ff69b4"],
      });
    });
  });

  // Start animations
  createBalloons();
  createHearts();
  createSparkles();
  createButterflies();

  // Initial confetti
  setTimeout(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, 3000);

  // Try to play music after animations start
  setTimeout(enableMusic, 1000);
});
// music alert
// Show "Click this" hint for 5 seconds
const musicHint = document.querySelector(".music-hint");
setTimeout(() => {
  musicHint.classList.add("hidden");
}, 5000);

// When user clicks the music button, hide the hint immediately
musicControl.addEventListener("click", () => {
  musicHint.classList.add("hidden");
});
