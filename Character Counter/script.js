const typingArea = document.querySelector("#typingArea");
const count = document.querySelector("#count");

typingArea.addEventListener("input" , (e) => {
    const characters = e.target.value ;
    count.textContent = characters.length;
});

