// Data arrays
const vehicles = [
  {
    name: "BMW M5 F90",
    price: "20€",
    image:
      "https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&",
  },
  {
    name: "Brabus 6x6",
    price: "30€",
    image:
      "https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&",
  },
  {
    name: "Lamborghini Huracan",
    price: "25€",
    image:
      "https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&",
  },
  {
    name: "Tesla Model S",
    price: "15€",
    image:
      "https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&",
  },
  {
    name: "Ferrari F8",
    price: "35€",
    image:
      "https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&",
  },
]

const organizations = [
  {
    name: "Vagos",
    price: "50€",
    image:
      "https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&",
  },
  {
    name: "Ballas",
    price: "50€",
    image:
      "https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&",
  },
  {
    name: "Medelin Cartel",
    price: "60€",
    image:
      "https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&",
  },
  {
    name: "Los Santos Police",
    price: "40€",
    image:
      "https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&",
  },
  {
    name: "Grove Street",
    price: "45€",
    image:
      "https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&",
  },
  {
    name: "Owner",
    price: "1245€",
    image:
      "https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&",
  },
]

const admins = [
  {
    name: "Helper Admin",
    price: "10€",
    image:
      "https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&",
  },
  {
    name: "Moderator",
    price: "25€",
    image:
      "https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&",
  },
  {
    name: "Admin",
    price: "50€",
    image:
      "https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&",
  },
  {
    name: "Super Admin",
    price: "100€",
    image:
      "https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&",
  },
]

const commands = [
  {
    name: "VIP Komande",
    price: "15€",
    image:
      "https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&",
  },
  {
    name: "Premium Komande",
    price: "30€",
    image:
      "https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&",
  },
  {
    name: "Elite Komande",
    price: "50€",
    image:
      "https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&",
  },
  {
    name: "Ultimate Komande",
    price: "75€",
    image:
      "https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&",
  },
]

const addons = [
  {
    name: "Skin Pack",
    price: "5€",
    image:
      "https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&",
  },
  {
    name: "Weapon Pack",
    price: "12€",
    image:
      "https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&",
  },
  {
    name: "Map Pack",
    price: "20€",
    image:
      "https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&",
  },
  {
    name: "Complete Pack",
    price: "35€",
    image:
      "https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&",
  },
]

const gameImages = [
  "https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&",
  "https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&",
  "https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&",
  "https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&",
  "https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&",
  "https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&",
  "https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&",
]

// Function to create donation cards
function createDonationCard(item, type) {
  return `
        <div class="donation-card">
            <img src="${item.image}" alt="${item.name}" class="donation-image" loading="lazy" onerror="this.src='https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&'">
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
            <img src="${image}" alt="Fury RolePlay V2 screenshot ${index + 1}" class="gallery-image" loading="lazy" onerror="this.src='https://cdn.discordapp.com/attachments/1236605109962670181/1394432084709474444/image.png?ex=689d0514&is=689bb394&hm=4ae7f6fcddd0c11e9e09e6de99bcb7f6c980b918f9d14fa179ed45887cdf0f52&'">
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

function initScrollIndicators() {
  // Create scroll indicator element
  const scrollIndicator = document.createElement("div")
  scrollIndicator.className = "scroll-indicator"
  scrollIndicator.id = "scroll-indicator"
  document.body.appendChild(scrollIndicator)

  const categories = [
    { id: "vehicles-section", name: "Vozila" },
    { id: "organizations-section", name: "Organizacije" },
    { id: "admins-section", name: "Admini" },
    { id: "commands-section", name: "Komande" },
    { id: "addons-section", name: "Dodaci" },
    { id: "join-section", name: "Pridruži se" },
    { id: "gallery-section", name: "Galerija" },
  ]

  let currentCategory = ""
  let indicatorTimeout

  function showIndicator(categoryName) {
    scrollIndicator.textContent = `Skrolaj do ${categoryName}`
    scrollIndicator.classList.add("show")

    clearTimeout(indicatorTimeout)
    indicatorTimeout = setTimeout(() => {
      scrollIndicator.classList.remove("show")
    }, 3000)
  }

  // Intersection Observer for category detection
  const categoryObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
          const category = categories.find((cat) => cat.id === entry.target.id)
          if (category && currentCategory !== category.name) {
            currentCategory = category.name
            showIndicator(category.name)
          }
        }
      })
    },
    {
      threshold: [0.3],
      rootMargin: "-20% 0px -20% 0px",
    },
  )

  // Observe all category sections
  categories.forEach((category) => {
    const element = document.getElementById(category.id)
    if (element) {
      categoryObserver.observe(element)
    }
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

  // Observe donation cards, about cards, and gallery items
  document.querySelectorAll(".donation-card, .about-card, .gallery-item").forEach((el) => {
    el.classList.add("animate-ready")
    observer.observe(el)
  })

  // Observe category titles for underline animation
  document.querySelectorAll(".category-title").forEach((el) => {
    observer.observe(el)
  })
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  populateContent()
  initSmoothScrolling()
  initScrollIndicators() // Added scroll indicators initialization

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
