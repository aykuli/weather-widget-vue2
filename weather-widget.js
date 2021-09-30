class WeatherWidget extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({
      mode: 'open',
    });

    const f2 = document.createElement('script')
    f2.src="./js/styles.js"
    shadow.appendChild(f2);
    const f = document.createElement('script')
    f.src="./js/app.6d6a1cdd.js"
    shadow.appendChild(f);

    const f1 = document.createElement('script')
    f1.src="./js/chunk-vendors.3ef5530b.js"
    shadow.appendChild(f1);
}
}
customElements.define('weather-widget', WeatherWidget);

