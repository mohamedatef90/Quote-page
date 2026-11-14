# Quote of The Day

A tiny single-page app that shows a random quote. Click the button and the page picks one of five built-in quotes and displays it with its author. It is plain HTML, CSS, and JavaScript with no build step.

## How it works

`js/main.js` holds an array of five quotes and a `getRandomQuote()` function that picks one at random and writes the quote and author into the page. The button in `index.html` calls that function.

## Tech

- HTML, CSS, and vanilla JavaScript
- Bootstrap 5 and Font Awesome (bundled in `css/` and `js/`)
- Poppins from Google Fonts

## Running

Open `index.html` in a browser. Google Fonts need an internet connection; everything else is local.

## Project structure

```
index.html   Page
js/main.js   Quote list and random pick
css/         Bootstrap, Font Awesome, and custom styles
```
