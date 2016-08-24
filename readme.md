# Webpack ES6 Module project starter

Nothing special, this project is the minimum required to get ES6 Modules importing and JS output with Babel.

# Default Webpack configurations:
- outputs compiled <abbr title="Javascript">JS</abbr> to `_build/` 
- outputs SourceMaps to `_build/`
- Enables `UglifyJSPlugin`

# Running Webpack (compiling and watching)
Run the following (terminal command):
```shell
    npm run build
```
to compile with Webpack and begin watching for changes in `./src/*.js` files.

The previous command is synonymous with: 
```shell
    webpack --progress --watch
```

