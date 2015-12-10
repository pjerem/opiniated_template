# opinionated_template
## Template project for Opinionated.js

Opinionated.js is going to be an application generator for the company I work at.

This repo hosts the template of an empty project.

As it name sounds, this generator will be very opinionated and there will be few configuration options as it was decided.

### Goals 
+ Keep It Simple, Stupid
+ Support for ES6, React JSX (but no React pre-installed), TypeScript, CoffeeScript, Jade and LESS
+ No Grunt, Gulp, Browserify here. Only Webpack
+ No frameworks preinstalled
+ NPM used as a task runner with commands to :
--+ Run the development server
--+ Run the tests, watching project files for changes and running the tests again (with Karma)
--+ Build the app.
+ And that's all.

### Why not Yeoman ?
Simple answer : overkill. 
I love Yeoman, but where I am, we create a lot of webapps with strictly the same technologies and architecture. It's more simple to have one little tool to generate them all.

### Where is Opinionated.js ?
The generator itself is still in development and hosted on a private repository while our new workflow is still debatable.
