# CartModule

## Usage

fork this repo then run `npm install`.

run `npm run build` this will compile and minify the application into `/dist`.

In your airship project, add `airship-cart.min.js` to `compartments/assets/scripts` and `airship-cart.min.css` to `compartments/assets/styles`.

Include these files in `compartments/templates/cart.html`.

```
<head>
  <link rel="stylesheet" link="/assets/styles/airship-cart.min.css"></link>
</head>
<body>
  <script type="text/javascript" src="/assets/scripts/airship-cart.min.js"></script>
</body>
```

### Development

Run `npm start` to serve application at `http://localhost:4200/cart`. 

The app will automatically reload if you change any of the source files.