function Microne(parent_el) {
	this.audio = null
	this.is_playing = false

	this.p_char = '>'
	this.s_char = '||'

	this.el = document.createElement('div');
	this.el.style.width = '100%'
	this.el.style.height = '100%'
	this.el.style.border = '1px solid #000'
	this.el.style.cursor = 'pointer'
	this.el.style.position = 'relative'

	this.fill_el = document.createElement('div')
	this.fill_el.style.background = '#eee'
	this.fill_el.style.height = '100%'
	this.fill_el.style.width = '0%'
	this.fill_el.style.pointerEvents = 'none'
	this.el.appendChild(this.fill_el)

	this.play_button = document.createElement('div');
	this.play_button.innerHTML = this.p_char
	this.play_button.style.cursor = 'pointer'
	this.play_button.style.position = 'absolute'
	this.play_button.style.top = '50%'
	this.play_button.style.transform = 'translateY(-50%)'
	this.play_button.style.pointerEvents = 'none'
	this.play_button.style.width = '100%'
	this.play_button.style.textAlign = 'center'
	this.play_button.style.margin = 'none'
	this.play_button.style.fontWeight = 'bold'
	this.el.appendChild(this.play_button)

	this.init = function() {
		parent_el.appendChild(this.el)

		this.el.addEventListener('click', el_click)
	}

	this.source = function(src) {
		this.audio = new Audio(src)
		this.audio.addEventListener('timeupdate', time_update);
	}

	this.play = function() {
		this.audio.play()

		this.play_button.innerHTML = this.s_char
	}

	this.pause = function() {
		this.audio.pause()

		this.play_button.innerHTML = this.p_char
	}

	var t = this
	function el_click(e) {
		e.preventDefault()

		if (t.is_playing) {
			t.pause();
		} else {
			t.play();
		}

		t.is_playing = !t.is_playing
	}

	function time_update(e) {
		var at =  (t.audio.currentTime * 100 / t.audio.duration).toFixed(3)
		t.fill_el.style.width = at + '%'
	}

	this.init()
	return this
}
