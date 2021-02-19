import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/EsdrasBrutus
*/


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
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
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

function cardMaker({ login, name, avatar_url, html_url, location, followers, following, Bio }){
  

  const card = document.createElement('div')
  const userImg = document.createElement('img') 
  const cardInfo = document.createElement('div') 
  const cardName = document.createElement('h3')
  const userName = document.createElement('p')  
  const local = document.createElement('p')
  const profile = document.createElement('p')
  const link = document.createElement('a')
  const follower = document.createElement('p')
  const followin = document.createElement('p')
  const bio = document.createElement('p')
  
  card.appendChild(userImg)
  card.appendChild(cardInfo)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(cardName)
  cardInfo.appendChild(local)
  cardInfo.appendChild(profile)
  profile.appendChild(link)
  cardInfo.appendChild(follower)
  cardInfo.appendChild(followin)
  cardInfo.appendChild(bio)

  card.classList.add('card')
  cardInfo.classList.add('card-info')
  userName.classList.add('name')
  cardName.classList.add('username')
  
  link.textContent =  html_url
  link.setAttribute('href', html_url)
  userImg.setAttribute('src', avatar_url)
  cardName.textContent = login 
  userName.textContent = name
  local.textContent = location
  follower.textContent =`Followers: ${followers}` 
  followin.textContent = `Following: ${following}` 
  bio.textContent = Bio
  profile.textContent = 'Profile:'


return card

}

const URL = 'https://api.github.com/users/'
const cardContainer = document.querySelector('.cards')


axios.get(URL + 'EsdrasBrutus')
.then(({ data }) => {
 const login = data.login
 const name = data.name
 const avatar_url = data.avatar_url
 const html_url = data.html_url
 const location = data.location
 const followers = data.followers
 const following = data.following
 const Bio = data.bio

 const card = cardMaker({login, name, avatar_url, html_url, location, followers, following, Bio})
 cardContainer.appendChild(card)})

 followersArray.forEach((name) =>{
  axios.get(URL + name)
  .then(({ data }) => {
   const login = data.login
   const name = data.name
   const avatar_url = data.avatar_url
   const html_url = data.html_url
   const location = data.location
   const followers = data.followers
   const following = data.following
   const Bio = data.bio

   const card = cardMaker({login, name, avatar_url, html_url, location, followers, following, Bio})
   cardContainer.appendChild(card)})
 })


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
