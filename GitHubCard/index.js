import axios from "axios"
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const cardBody = document.querySelector(".cards");

function createCard(name) {
  axios
    .get(`https://api.github.com/users/PrinceIwejuo`)
    .then((incomData) => {
      const newData = incomData.data;
      const newCard = cardMaker({
        avatar_url: newData.avatar_url,
        name: newData.name,
        login: newData.login,
        location: newData.location,
        html_url: newData.html_url,
        followers: newData.followers,
        following: newData.following,
        bio: newData.bio,
      });
      cardBody.appendChild(newCard);
      console.log(newCard);
    })
    .catch(() => {

    });
}
// const info = axios.get("https://api.github.com/users/PrinceIwejuo")

// console.log(info)

// info.then(specificInfo => {
//   console.log(specificInfo)
// })

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

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
];

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

function cardMaker({
  avatar_url,
  name,
  login,
  location,
  html_url,
  followers,
  following,
  bio,
}) {
  const card = document.createElement("div");
  const image = document.createElement("img");
  const cardInfo = document.createElement("div");
  const cardName = document.createElement("h3");
  const cardUsername = document.createElement("p");
  const locat = document.createElement("p");
  const profile = document.createElement("p");
  const profLink = document.createElement("a");
  const cardFollowers = document.createElement("p");
  const cardFollowing = document.createElement("p");
  const cardBio = document.createElement("p");

  card.appendChild(image);
  card.appendChild(cardInfo);
  card.appendChild(cardName);
  card.appendChild(cardUsername);
  card.appendChild(locat);
  card.appendChild(profile);
  card.appendChild(cardFollowers);
  card.appendChild(cardFollowing);
  card.appendChild(cardBio);
  card.appendChild(profLink);

  card.classList.add("card");
  cardInfo.classList.add("card-info");
  cardName.classList.add("name");
  cardUsername.classList.add("username");

  image.src = avatar_url;
  cardName.textContent = name;
  cardUsername.textContent = login;
  locat.textContent = location;
  profLink.textContent = html_url;
  profLink.textContent = html_url;
  cardFollowers.textContent = `Followers: ${followers}`;
  cardFollowing.textContent = `Following: ${following}`;
  cardBio.textContent = `Bio: ${bio}`;

  return card;
}

followersArray.forEach((name) => {
  createCard(name);
});

// const entryPoint = document.querySelector('.card')
// function cardMaker(specificInfo) {
//   const card = document.createElement('div')
//   const cardImg = document.createElement('img-src')
//   const cardInfo = document.createElement('div')
//   const name = document.createElement('h3')
//   const username = document.createElement('p')
//   const cardLocation = document.createElement('p')
//   const profile = document.createElement('p')
//   const aTag = document.createElement('a')
//   const followers = document.createElement('p')
//   const following = document.createElement('p')
//   const bio = document.createElement('p')

//   card.classList.add('card')
//   cardInfo.classList.add('card-info')
//   name.classList.add('name')
//   username.classList.add('username')

//   card.appendChild(cardImg)
//   cardInfo.appendChild(name)
//   cardInfo.appendChild(username)
//   cardInfo.appendChild(cardLocation)
//   cardInfo.appendChild(profile)
//   profile.appendChild(aTag)
//   cardInfo.appendChild(followers)
//   cardInfo.appendChild(following)
//   cardInfo.appendChild(bio)

//   return card
// }

// console.log(info)

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
