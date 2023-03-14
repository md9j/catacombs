class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar">
        <a href="#" class="logo">${this.getAttribute("logo")}</a>
        <div class="navbar-items" color="white">
        <nav class="navbar">
        <a href="#" class="logo">Logo</a>
        <div class="navbar-items">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>
      
        </div>
      </nav>
    `;
  }
}

customElements.define("custom-navbar", Navbar);
