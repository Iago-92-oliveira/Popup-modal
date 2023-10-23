let currentSlide = 0;

function openPopup(title, description, imagePaths) {
    document.getElementById("popupTitle").textContent = title;
    document.getElementById("popupDescription").textContent = description;

    for (let i = 0; i < imagePaths.length; i++) {
        document.getElementById(`popupImage${i+1}`).src = imagePaths[i];
    }

    currentSlide = 0; // Reinicia a contagem do slide
    showSlide(currentSlide);

    document.getElementById("popupContainer").style.display = "flex";
}

function showSlide(slideIndex) {
    const slides = document.getElementsByClassName("carousel-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
}

function nextSlide() {
    const totalSlides = document.getElementsByClassName("carousel-slide").length;
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
}

// Função para fechar o pop-up
function closePopup() {
    document.getElementById("popupContainer").style.display = "none";
}