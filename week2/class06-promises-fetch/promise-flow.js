  fetch('https://swapi.co/api/people/1')
  .then((userData) => {
    // this only runs if there is no error getting user data
    return userData.name;
  })
  .then((userName) => {
    // this only runs if there is no error in all previous calls
    console.log(userName);
  })
  .catch((error) => {
    // this only runs if there is an error
    console.log(error.message);
  })
  .finally(() => {
    console.log('This always runs');
  });
