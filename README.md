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
or check out the [example](https://github.com/kodedninja/microne/tree/master/example) (audio not included due to file size).

## API
### ```new Microne(parent_el)```
Makes a new player and appends it to the ```parent_el``` element. ```parent_el``` must have a specified ```width``` and ```height``` and microne fills it.

### ```m.source(href)```
Sets the source of the player to ```href```.

### ```m.play()```
Start playing.

### ```m.pause()```
Pause playing.
