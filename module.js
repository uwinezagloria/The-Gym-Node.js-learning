const xyz=require('./people')
console.log(xyz)
console.log(xyz.people)
console.log(xyz.ages)
//instead odf using object xyz we can make destructuring
const {people,ages}=require('./people')
console.log(people)
console.log(ages)
// builting modules
const os=require('.os')
console.log(os.dirname())