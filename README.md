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

TO FIX NODE_MODULE PROBLEMS AT THE NPM START:

npm cache clean --force
delete node_modules folder
delete package-lock.json file
npm install



3-6-21

Working ways around the problem as other bugs seem to come up.  Not getting a lot accomplished, but I am going to be good at debugging, which is an important skill.

I think the accounting form from @abcd19st-grid needs more things downloaded into my project.  I may be missing other components.  As this is one of the first npm packages that I'm playing around with outside the bootcamp setting, I'm determined to see it in action.  So, I'm going to see if I have the right things downloaded.

I deployed to github with a new branch.  Don't know how this really matters, but it made my localhost:3000 work.  For all afternoon it was a blank.

ACTIONS TO TAKE:

1.  Check out the @abcd19st-grid code to determine what is needed for it to work.
2.  Module.exports = MyTable; is not necessary.
3.  Play around with the ROUTER in index.js.  Should we not use the <App/> or the <MyTable/>.
