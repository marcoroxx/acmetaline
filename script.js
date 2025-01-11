let slideIndex = 0;
let slideInterval; // Variabile per controllare l'intervallo
const slideDuration = 5000; // Durata in millisecondi (5 secondi)

function showSlides(n = null) {
  const slides = document.getElementsByClassName("slides");
  const dots = document.getElementsByClassName("dot");

  // Se `n` è passato, forza il valore di slideIndex
  if (n !== null) {
    slideIndex = n;
  } else {
    slideIndex++;
  }

  // Resetta il ciclo alla prima immagine se l'indice supera il numero delle immagini
  if (slideIndex >= slides.length) {
    slideIndex = 0; // Torna alla prima slide
  }

  // Nascondi tutte le slide
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Rimuovi la classe "active" da tutti i pallini
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Mostra la slide corrente e aggiungi la classe "active" al pallino corrispondente
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}

// Avvia il carosello automatico
function startCarousel() {
  slideInterval = setInterval(() => showSlides(), slideDuration);
}

// Interrompi il carosello automatico
function stopCarousel() {
  clearInterval(slideInterval);
}

// Funzione per passare manualmente alla slide selezionata tramite i pallini
function currentSlide(n) {
  stopCarousel(); // Ferma il carosello automatico
  showSlides(n); // Mostra la slide selezionata
  startCarousel(); // Riavvia il carosello
}

// Inizializza il carosello
document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex); // Mostra la prima slide
  startCarousel(); // Avvia il carosello automatico
});
// Variabile per il controllo della visibilità del menu
let dropdownVisible = false;

// Ottieni il pulsante e il contenuto del dropdown
const dropbtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

// Inizialmente nascondi il menu
dropdownContent.style.display = 'none'; // Assicurati che il menu sia nascosto all'apertura della pagina

// Funzione per mostrare il menu
function showDropdown() {
    dropdownContent.style.display = 'flex'; // Mostra il menu
    dropdownVisible = true;
}

// Funzione per nascondere il menu
function hideDropdown() {
    dropdownContent.style.display = 'none'; // Nascondi il menu
    dropdownVisible = false;
}

// Aggiungi eventi per mostrare il menu quando si passa sopra il pulsante
dropbtn.addEventListener('mouseenter', showDropdown);

// Aggiungi eventi per mantenere il menu aperto quando si passa sopra il menu stesso
dropdownContent.addEventListener('mouseenter', showDropdown);

// Aggiungi eventi per nascondere il menu quando il cursore lascia il pulsante o il menu
[dropbtn, dropdownContent].forEach((element) => {
    element.addEventListener('mouseleave', hideDropdown);
});

// Aggiungi un evento al clic del pulsante per alternare il menu
dropbtn.addEventListener('click', function () {
    if (dropdownVisible) {
        hideDropdown(); // Chiudi il menu se è aperto
    } else {
        showDropdown(); // Mostra il menu se è chiuso
    }
});
