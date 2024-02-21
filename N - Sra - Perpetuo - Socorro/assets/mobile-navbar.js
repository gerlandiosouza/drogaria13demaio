/*

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init(); 
  */

  class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
      this.handleZoom = this.handleZoom.bind(this);
  
      // Manter o valor inicial da largura da viewport
      this.initialViewportWidth = window.innerWidth;
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation = link.style.animation ? "" : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    handleZoom() {
      // Verificar se o zoom ocorreu
      const currentViewportWidth = window.innerWidth;
  
      if (currentViewportWidth < this.initialViewportWidth) {
        // Recolher o menu se o zoom ocorreu
        this.navList.classList.remove(this.activeClass);
        this.mobileMenu.classList.remove(this.activeClass);
      }
  
      // Atualizar o valor inicial da largura da viewport
      this.initialViewportWidth = currentViewportWidth;
    }
  
    addEventListeners() {
      this.mobileMenu.addEventListener("click", this.handleClick);
      window.addEventListener("resize", this.handleZoom);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addEventListeners();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(".mobile-menu", ".nav-list", ".nav-list li");
  mobileNavbar.init();
  