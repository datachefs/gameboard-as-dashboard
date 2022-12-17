# Writing Easily Readable JavaScript

## Use for of Loops
for of loops are easier to read.  [Example](https://www.w3schools.com/js/js_loop_forof.asp):

```

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}
```

[Or](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of): "The following example adds a read class to paragraphs that are direct descendants of the <article> element by iterating over a NodeList DOM collection."

```
const articleParagraphs = document.querySelectorAll("article > p");
for (const paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}
```


for loops are faster, but for of loops are easier to read -- and with typical creative dataviz which don't have a lot of data, the difference is outweighed by ease of reading.  See [this test](https://levelup.gitconnected.com/which-is-faster-for-for-of-foreach-loops-in-javascript-18dbd9ffbca9) with 50,000 data points.

We can still tell folks, "worried about speed?  Try this trick" -- or mention it as you may see this version that's kinda geeky, this is easier to read


And as [this article](https://leanylabs.com/blog/js-forEach-map-reduce-vs-for-for_of/) notes,
> Unlike in AssemblyScript, micro-optimizations of the for loop don’t make sense for arrays in JavaScript. V8 already does a great job and probably even eliminates the boundary checks as well.

## Frameworks

If I decide to use a framework, Svelte and Sveltkit look really good
- An example Svelte app for [Tic Tac Toe](https://geoffrich.net/posts/tic-tac-toe/)

## Can Vanilla JS Beat Out Frameworks?

Maybe.

[Noam Rosenthal argues](https://www.smashingmagazine.com/2022/02/web-frameworks-guide-part2/) that instead of using Svelte & other frameworks, we should write using vanilla Javascript.  Interesting stuff on:

Forms and the FormData class
```

function setErrorMessage(section, message) {
  document.forms.contactForm.elements[section].elements.error.value = message;
  }
  function setShowErrors(show) {
  document.forms.contactForm.elements.showErrors.checked = show;
  }
```

Templates
```

The following will add a name to a list using a template:

<ul id="names">
  <template>
   <li><label class="name" /></li>
  </template>
</ul>
<script>
  function addName(name) {
    const list = document.querySelector('#names');
    const item = list.querySelector('template').content.cloneNode(true).firstElementChild;
    item.querySelector('label').innerText = name;
    list.appendChild(item);
  }
</script>

```

To see the ideas in motion: a simple [To Do app](https://github.com/noamr/todomvc-app-template)