throw new Error('Hi! I bombed your code'); 

// have everyone copy and paste below into their chrome js console. Run. See result. Then:
// Replace topmost comment with a thrown error (line 1). See result.
// Replace next comment, see result, etc. Stop before catch on 23.

fetch('https://swapi.co/api/people/1')
  .then((swData) => {
    // this only runs if there is no error getting user data
    console.log('Made it back from the web!');
    return swData;
  })
  .then((swData) => {
    // this only runs if there is no error in all previous calls
    console.log('Turn that stuff into json');
    return swData.json();
  })
  .then((swDataJson) => {
    // this again only runs if there is no error in all previous calls
    console.log('Print out the name');
    console.log(swDataJson.name);
  })
  .catch((error) => {
    // this only runs if there is an error
    console.log(error.message);
  })
  .finally(() => {
    console.log('This always runs');
  });
