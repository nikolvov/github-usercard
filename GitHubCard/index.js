import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const cards = document.querySelector(".cards");

axios.get('https://api.github.com/users/nikolvov')
  .then(response => {
    // console.log(response);
    //console.log(response.data.message)
    // making the data a variable
    const data = response.data;
    // creating the component and making a variable with component function
    const component = FillCard(data);
    // appending component to the parent
    cards.append(component);
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

// xxx can be anything just used as placement to hold data 

const followersArray = [
    "tetondan",
    "dustinmyers",
    "justsml",
    "luishrd",
    "bigknell",
];

// axios.get('https://api.github.com/users/nikolvov').then( response => {
//   response.data.map(xxx => {
//     followersArray.push(xxx.login);
//   })
// })

// function passGitInfo(arr){
//   arr.map(xxx => {
//     axios.get('https://api.github.com/users/' + xxx).then(response => {
//       const newGit = FillCard(response.data);
//       cards.append(newGit);
//     })
//   })
// }

// const githubFollowersProfile = followersArray.map(xxx => {
//   return `https://api.github.com/users/${xxx}`;
// })

// githubFollowersProfile.forEach(xxx => {
//   axios.get(xxx)
//   .then(response => {
//     const data = response.data;
//     cards.append(FillCard(data));
//   })
//   .catch(error => {
//     console.log(error);
//   });
// });


//stretch + fancy way
axios.get('https://api.github.com/users/nikolvov/followers')
.then((response) => {
  console.log(response);
  const followers = response.data;
  followers.forEach(follower => {
    const component = FillCard(follower)
    cards.append(component)
  })
});


//hard code
followersArray.forEach((follower) => {
  axios.get(`https://api.github.com/users/${follower}`).then((response) => {
    const data = response.data;
    //make component
    const arrayCard = FillCard(data);
    cards.appendChild(arrayCard);
  });
});



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function FillCard(obj){
  /// instantiating the elements
  const divCard = document.createElement('div');
  const gitImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const proURL = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
  // setting class names, attributes and text
  divCard.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  name.textContent = obj.name;
  gitImg.src = obj.avatar_url;
  username.textContent = obj.login;
  location.textContent = `Location: ${obj.location}`;
  profile.textContent = 'Profile:'
  proURL.setAttribute("href", obj.html_url);
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Following: ${obj.following}`;
  bio.textContent = `Biography: ${obj.bio}`;
  // creating the hierarchy
  divCard.appendChild(gitImg)
  divCard.appendChild(cardInfo)
  cardInfo.appendChild(name)
  cardInfo.appendChild(username)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  profile.appendChild(proURL)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)

  // never forget to return!
  // console.log(divCard)
  return divCard
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
