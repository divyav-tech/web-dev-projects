const grid = document.querySelector(".grid");
const messageTitle = document.querySelector(".title");
const emogi = document.querySelector(".emogi");
const message  = document.querySelector(".message");
const messageOverlay = document.querySelector(".message-overlay");
const closeBtn = document.querySelector("#closeMessage");

const challenges = [
    { day: 1,  emoji: "🌻", title: "Something Beautiful", message: "Take a picture of something you love today." },
    { day: 2,  emoji: "🎧", title: "Music Break", message: "Listen to your favourite song." },
    { day: 3,  emoji: "☕", title: "Slow Morning", message: "Have a slow morning, no rushing." },
    { day: 4,  emoji: "✉️", title: "Handwritten Note", message: "Write a little note to someone, just because." },
    { day: 5,  emoji: "🪟", title: "Window Watching", message: "Sit by a window and watch the world for five minutes." },
    { day: 6,  emoji: "🍪", title: "Favourite Snack", message: "Treat yourself to something you love eating." },
    { day: 7,  emoji: "📵", title: "No-Scroll Hour", message: "Keep your phone away for one whole hour." },
    { day: 8,  emoji: "📼", title: "Old Song", message: "Play a song from your childhood." },
    { day: 9,  emoji: "🧹", title: "Tiny Tidy", message: "Clean one small corner of your space." },
    { day: 10, emoji: "💌", title: "Say It Out Loud", message: "Tell someone something you admire about them." },
    { day: 11, emoji: "🌿", title: "Fresh Air", message: "Step outside, even for just two minutes." },
    { day: 12, emoji: "✏️", title: "Doodle", message: "Draw something — badly is more than fine." },
    { day: 13, emoji: "📷", title: "Photo Dump", message: "Look through old photos and smile at one." },
    { day: 14, emoji: "🧘", title: "Stretch It Out", message: "Move your body gently for five minutes." },
    { day: 15, emoji: "🙏", title: "Thank You", message: "Thank someone who helped you recently." },
    { day: 16, emoji: "🍳", title: "Cook Something Small", message: "Make a simple thing you actually enjoy eating." },
    { day: 17, emoji: "📺", title: "Comfort Rewatch", message: "Watch an episode of a show that feels like home." },
    { day: 18, emoji: "📔", title: "One Line", message: "Write just one sentence about today." },
    { day: 19, emoji: "🕯️", title: "Light Something", message: "Light a candle or spray your favourite scent." },
    { day: 20, emoji: "☎️", title: "Reach Out", message: "Call someone you've missed talking to." },
    { day: 21, emoji: "🪴", title: "Rearrange", message: "Move one small thing in your room." },
    { day: 22, emoji: "📖", title: "One Page", message: "Read even just one page of a book." },
    { day: 23, emoji: "🌙", title: "Stargaze", message: "Look up at the sky tonight." },
    { day: 24, emoji: "👗", title: "Feel-Good Fit", message: "Wear something that makes you feel like you." },
    { day: 25, emoji: "😴", title: "Nap Time", message: "Take a short nap if you can steal one." },
    { day: 26, emoji: "🎶", title: "Tiny Playlist", message: "Make a mini playlist of just three songs." },
    { day: 27, emoji: "📩", title: "Letter To Future You", message: "Write a note to read again next year." },
    { day: 28, emoji: "🍁", title: "Small Gratitudes", message: "Write down three small things you're grateful for." },
    { day: 29, emoji: "🍵", title: "Sip Slowly", message: "Have something warm and drink it without rushing." },
    { day: 30, emoji: "🎉", title: "Celebrate", message: "Do something small to celebrate finishing this." }
];


for(let i = 1 ; i <31 ; i ++){
    const envelope = document.createElement("div");
    envelope.classList.add("envelope");
    const envBody = document.createElement("div");
    envBody.classList.add("env-body");
    envelope.appendChild(envBody);
    const envFlap = document.createElement("div");
    envFlap.classList.add("env-flap");
    envelope.appendChild(envFlap);
    const seal = document.createElement("div");
    seal.classList.add("seal");
    envelope.appendChild(seal);
    grid.appendChild(envelope);

    seal.innerHTML = `Day${i}`

    envelope.addEventListener("click" , () =>{
        messageOverlay.classList.add("show");
        console.log(i);
        emogi.textContent = challenges[i-1].emoji;
        messageTitle.textContent = `Day ${i} - ${challenges[i-1].title}`;
        message.textContent = challenges[i-1].message;
    })
};

closeBtn.addEventListener("click" , () => {
    messageOverlay.classList.remove("show");
});