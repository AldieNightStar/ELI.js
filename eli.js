!(function() {
	
	const Eli = {};
	window.Eli = Eli;

	Eli.make = (tag, cb) => {
		const el = document.createElement(tag);
		if (cb) cb(el);
		return el;
	}

	Eli.span  = (text, cb) => Eli.make('span', s => {
		if (text) s.innerText = text;
		if (cb) cb(s);
	});

	Eli.div   = (cb) => Eli.make('div', cb);
	Eli.sel   = (q)  => document.querySelector(q);
	Eli.html  = (e)  => {
		if (e === undefined || e === null) {
			return Eli.span("" + e);
		}
		if (e instanceof HTMLElement) {
			return e;
		} else if (e instanceof Function) {
			return Eli.html(e());
		} else if (e.view instanceof HTMLElement) {
			return e.view;
		} else {
			return Eli.span("" + e);
		}
	};
	Eli.print = (out, ...elems) => {
		let outFn = null;
		if (out instanceof HTMLElement) {
			outFn = e => out.appendChild(e);
		} else {
			outFn = () => console.error("Eli.print: Out is not a HTML element: ", out);
		}
		for (let elem of elems) {
			elem = Eli.html(elem);
			outFn(elem);
		}
	};
	Eli.button = (caption, onclick, cb) => Eli.make('button', b => {
		b.innerText = caption;
		b.onclick = onclick;
		if (cb) cb(b);
	});
	Eli.br = () => Eli.make('br');
	Eli.clear = (e) => {
		if (e instanceof HTMLElement) {
			e.innerHTML = "";
		} else {
			console.error("Eli.clear: Wrong element to clear: ", e);
		}
	}

})();