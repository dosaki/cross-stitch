<h1 align="center">Cross Stitcher</h1>
<p align="center"> <img alt="Cross Stitcher" src="./icons/48.png" width="48px"/></p>

Are you colourblind?

Do your Monday boards look like this?

| Normal                             | Colourblind (simulated)                                             |
|------------------------------------|---------------------------------------------------------------------|
| ![Statuses](./images/statuses.png) | ![Statuses with Deuteranomaly](./images/statuses-deuteranomaly.png) |

What if they could look like this?

| Normal                                                | Colourblind (simulated)                                                                |
|-------------------------------------------------------|----------------------------------------------------------------------------------------|
| ![Patterned Statuses](./images/statuses-patterns.png) | ![Patterned Statuses with Deuteranomaly](./images/statuses-patterns-deuteranomaly.png) |


Cross Stitcher is an addon for Firefox and Chrome that adds patterns to your Monday board status fields to make them easier to read for people with colourblindness.

# How to use (preview)
## Firefox
* Go to the [Extensions Debugging page](about:debugging#/runtime/this-firefox)
    * Enter "[about:debugging](about:debugging)" in the URL bar
    * click "This Firefox"
* Click "Load Temporary Add-on"
* Select the zip file you downloaded from the [releases](https://github.com/dosaki/cross-stitch/releases)

## Chrome
* Download the extension from the [releases](https://github.com/dosaki/cross-stitch/releases)
* Extract the contents of the zip file
* Go to [Chrome Extensions Manager](chrome://extensions)
* Activate developer mode (top-right corner)
* Click "Load unpacked"
* Select the extracted contents of the zip file (the folder with `manifest.json`)

# How to build
To run the build script, you'll need:
* `bash`
* `zip`
* `node` (tested with v18.8.0)
* `npm` (tested with v8.18.0)

To build, simply run:
```shell
./build.sh
```

This will generate a zip file in the `dist` folder (and the unpacked files in `build` folder).