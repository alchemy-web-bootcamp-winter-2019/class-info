  fetch('https://swapi.co/api/people/1')
  .then((swData) => {
    // this only runs if there is no error getting user data
    return swData;
  })
  .then((swData) => {
    // this only runs if there is no error in all previous calls
    return swData.json();
  })
  .then((swDataJson) => {
    console.log(swDataJson.name);
  })
  .catch((error) => {
    // this only runs if there is an error
    console.log(error.message);
  })
  .finally(() => {
    console.log('This always runs');
  });
