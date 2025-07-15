let logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
  console.log("logo clicked");
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(() => {
    location.reload();
  }, 1000)
})

const navLink = document.querySelectorAll(".link a");

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navLink.forEach((btn) => { btn.classList.remove("active") });
    link.classList.add("active");
    hideSidebar();
  });
});


document.querySelector(".contact-section form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_wj1r3r1", "template_lc7s5wu", this)
    .then(() => {
      alert("Message sent successfully!");
      this.reset();
    }, (error) => {
      alert("Failed to send message: " + error.text);
    });
});

let menu = document.querySelector(".menu");
let cross = document.querySelector(".cross");

menu.addEventListener("click",()=>{
  showSidebar();
});

cross.addEventListener("click",()=>{
  hideSidebar();
})

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.right = "0%";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.right = "-110%";
}

let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }
    
    if (currentScroll > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScrollTop = currentScroll;
  });