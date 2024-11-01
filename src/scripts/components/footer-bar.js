class FooterBar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <div class="footer">
        <p class="footer-copyright">
          Copyright @aprilia Muk<span>Bang</span> 2024
        </p>
      </div>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
