# practice2

TO SETUP REACT FOR CSS (SIMPLIST METHOD):

Setting up Webpack npm i css-loader style-loader --save-dev
set up a webpack.config.js file on the same directory as App.css.
Add the following code in the App.css. module.exports = { module: {
test: /.css$/, use: [ "style-loader", "css-loader" ]
}};
CSS Works! Don't forget to import with "../App.css"
SEE: Mosh Hamedani- Coding with Mosh.

*** Also, to get the CSS to work take the className and use only that i.e. .world { border: solid white; }


INSTALLING BOOTSTRAP/REACTSTRAP:

Installed jquery --save…

…, popper.js --save, and react-bootstrap bootstrap and then I needed import 'bootstrap/dist/css/bootstrap.min.css'; to put into index.js, app.js, and on the component. I finally got bootstrap to work. YEA.



NPM installed @abcd19/st-grid.  These are some accounting forms that I'm going to play around with.  I'm going to bring in an API from Alpha Vantage.  Working with financial statements.  This is an offshoot of my Capstone Project.  