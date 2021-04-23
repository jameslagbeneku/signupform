class User {
    constructor(email, name, age, gender){
      this.email = email;
      this.name = name;
      this.age = age
      this.gender = gender  

      if (age < 28) {
        console.log(`${name} is too young`)
        } else {
        console.log(`${name} is qualified`)
        }

        return this;
    }

    
}

var userOne = new User('honacj@yahoo.com', 'James Lagbeneku', 27, 'male');
var userTwo = new User('vbray@yahoo.com', 'Veronica Bray', 29, 'female');
var userThree = new User ('sophy@gmail.com', 'Sophia Lagbeneku', 25, 'female')

console.log(userOne, userTwo, userThree)


