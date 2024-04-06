const loadUser = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((data) => displayUsers(data));
};

const displayUsers = (user) => {
    //   Name
    const name =
    user.results[0].name.title +
    " " +
    user.results[0].name.first +
    " " +
    user.results[0].name.last;
  document.getElementById("name").innerHTML = name;

  //   location
  document.getElementById("street").innerHTML =
    user.results[0].location.street.name;
  document.getElementById("city").innerHTML = user.results[0].location.city;
  document.getElementById("country").innerHTML =
    user.results[0].location.country;

    // Gender
  document.getElementById("gender").innerHTML =
  user.results[0].gender;
 

    //   Image
    const imageDiv = document.getElementById('image');
    const imageHref = user.results[0].picture.large;
    imageDiv.innerHTML = `
    <img class='img' src="${imageHref}" alt="Image">
    `;

    console.log(user.results[0].picture);


};

loadUser();
