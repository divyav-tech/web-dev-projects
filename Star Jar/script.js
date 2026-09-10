
const addStarBtn = document.getElementById('addStarBtn');
const starContainer = document.getElementById('starContainer');
const jar = document.querySelector(".jar");
const number = document.querySelector("#number");
const closeBtn = document.querySelector("#closeMessage");
const message = document.querySelector("#message");
const overlay = document.querySelector("#messageOverlay");

let count = 0;

const updateJarGlow = () => {
    const jarBody = document.querySelector("#jarBody");
    if (count >= 20) {
        jarBody.classList.remove("glow");
        jarBody.classList.add("super-glow");
    }
    else if (count >= 10) {
        jarBody.classList.remove("super-glow");
        jarBody.classList.add("glow");
    }
    else {
        jarBody.classList.remove("glow");
        jarBody.classList.remove("super-glow");
    }
};

addStarBtn.addEventListener("click", () => {
    const newStar = document.createElement('span');
    newStar.textContent = "⭐";
    newStar.classList.add("jar-star");
    newStar.style.left = Math.random() * 80 + 10 + "%";
    newStar.style.top = Math.random() * 80 + 10 + "%";
    const rotation = Math.random() * 40 - 20;
    newStar.style.setProperty("--rotation", `${rotation}deg`);
    starContainer.appendChild(newStar);

    requestAnimationFrame(() => {
        newStar.classList.add("show");
    });
    count++;
    number.textContent = count;
    updateJarGlow();
});

const messages = [
    "You are doing better than you think. ✨",
    "Something good is coming your way. 🌙",
    "Take a little break. You deserve it. 💗",
    "Keep going, one little step at a time. ⭐",
    "You made it through today. That's enough. 🌷",
    "You are someone's reason to smile today.🌻",
    "Your smile is contagious.⭐",
    "You are like sunshine on a rainy day.✨",
    "Babies and small animals probably love you.🌹",
    "Thank you for just being you.💕",
    "You light up the room.🌻",
];

jar.addEventListener("click", () => {
    if (count > 0) {
        const stars = starContainer.querySelectorAll(".jar-star");
        const randomIndex = Math.floor(Math.random() * messages.length);
        message.textContent = messages[randomIndex];
        const randomStar = stars[Math.floor(Math.random() * stars.length)];
        randomStar.remove();
        count--;
        number.textContent = count;
        overlay.classList.add("show")
        updateJarGlow();
    }
});

closeBtn.addEventListener("click", () => {
    overlay.classList.remove("show");
});