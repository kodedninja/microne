function Microne(parent_el) {
	this.audio = null
	this._src_ = null
	this._events_ = []
	this.is_playing = false

	this.p_char = '>'
	this.s_char = '||'

	this.el = document.createElement('div')
	this.el.style.width = '100%'
	this.el.style.height = '100%'
	this.el.style.border = '1px solid #000'
	this.el.style.cursor = 'auto'
	this.el.style.position = 'relative'

	this.fill_el = document.createElement('div')
	this.fill_el.style.background = '#eee'
	this.fill_el.style.height = '100%'
	this.fill_el.style.width = '0%'
	this.fill_el.style.pointerEvents = 'none'
	this.el.appendChild(this.fill_el)

	this.play_button = document.createElement('div')
	this.play_button.innerHTML = this.p_char
	this.play_button.style.cursor = 'pointer'
	this.play_button.style.fontFamily = 'monospace'
	this.play_button.style.fontSize = '14px'
	this.play_button.style.position = 'absolute'
	this.play_button.style.top = '50%'
	this.play_button.style.left = '50%'
	this.play_button.style.width = '25px'
	this.play_button.style.height = '25px'
	this.play_button.style.transform = 'translate(-50%, -50%)'
	this.play_button.style.textAlign = 'center'
	this.play_button.style.fontWeight = 'bold'
	this.el.appendChild(this.play_button)

	this.init = function () {
		parent_el.appendChild(this.el)
		this.el.addEventListener('click', el_click)
		this.play_button.addEventListener('click', play_click)
	}

	this.source = function (src, preload) {
		this._src_ = src
		if (preload !== false) {
			this.audio = new Audio(src)
			this.audio.addEventListener('timeupdate', time_update)
			this.audio.addEventListener('ended', audio_ended)
		}
	}

	this.play = function () {
		if (!this.audio && this._src_) {
			this.source(this._src_)
			this._apply_events_()
		}

		this.is_playing = true
		this.audio.play()
		this.play_button.innerHTML = this.s_char
		this.el.style.cursor = 'pointer'
	}

	this.pause = function () {
		this.is_playing = false
		this.audio.pause()
		this.play_button.innerHTML = this.p_char
		this.el.style.cursor = 'auto'
	}

	this._apply_events_ = function() {
		for (var i in this._events_) {
			this.audio.addEventListener(this._events_[i].e, this._events_[i].h)
		}
		this._events_ = []
	}

	this.on = function (e, h) {
		this._events_.push({e: e, h: h})
		if (this.audio) this.audio.addEventListener(e, h)
	}

	const t = this
	function el_click(e) {
		e.preventDefault()

		if (e.target != t.play_button && t.is_playing) {
			x = e.pageX - t.el.offsetLeft
			t.audio.currentTime = t.audio.duration * (x * 100 / t.el.offsetWidth) / 100
		}
	}

	function play_click(e) {
		e.preventDefault()

		if (t.is_playing) {
			t.pause()
		}		else {
			t.play()
		}
	}

	function time_update(e) {
		const at = (t.audio.currentTime * 100 / t.audio.duration).toFixed(3)
		t.fill_el.style.width = at + '%'
	}

	function audio_ended() {
		t.pause()
		t.audio.currentTime = 0
		t.fill_el.style.width = '0%'
	}

	this.init()
	return this
}
