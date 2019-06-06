PPN API Documentation
-------------------------

Content used for Priceline Partner Network's developer website.

Here's how it works:

Running an `npm run build` will trigger the build script.

The build script will scan the src directory for `herodotus.config.js` files. This is just a data mapping file. 
You can stick whatever information, formatted however you want inside of it. The default export of the file
should be an object that contains a unique ID found in the project. 

All the `herodotus.config.js` files will then be combined, transpiled, and bundled together as a library using webpack.
The library modules are divided into files using the ID of the `herodotus.config.js` file as the filename.  