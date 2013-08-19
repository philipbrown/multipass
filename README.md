# MultiPass

A tiny module for making searching through multiselect dropdown boxes really easy.

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
var json = [{"value":"Bruce Willis"},
            {"value":"Milla Jovovich"},
            {"value":"Gary Oldman"},
            {"value":"Ian Holm"},
            {"value":"Chris Tucker"},
            {"value":"Charlie Creed-Miles"},
            {"value":"Brion James"},
            {"value":"Tricky"},
            {"value":"Clifton Lloyd Bryan"},
            {"value":"Tom Lister, Jr."},
            {"value":"Christopher Fairbank"},
            {"value":"Lee Evans"},
            {"value":"John Bluthal"},
            {"value":"Luke Perry"},
            {"value":"John Bennett"},
            {"value":"Kim Chan"},
            {"value":"John Neville"},
            {"value":"Al Matthews"},
            {"value":"Maïwenn Le Besco"}];

$(document).ready(MultiPass.init(json));
```

# Demo
Demo on [CodePen](http://codepen.io/philipbrown/pen/HEDgk).
