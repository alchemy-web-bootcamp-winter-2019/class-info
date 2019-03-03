Class 06: Asynchronous JavaScript with Promises and `fetch`
===

Use the `fetch` browser command and JavaScript Promises

## Agenda

1. Questions and Review
1. Code Cooking
    1. Promises
    1. `fetch`
1. Live Demo Ghibli Films
    1. Applying `fetch`
    1. Review: multiple pages
1. Mob Build Photo Gallery
1. Solo Build Photo Gallery

## Lab

repo: `ghibli-or-queens`

## Key Concepts

* Asynchronous JavaScript with Promises
* `fetch`

### Promises

Promises extend the capabilities of callbacks by to better handle
sequential and parallel workflows. Instead of passing a callback
function, the promise is an object that offers a `.then` method
for registering the callback.

* `.then` method calls can be chained for sequential workflows.
* `.catch` can be used to register a callback for errors

The `fetch` command offers a promise-based interface. We use a stepped
sequence:

1. Initiate fetch
1. First `then` will be called when complete, use the build-it `response.json()` method to extract the data
1. The actual data from the json will be passed to the second `then`
1. Any error that happen during the process will surface in the `catch`


```js

const URL = 'https://ghibliapi.herokuapp.com/films';

fetch(URL)
    .then(response => response.json())
    .then(films => {
        loadFilms(films);
    })
    .catch(err => {
        console.error('fetch error:', err);
    });

```
