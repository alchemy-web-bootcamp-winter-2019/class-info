//URLSEARCH PARAMS

var paramsString = "http://idontexist.com/index.html/q=URLUtils.searchParams&topic=api";

// have everyone build the above without cooking. Now you'll use it.


//Iterate the search parameters.
for (let p of searchParams) {
  console.log(p);
}

searchParams.has("topic") === true; 

searchParams.get("topic") === "api"; 

searchParams.getAll("topic"); 

searchParams.get("foo") === null; 

searchParams.append("topic", "webdev");

searchParams.toString(); 

searchParams.set("topic", "More webdev");

searchParams.toString(); 

searchParams.delete("topic");

searchParams.toString(); 

// CREATE URL OBJECT
// build the search string first
const url = new URL('https://api.themoviedb.org/3/search/movie');

// now code cook
url.searchParams.set('query', 'star wars');

url.toString()

url.searchParams.set('query', 'harry potter');

url.toString()
