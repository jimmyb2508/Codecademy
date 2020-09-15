class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  
  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }
  
  set isCheckedOut(newisCheckedOut) {
    this._isCheckedOut = newisCheckedOut;
  }
  
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }  
  
  getAverageRating() {
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    
    const lengthOfArray = this._ratings.length;
    
    let average = ratingsSum/lengthOfArray;
    
    this._ratings = average;
  }
  
  addRating(ratings) {
    if(ratings < 1 || ratings > 5) {
      console.log('Ratings must be between 1 & 5');
    }else{
      this._ratings.push(ratings);
    }
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title)
    this._author = author;
    this._pages = pages;
  }
  
  get author() {
    return this._author;
  }
  
  get pages() {
    return this._pages;
  }
}

// Create Movie Child Class

class Movie extends Media {
  constructor(director, title, runTime, movieCast) {
    super(title)
    this._director = director;
    this._runTime = runTime;
    this._movieCast = movieCast;
  }
  
  get director() {
    return this._director;
  }
  
  get runTime() {
    return this._runTime;
  }
  
  get movieCast() {
    return this._movieCast;
  }
}

// Create CD Child Class

class CD extends Media {
  constructor(artist, title, songs) {
    super(title)
    this._artist = artist;
    this._songs = [];
  }
  
  get artist() {
    return this._artist;
  }
  
  get songs() {
    return this._songs;
  }
  
  addSong(songs) {
    this._songs.push(songs);
  }
  
  shuffle(songs) {
    // console.log(this.songs);
    const shuffleArray = this.songs.length;
    for (var i = 0; i < shuffleArray; i++) {
      const randomNumber = Math.floor(Math.random() * (i + 1));
      // console.log(randomNumber);
      const shuffleNum = this.songs[i];
      this.songs[i] = this.songs[randomNumber];
      // console.log(this.songs[i]);
    }
    return songs;
  }
}

// Create Catalogue Class

class Catalogue {
  constructor(mediaCatalogue) {
    this._catalogue = [mediaCatalogue];
  }
  
  get catalogue() {
    return this._catalogue;
  }
  
  set mediaCatalogue(newMediaCatalogue) {
    this._catalogue.push(newMediaCatalogue);
  }
}


// Book Instance

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();

historyOfEverything.addRating(4);

historyOfEverything.addRating(5);

historyOfEverything.addRating(5);

historyOfEverything.getAverageRating();

// console.log(historyOfEverything);

// Film Instance

const speed = new Movie('Jan de Bont', 'Speed', 116, 'Keanu Reaves, Sandra Bullock, Dennis Hopper');

speed.toggleCheckOutStatus();

speed.addRating(1);

speed.addRating(1);

speed.addRating(5);

speed.getAverageRating();

// console.log(speed);

// CD Instance 

const underworld = new CD('Underworld', '1992 - 2012');

// console.log(underworld);

underworld.addSong('Born Sloppy');

underworld.addSong('Jumbo');

underworld.addSong('8 Ball');

underworld.addSong('Scribble');

underworld.addSong('Two Months Off');

underworld.addSong('To Heal');

underworld.addSong('Crocodile');

underworld.addSong('The Hump');

underworld.addSong('Oich Oich');

underworld.addSong('Second Hand');

underworld.addSong('Parc');

underworld.shuffle();

// console.log(underworld.songs);

// Catalogue Instance

const littlewoods = new Catalogue();

littlewoods.mediaCatalogue = historyOfEverything;
littlewoods.mediaCatalogue = speed;
littlewoods.mediaCatalogue = underworld;

console.log(littlewoods);