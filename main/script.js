// Data arrays
const vehicles = [
  { name: "BMW M5 F90", price: "20€", image: "bmw-m5-f90.png" },
  { name: "Brabus 6x6", price: "30€", image: "brabus-6x6.png" },
  { name: "Lamborghini Huracan", price: "25€", image: "lamborghini-huracan.png" },
  { name: "Tesla Model S", price: "15€", image: "tesla-model-s.png" },
  { name: "Ferrari F8", price: "35€", image: "ferrari-f8.png" },
]

const organizations = [
  { name: "Vagos", price: "50€", image: "vagos-logo.png" },
  { name: "Ballas", price: "50€", image: "ballas-logo.png" },
  { name: "Medelin Cartel", price: "60€", image: "medelin-cartel-logo.png" },
  { name: "Los Santos Police", price: "40€", image: "lspd-logo.png" },
  { name: "Grove Street", price: "45€", image: "grove-street-logo.png" },
  { name: "Owner", price: "1245€", image: "owner-logo.png" },
]

const gameImages = [
  "fivem-police-chase.png",
  "fivem-luxury-cars-street-racing.png",
  "fivem-gang-meeting.png",
  "fivem-city-nightlife-roleplay.png",
  "fivem-police-station.png",
  "fivem-custom-vehicles.png",
]

// Function to create donation cards
function createDonationCard(item, type) {
  return `
        <div class="donation-card">
            <img src="${item.image}" alt="${item.name}" class="donation-image" loading="lazy" onerror="this.src='placeholder-p0265.png'">
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
            <img src="${image}" alt="Fury RolePlay V2 screenshot ${index + 1}" class="gallery-image" loading="lazy" onerror="this.src='placeholder-p0265.png'">
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

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

let ticking = false

function updateScrollAnimations() {
  const scrolled = window.pageYOffset
  const heroSection = document.querySelector(".hero-section")

  if (heroSection && scrolled < window.innerHeight) {
    heroSection.style.transform = `translateY(${scrolled * 0.2}px)`
  }

  ticking = false
}

function requestScrollUpdate() {
  if (!ticking) {
    requestAnimationFrame(updateScrollAnimations)
    ticking = true
  }
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
        observer.unobserve(entry.target) // Stop observing once animated
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

  setTimeout(addLoadingAnimations, 50)

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("donation-btn") || e.target.classList.contains("discord-btn")) {
      e.target.style.transform = "scale(0.98)"
      setTimeout(() => {
        e.target.style.transform = ""
      }, 100)
    }
  })

  window.addEventListener("scroll", requestScrollUpdate, { passive: true })
})
