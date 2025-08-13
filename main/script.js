// Data arrays
const vehicles = [
  { name: "BMW M5 F90", price: "20€", image: "public/bmw-m5-f90.png" },
  { name: "Brabus 6x6", price: "30€", image: "public/brabus-6x6.png" },
  { name: "Lamborghini Huracan", price: "25€", image: "public/lamborghini-huracan.png" },
  { name: "Tesla Model S", price: "15€", image: "public/tesla-model-s.png" },
  { name: "Ferrari F8", price: "35€", image: "public/ferrari-f8.png" },
]

const organizations = [
  { name: "Vagos", price: "50€", image: "public/vagos-logo.png" },
  { name: "Ballas", price: "50€", image: "public/ballas-logo.png" },
  { name: "Medelin Cartel", price: "60€", image: "public/medelin-cartel-logo.png" },
  { name: "Los Santos Police", price: "40€", image: "public/lspd-logo.png" },
  { name: "Grove Street", price: "45€", image: "public/grove-street-logo.png" },
  { name: "Owner", price: "1245€", image: "public/owner-logo.png" },
]

const gameImages = [
  "public/fivem-police-chase.png",
  "public/fivem-luxury-cars-street-racing.png",
  "public/fivem-gang-meeting.png",
  "public/fivem-city-nightlife-roleplay.png",
  "public/fivem-police-station.png",
  "public/fivem-custom-vehicles.png",
]

// Function to create donation cards
function createDonationCard(item, type) {
  return `
        <div class="donation-card">
            <img src="${item.image}" alt="${item.name}" class="donation-image" loading="lazy" onerror="this.src='public/placeholder-p0265.png'">
            <h4 class="donation-name">${item.name}</h4>
            <p class="donation-price">Cena: ${item.price}</p>
            <a href="https://discord.com/channels/1384976556748963901/1384976560083308573" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="donation-btn">
                Doniraj
            </a>
        </div>
    `
}

// Function to create gallery items
function createGalleryItem(image, index) {
  return `
        <div class="gallery-item">
            <img src="${image}" alt="Fury RolePlay V2 screenshot ${index + 1}" class="gallery-image" loading="lazy" onerror="this.src='public/placeholder-p0265.png'">
        </div>
    `
}

// Function to populate content
function populateContent() {
  // Populate vehicles
  const vehiclesGrid = document.getElementById("vehicles-grid")
  if (vehiclesGrid) {
    vehiclesGrid.innerHTML = vehicles.map((vehicle) => createDonationCard(vehicle, "vehicle")).join("")
  }

  // Populate organizations
  const organizationsGrid = document.getElementById("organizations-grid")
  if (organizationsGrid) {
    organizationsGrid.innerHTML = organizations.map((org) => createDonationCard(org, "organization")).join("")
  }

  // Populate gallery
  const galleryGrid = document.getElementById("gallery-grid")
  if (galleryGrid) {
    galleryGrid.innerHTML = gameImages.map((image, index) => createGalleryItem(image, index)).join("")
  }
}

function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        const targetPosition = target.offsetTop - 80
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })
}

function addLoadingAnimations() {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -30px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll(".donation-card, .about-card, .gallery-item").forEach((el) => {
    el.classList.add("animate-ready")
    observer.observe(el)
  })
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  populateContent()
  initSmoothScrolling()

  setTimeout(addLoadingAnimations, 100)

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("donation-btn") || e.target.classList.contains("discord-btn")) {
      e.target.style.transform = "scale(0.98)"
      setTimeout(() => {
        e.target.style.transform = ""
      }, 100)
    }
  })
})
