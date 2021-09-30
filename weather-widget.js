class WeatherWidget extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({
      mode: 'open',
    });

    const f2 = document.createElement('script')
    f2.src="https://aykuli.github.io/weather-widget-vue2/js/styles.js"
    shadow.appendChild(f2);
    const f = document.createElement('script')
    f.src="https://aykuli.github.io/weather-widget-vue2/js/app.js"
    shadow.appendChild(f);

    const f1 = document.createElement('script')
    f1.src="https://aykuli.github.io/weather-widget-vue2/js/chunk-vendors.js"
    shadow.appendChild(f1);
}
}
customElements.define('weather-widget', WeatherWidget);

