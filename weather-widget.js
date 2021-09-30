class WeatherWidget extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({
      mode: 'open',
    });
    shadow.innerHTML= `  <div style="width:100px;height:100px;" id="app">0000</div>`;
    const style = document.createElement('style');
        shadow.appendChild(style);
    const h = document.querySelector('#h')
    console.log(h)
    const f = document.createElement('script')
    f.src="./js/app.6d6a1cdd.js"
    shadow.appendChild(f);

    const f1 = document.createElement('script')
    f1.src="./js/chunk-vendors.3ef5530b.js"
    shadow.appendChild(f1);
  }
}
customElements.define('weather-widget', WeatherWidget);

