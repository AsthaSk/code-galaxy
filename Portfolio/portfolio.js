function showMessage() {
    let msg = document.getElementById("message");
    msg.style.display = "block";

    // Add animation effect
    msg.style.opacity = "0";
    msg.style.transform = "translateY(-10px)";
    
    setTimeout(() => {
        msg.style.opacity = "1";
        msg.style.transform = "translateY(0)";
    }, 100);
}

// Dynamic greeting based on time
window.onload = function () {
    let introText = document.getElementById("intro-text");
    let currentHour = new Date().getHours();
    if (currentHour < 12) {
        introText.innerText = "Good morning! I'm a passionate developer. Welcome to my portfolio.";
    } else if (currentHour < 18) {
        introText.innerText = "Good afternoon! I'm a passionate developer. Welcome to my portfolio.";
    } else {
        introText.innerText = "Good evening! I'm a passionate developer. Welcome to my portfolio.";
    }
};

// Toggle skill descriptions
function toggleDescription(skillId) {
    let description = document.getElementById(skillId);
    description.style.display = description.style.display === "block" ? "none" : "block";
}
