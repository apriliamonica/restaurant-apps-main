class HeaderBar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
     <div class="navbar">
        <div class="nav-title" tabindex="0">
          <a href="#home">Muk<span>Bang</span></a>
        </div>
        <nav>
          <ul class="nav-daftar">
            <li><a href="#home" class="nav-item" tabindex="0">Home</a></li>
            <li><a href="#" class="nav-item" >Favorite</a></li>
            <li>
              <a href="https://www.instagram.com/" class="nav-item">About Us</a>
            </li>
          </ul>
        </nav>
        <div class="nav-toggle" id="nav-toggle">
          <button id="drawer-button">☰</button>
        </div>
      </div>
    `;
  }
}

customElements.define("header-bar", HeaderBar);
