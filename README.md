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

--Having problems getting MyTable.jsx to work and it might be ES6 related.  The possible reasons for the SyntaxError: Cannot use import statement outside a module error is you are trying to run the file independently, you are yet to install and set up an Es6 compiler such as Babel or the path of the file in your runscript is wrong/not the compiled file.

3-5-21

Wow what a mess.  I am having some serious bugs.  On my debugger there were 3 long scripts on one line in my index.html that WERE NOT visible when I went there to fix the problem.  Next the App.js file does NOT work at ALL and there is NO REASON WHY.  Clearly something is going on with mega bugs coming from who knows where.  I can use more practice at setting up everything and try again to get @abcd19St-Grid.  That should not be rocket science.  There's nobody to ask for help.  I did learn how to fix many things or where to look at least.  At this point it's better to start over and in an hour or so I'll be much better off.  Really, the App NOT working and it is so easy, no bugs at all except for weird colors that I've never seen before.  I'm frustrated, but I'm not quiting.  This is only practice after all.