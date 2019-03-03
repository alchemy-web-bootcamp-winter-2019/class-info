Three JavaScript Functional Patterns
===

### "Functional" Programming

```js
array.map(x => x * x);
```

* synchronous 
* happens `0` to `n` times

### Event Emitters

```js
button.addEventListener('click', event => {
    //...
});
```

* asynchronous (over time)
* happens `0` to `n` times over time

### Asynchronous "callbacks"

```js
fetch('https:/api.whatever.com/items')
    .then(response => {
        /*...*/
    });
```

* asynchronous 
* happens once and only once
* __Promises only apply to this category__

