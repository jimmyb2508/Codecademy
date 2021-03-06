// Create the School Class

class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(NumberOfStudents) {
    if (typeof NumberOfStudents === 'String') {
      this._numberOfStudents = numberOfStudents;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }

  quickFacts() {
    console.log(`${this._name} educates ${this._level} students at the ${this._level} school level.`);
  }

  pickSubstituteTeacher(substituteTeachers) {
    const randomNumber = Math.floor(substituteTeachers.length * Math.random());
    return(substituteTeachers[randomNumber]);
  }
}

// Create Primary School Class

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy, averageSATSScore) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
    this._averageSATSScore = averageSATSScore;
    }

    get pickupPolicy() {
      return this._pickupPolicy;
  }

  get averageSATSScore() {
    return this._averageSATSScore;
  }
}

//Create Middle School Class

class MiddleSchool extends School {
  constructor(name, numberOfStudents, pickupPolicy, averageExamScore) {
    super(name, 'middle', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
    this._averageExamScore = averageExamScore;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }

  get averageExamScore() {
    return this._averageExamScore;
  }
}

// Create High School Class

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams, avgGCSEResults) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
    this._avgGCSEResults = avgGCSEResults;
  }

  get sportsTeams() {
    console.log(this._sportsTeams);
  }

  get avgGCSEResults() {
    console.log(this._avgGCSEResults);
  }
}


// Create Instance of Primary School

const lorraineHansbury = new PrimarySchool ('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.', 86);

lorraineHansbury.quickFacts();

console.log(lorraineHansbury.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

console.log(lorraineHansbury);

console.log(lorraineHansbury.averageSATSScore);


// Create Instance of Middle School

const williamHulme = new MiddleSchool ('William Hulme Grammar School', 1000, 'Students must be picked up by a parent, guardian, or a family member over the age of 18.')

console.log(williamHulme);


// Create Instance of High School

const alSmith = new HighSchool ('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'], 'A');

console.log(alSmith.avgGCSEResults);

console.log(alSmith.sportsTeams);

// Create a class called School Catalog that holds a collection of schools

class SchoolCatalog {
  constructor(schoolList) {
    this._catalogue = [schoolList];
  }

  get catalogue() {
    return this.catalogue;
  }

  set schoolList(newSchoolList) {
    this._catalogue.push(newSchoolList);
  }
}

const skoolList = new SchoolCatalog();

skoolList.schoolList = lorraineHansbury;
skoolList.schoolList = williamHulme;
skoolList.schoolList = alSmith;


console.log(skoolList);