# ELI.js

## Note
* __Monna Histea__ based small js library for component compositing
* You can create a little dynamic elements with it or a small story

## Usage
```js
// Select an element (Query selector)
Eli.sel("#app");

// Create new elements
Eli.make('div', div => { ... });
Eli.span('text', span => { ... });
Eli.div(div => { ... });
Eli.button('Press me', onclick, button => { ... });

// Print into an element
Eli.print(element, "Hello there");
Eli.print(element, Eli.span("Hello there"));

// Clear element's HTML
Eli.clear(element);
```

## Create element (Function)
* You can create a function that returns new element
```js
const Ask = (question, on_yes, on_no) => {
	return Eli.span(s => {
		Eli.print(s, question, Eli.br());
		Eli.print(s, Eli.button("YES", on_yes));
		Eli.print(s, Eli.button("NO", on_yes));
	})
}

// Usage
Eli.print(element, Ask("Do you like ice cream?",
	() => window.alert("Great!"),
	() => window.alert("Oh well!"))
);
```


## Create element (Class)
* You can create a class that has `view` span element to render updates
```js
class Ask {
	constructor(question, on_yes, on_no) {
		this.question = question;
		this.on_yes = on_yes;
		this.on_no = on_no;
		this.view = Eli.span(s => {
			Eli.print(s, this.question);
			Eli.print(s, Eli.button("YES", this.on_yes));
			Eli.print(s, Eli.button("NO", this.on_yes));
		});
	}

	sampleFunction() {
		window.alert(this.question);
	}
}

// Usage
let ask = new Ask("Do you like ice cream?",
	() => window.alert("Great!"),
	() => window.alert("Oh well!")
);

ask.sampleFunction();

Eli.print(element, ask);
```
