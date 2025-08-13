// Data arrays
const vehicles = [
  {
    name: "BMW M5 F90",
    price: "20€",
    image: "public/logo.png",
  },
  {
    name: "Brabus 6x6",
    price: "30€",
    image: "public/logo.png",
  },
  {
    name: "Lamborghini Huracan",
    price: "25€",
    image: "public/logo.png",
  },
  {
    name: "Tesla Model S",
    price: "15€",
    image: "public/logo.png",
  },
  {
    name: "Ferrari F8",
    price: "35€",
    image: "public/logo.png",
  },
]

const organizations = [
  {
    name: "Vagos",
    price: "50€",
    image: "public/logo.png",
  },
  {
    name: "Ballas",
    price: "50€",
    image: "public/logo.png",
  },
  {
    name: "Medelin Cartel",
    price: "60€",
    image: "public/logo.png",
  },
  {
    name: "Los Santos Police",
    price: "40€",
    image: "public/logo.png",
  },
  {
    name: "Grove Street",
    price: "45€",
    image: "public/logo.png",
  },
  {
    name: "Owner",
    price: "1245€",
    image: "public/logo.png",
  },
]

const admins = [
  {
    name: "Helper Admin",
    price: "10€",
    image: "public/logo.png",
  },
  {
    name: "Moderator",
    price: "25€",
    image: "public/logo.png",
  },
  {
    name: "Admin",
    price: "50€",
    image: "public/logo.png",
  },
  {
    name: "Super Admin",
    price: "100€",
    image: "public/logo.png",
  },
]

const commands = [
  {
    name: "VIP Komande",
    price: "15€",
    image: "public/logo.png",
  },
  {
    name: "Premium Komande",
    price: "30€",
    image: "public/logo.png",
  },
  {
    name: "Elite Komande",
    price: "50€",
    image: "public/logo.png",
  },
  {
    name: "Ultimate Komande",
    price: "75€",
    image: "public/logo.png",
  },
]

const addons = [
  {
    name: "Skin Pack",
    price: "5€",
    image: "public/logo.png",
  },
  {
    name: "Weapon Pack",
    price: "12€",
    image: "public/logo.png",
  },
  {
    name: "Map Pack",
    price: "20€",
    image: "public/logo.png",
  },
  {
    name: "Complete Pack",
    price: "35€",
    image: "public/logo.png",
  },
]

const gameImages = [
  "public/logo.png",
  "public/logo.png",
  "public/logo.png",
  "public/logo.png",
  "public/logo.png",
  "public/logo.png",
  "public/logo.png",
]

// Function to create donation cards
function createDonationCard(item, type) {
  return `
        <div class="donation-card">
            <img src="${item.image}" alt="${item.name}" class="donation-image" loading="lazy" onerror="this.src='public/logo.png'">
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
            <img src="${image}" alt="Fury RolePlay V2 screenshot ${index + 1}" class="gallery-image" loading="lazy" onerror="this.src='public/logo.png'">
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

  // Populate admins
  const adminsGrid = document.getElementById("admins-grid")
  if (adminsGrid) {
    adminsGrid.innerHTML = admins.map((admin) => createDonationCard(admin, "admin")).join("")
  }

  // Populate commands
  const commandsGrid = document.getElementById("commands-grid")
  if (commandsGrid) {
    commandsGrid.innerHTML = commands.map((command) => createDonationCard(command, "command")).join("")
  }

  // Populate addons
  const addonsGrid = document.getElementById("addons-grid")
  if (addonsGrid) {
    addonsGrid.innerHTML = addons.map((addon) => createDonationCard(addon, "addon")).join("")
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

function showAllContent() {
  // Make all elements visible immediately without scroll triggers
  document.querySelectorAll(".donation-card, .about-card, .gallery-item").forEach((el) => {
    el.classList.add("animate-in")
  })

  // Show category titles immediately
  document.querySelectorAll(".category-title").forEach((el) => {
    el.classList.add("animate-in")
  })
}

/* Enhanced button interactions with ripple effects */
function addButtonEffects() {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("donation-btn") || e.target.classList.contains("discord-btn")) {
      // Create ripple effect
      const button = e.target
      const rect = button.getBoundingClientRect()
      const ripple = document.createElement("span")
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
      `

      button.style.position = "relative"
      button.style.overflow = "hidden"
      button.appendChild(ripple)

      // Button press animation
      button.style.transform = "scale(0.95)"
      setTimeout(() => {
        button.style.transform = ""
        ripple.remove()
      }, 150)
    }
  })

  // Add ripple animation CSS
  const style = document.createElement("style")
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(2);
        opacity: 0;
      }
    }
  `
  document.head.appendChild(style)
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  populateContent()
  initSmoothScrolling()

  setTimeout(() => {
    showAllContent()
    addButtonEffects()
  }, 100)
})
