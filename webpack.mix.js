const mix = require("laravel-mix");
mix
    .js("./src/js/main.js", "assets")
    .sass("./src/scss/main.scss", "assets")
    .copy("./src/scss/fonts/*.otf", "assets")
    .copy("./src/scss/fonts/*.woff", "assets")
    .copy("./src/scss/fonts/*.woff2", "assets")
    .options({ processCssUrls: false })
    .setPublicPath("");