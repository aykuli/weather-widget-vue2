class WeatherWidget extends HTMLDivElement {
  render() {
    this.innerHTML = `
    <iframe id="weather-widget"
    title="Weather widget"
    width="300"
    height="200">
    <!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="icon" href="https://aykuli.github.io/weather-widget-vue2/favicon.ico" />
    <title>weather-widget2</title>
    <link href="https://aykuli.github.io/weather-widget-vue2/app.e69be6cf.css" rel="preload" as="style" />
    <link href="https://aykuli.github.io/weather-widget-vue2/app.33f5ffff.js" rel="preload" as="script" />
    <link href="https://aykuli.github.io/weather-widget-vue2/chunk-vendors.3ef5530b.js" rel="preload" as="script" />
    <link href="https://aykuli.github.io/weather-widget-vue2/app.e69be6cf.css" rel="stylesheet" />
  </head>
  <body>
    <noscript
      ><strong
        >We're sorry but weather-widget2 doesn't work properly without JavaScript enabled. Please enable it to
        continue.</strong
      ></noscript
    >
    <div id="app"></div>
    <script src="https://aykuli.github.io/weather-widget-vue2/chunk-vendors.3ef5530b.js"></script>
    <script src="https://aykuli.github.io/weather-widget-vue2/app.33f5ffff.js"></script>
  </body>
</html>
</iframe>
    `;
  }
}

customElements.define('weather-widget', WeatherWidget);
