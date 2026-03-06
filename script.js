// ===============================
// 🎂 PRINCESS SANJOLI AGE TIMER
// DOB: 07 March 2007
// ===============================

const birthDate = new Date(2007, 2, 7, 0, 0, 0); 
// Month is 0-indexed → March = 2

function updateAge() {

    const now = new Date();

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    document.getElementById("ageTimer").innerHTML =
        `${years} Years ${months} Months ${days} Days 
        ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

setInterval(updateAge, 1000);
updateAge();


// ===============================
// 👑 ENTER ROYAL PALACE
// ===============================

function enterPalace() {

    document.querySelector(".landing").style.display = "none";
    const palace = document.getElementById("palace");
    palace.style.display = "block";

    window.scrollTo({
        top: palace.offsetTop,
        behavior: "smooth"
    });

}


// ===============================
// 📸 IMAGE SLIDER
// ===============================

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto Slide every 4 seconds
/*setInterval(() => {
    if (document.getElementById("palace").style.display === "block") {
        nextSlide();
    }
}, 4000);*/


// ===============================
// ✨ GLITTER CURSOR EFFECT
// ===============================

document.addEventListener("mousemove", function(e) {

    const sparkle = document.createElement("div");
    sparkle.className = "glitter";

    sparkle.style.left = e.clientX + "px";
    sparkle.style.top = e.clientY + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 800);

});


// ===============================
// 💖 OPTIONAL MIDNIGHT SURPRISE
// (Auto Birthday Message Trigger)
// ===============================

function checkBirthdayMoment() {

    const now = new Date();

    if (
        now.getDate() === 7 &&
        now.getMonth() === 2 &&
        now.getHours() === 0 &&
        now.getMinutes() === 0
    ) {
        alert("👑 Happy 19th Birthday Princess Sanjoli 🎉💖");
    }

}

setInterval(checkBirthdayMoment, 60000);
// ======================
// ======================
// CANDLE BLOW SYSTEM FINAL
// ======================

let blownCount = 0;
const totalCandles = 5;

function blowCandle(candle){

const flame = candle.querySelector(".flame");

const smoke = candle.querySelector(".smoke");


if(flame.style.display !== "none"){

flame.style.display = "none";

smoke.classList.add("active");

blownCount++;

}


// WHEN ALL CANDLES BLOWN
if(blownCount === totalCandles){

setTimeout(()=>{

document.getElementById("foodPopup").style.display = "flex";

},800);

}

}


// CLOSE POPUP
function closePopup(){

document.getElementById("foodPopup").style.display = "none";

}


document.addEventListener("click", function () {
    const music = document.getElementById("bgm");
    music.play();
});

function openGift(){

const gift=document.querySelector(".gift");

gift.style.transform="scale(1.6)";

setTimeout(function(){

document.getElementById("startScreen").style.display="none";
document.getElementById("mainContent").style.display="block";
document.getElementById("bgm").play();

},600);

}