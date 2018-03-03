![Screenshot](https://github.com/kodedninja/microne/blob/master/SCREENSHOT.png)

A tiny, minimalistic JS music player. It's around **2 kilobytes** and it's **super beautiful**.

## Installation
### From CDN
Include with ```<script src="https://unpkg.com/microne/microne.js"></script>```

### npm
- ```$ npm i microne```
- Include with ```<script src="node_modules/microne/microne.js"></script>```

### Manual
Simply download the ```microne.js``` file and include it.

## Usage
```html
<body>
  <div id="player"></div>

  <script src="https://unpkg.com/microne/microne.js"></script>
  <script>
    var m = new Microne(document.getElementById('player'))
    m.source('media/example.mp3')
  </script>
</body>
```

## API
### ```new Microne(parent_el)```
Makes a new player and appends it to the ```parent_el``` element. ```parent_el``` must have a specified ```width``` and ```height``` and microne fills it.

### ```m.source(href[, preload])```
Sets the source of the player to ```href```. If ```preload``` (optional) is ```false``` the audio will only be loaded at play. Default is ```true```.

### ```m.play()```
Start playing.

### ```m.pause()```
Pause playing.

### ```m.on(event, handler)```
Add an event to the audio element. [See possible events here.](https://www.w3schools.com/tags/ref_av_dom.asp)
