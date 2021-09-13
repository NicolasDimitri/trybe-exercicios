
const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

person.nationality = 'Brazilian'

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};


console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));
