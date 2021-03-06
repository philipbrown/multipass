# MultiPass

A tiny Javascript module for making searching through multiselect dropdown boxes really easy.

MultiPass will search the list as you type and set the nearest match as the top item in the box.

# How to use it
Make sure you have jQuery loaded.

Write the following markup.
```html
<form>
  <input class="search">
  <select class="multipass" multiple></select>
</form>
```

Next, simply pass your json to the init method on the MultiPass module.
```javascript
var json = ["Bruce Willis",
            "Milla Jovovich",
            "Gary Oldman",
            "Ian Holm",
            "Chris Tucker",
            "Charlie Creed-Miles",
            "Brion James",
            "Tricky",
            "Clifton Lloyd Bryan",
            "Tom Lister, Jr.",
            "Christopher Fairbank",
            "Lee Evans",
            "John Bluthal",
            "Luke Perry",
            "John Bennett",
            "Kim Chan",
            "John Neville",
            "Al Matthews",
            "Maïwenn Le Besco"];

$(document).ready(MultiPass.init({
  json: json,
}));
```

You can also overwrite the default class names:
```javascript
$(document).ready(MultiPass.init({
  json: json,
  multiselect: '.my-select-box',
  inputBox: '.my-input-box'
}));
```

And you don't need to use json for your dropdown list:
```html
<form>
  <input class="search">
  <select class="multipass" multiple>
    <option value="Homer">Homer</option>
    <option value="Marge">Marge</option>
    <option value="Bart">Bart</option>
    <option value="Lisa">Lisa</option>
    <option value="Maggie">Maggie</option>
  </select>
</form>
```
```javascript
$(document).ready(MultiPass.init());
```

# Demo
Demo on [CodePen](http://codepen.io/philipbrown/pen/HEDgk).
