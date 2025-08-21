// Data arrays
const vehicles = [
  {
    name: "Soon",
    price: "Soon€",
    image: "./slike/logo.png",
  },
  {
    name: "Soon",
    price: "Soon€",
    image: "./slike/logo.png",
  },
  {
    name: "Soon",
    price: "Soon€",
    image: "./slike/logo.png",
  },
  {
    name: "Soon",
    price: "Soon€",
    image: "./slike/logo.png",
  },
  {
    name: "Soon",
    price: "Soon€",
    image: "./slike/logo.png",
  },
]

const organizations = [
  {
    name: "Casino",
    price: "Soon€",
    image: "./slike/casino.png",
  },
  {
    name: "Narcos",
    price: "Soon€",
    image: "./slike/narcos.png",
  },
  {
    name: "La casa del papel",
    price: "Soon€",
    image: "./slike/la_casa_del_papel.png",
  },
  {
    name: "Auto Mafija",
    price: "Soon€",
    image: "./slike/automafija.png",
  },
  {
    name: "Camorra",
    price: "Soon€",
    image: "./slike/camorra.png",
  },
]

const admins = [
  {
    name: "Super Admin",
    price: "10€ / 50FC",
    image: "./slike/superadmin.png",
  },
  {
    name: "RolePlay Admin",
    price: "15€ / 75FC",
    image: "./slike/roleplayadmin.png",
  },
  {
    name: "Head Admin",
    price: "25€ / 125FC",
    image: "./slike/headadmin.png",
  },
  {
    name: "Menadzer",
    price: "35€ / 175FC",
    image: "./slike/menadzer.png",
  },
  {
    name: "Direktor",
    price: "70€ / 350FC",
    image: "./slike/direktor.png",
  },
  {
    name: "Vlasnik",
    price: "120€ / 600FC",
    image: "./slike/vlasnik.png",
  },
]

const commands = [
  {
    name: "/Dajitem",
    price: "?€",
    image: "./slike/logo.png",
  },
  {
    name: "SOON",
    price: "SOON",
    image: "./slike/logo.png",
  },
  {
    name: "Soon",
    price: "??€",
    image: "./slike/logo.png",
  },
]

const addons = [
  {
    name: "5 Fury Coins",
    price: "1€",
    image: "./slike/logo.png",
  },
{
    name: "10 Fury Coins",
    price: "2€",
    image: "./slike/logo.png",
  },
  {
    name: "25 Fury Coins",
    price: "5€",
    image: "./slike/logo.png",
  },
  {
    name: "50 Fury Coins",
    price: "10€",
    image: "./slike/logo.png",
  },
  {
    name: "100 Fury Coins",
    price: "20€",
    image: "./slike/logo.png",
  },
  {
    name: "Vozilo u Organizaciju",
    price: "20€ / 100FC",
    image: "./slike/logo.png",
  },
  {
    name: "Custom Vozilo u Organizaciju",
    price: "30-50€ / 150-250FC",
    image: "./slike/customvozilo.png",
  },
]

const custom = [
  {
    name: "Custom Organizacija",
    price: "70€ / 350FC",
    image: "./slike/logo.png",
  },
  {
    name: "Custom Auto",
    price: "40€ / 200FC",
    image: "./slike/logo.png",
  },
  {
    name: "Custom Ped",
    price: "15€ / 75FC",
    image: "./slike/logo.png",
  },
  {
    name: "Custom Tag",
    price: "20€ / 100FC",
    image: "./slike/logo.png",
  },
]

const gameImages = [
  "./slike/logo.png",
  "./slike/logo.png",
  "./slike/logo.png",
  "./slike/logo.png",
  "./slike/logo.png",
  "./slike/logo.png",
  "./slike/logo.png",
]

// Function to create donation cards
function createDonationCard(item, type) {
  return `
        <div class="donation-card">
            <img src="${item.image}" alt="${item.name}" class="donation-image" loading="lazy" onerror="this.src='./slike/logo.png'">
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
            <img src="${image}" alt="Fury RolePlay V2 screenshot ${index + 1}" class="gallery-image" loading="lazy" onerror="this.src='./slike/logo.png'">
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

  // Populate custom
  const customGrid = document.getElementById("custom-grid")
  if (customGrid) {
    customGrid.innerHTML = custom.map((customItem) => createDonationCard(customItem, "custom")).join("")
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
