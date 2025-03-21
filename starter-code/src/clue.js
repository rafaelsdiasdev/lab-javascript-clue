const charactersArray = [
  {
    name: 'mrGreen',
    first_name: 'Jacob',
    last_name: 'Green',
    occupation: 'Entrepreneur',
    age: 45,
    description: 'He has a lot of connections',
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    color: 'green'
  },
  {
    name: 'drOrchid',
    first_name: 'Doctor',
    last_name: 'Orchid',
    occupation: 'Scientist',
    age: 26,
    description: 'PhD in plant toxicology.Adopted daughter of Mr.Boddy',
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'white'
  },
  {
    name: 'profPlum',
    first_name: 'Victor',
    last_name: 'Plum',
    occupation: 'Designer',
    age: 22,
    description: 'Billionaire video game designer',
    image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
    color: 'purple'
  },
  {
    name: 'missScarlet',
    first_name: 'Kasandra',
    last_name: 'Scarlet',
    occupation: 'Actor',
    age: 31,
    description: 'She is an A - list movie star with a dark past',
    image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'red'
  },
  {
    name: 'mrsPeacock',
    first_name: 'Eleanor',
    last_name: 'Peacock',
    occupation: 'Socialité',
    age: 36,
    description: 'She is from a wealthy family and uses her status and money to earn popularity',
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    color: 'blue'
  },
  {
    name: 'mrMustard',
    first_name: 'Jack',
    last_name: 'Mustard',
    occupation: 'Retired Football player',
    age: 62,
    description: 'He is a former football player who tries to get by on his former glory',
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
    color: 'yellow'
  }
]


const weaponsArray = [
  {
    name: 'rope',
    weight: 10
  },
  {
    name: 'knife',
    weight: 8
  },
  {
    name: 'candlestick',
    weight: 2
  },
  {
    name: 'dumbbell',
    weight: 30
  },
  {
    name: 'poison',
    weight: 2
  },
  {
    name: 'axe',
    weight: 15
  },
  {
    name: 'bat',
    weight: 13
  },
  {
    name: 'trophy',
    weight: 25
  },
  {
    name: 'pistol',
    weight: 20
  }
]


const roomsArray = [
  {
    name: 'Dining Room'
  },
  {
    name: 'Conservatory'
  },
  {
    name: 'Kitchen'
  },
  {
    name: 'Study'
  },
  {
    name: 'Library'
  },
  {
    name: 'Billiard Room'
  },
  {
    name: 'Lounge'
  },
  {
    name: 'Ballroom'
  },
  {
    name: 'Hall'
  },
  {
    name: 'Spa'
  },
  {
    name: 'Living Room'
  },
  {
    name: 'Observatory'
  },
  {
    name: 'Theater'
  },
  {
    name: 'Guest House'
  },
  {
    name: 'Patio'
  }
]

const cards = [charactersArray, weaponsArray, roomsArray]

const randomSelector = arr => {
  if(arr.length === 0){
    return
  } 
  const selected = Math.floor(Math.random() * arr.length)
  
  return arr[selected] 
}

const pickMystery = () => {
  const mystery = {
    suspect: randomSelector(charactersArray),
    weapon: randomSelector(weaponsArray),
    room: randomSelector(roomsArray)
  }
  return mystery 
}

const revealMystery = obj => `${obj.suspect.first_name} ${obj.suspect.last_name} killed Mr. Boddy using the ${obj.weapon.name} in the ${obj.room.name}!!!!`


console.log(revealMystery(pickMystery()))

