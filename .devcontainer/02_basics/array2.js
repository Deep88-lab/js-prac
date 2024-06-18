const fevAnime=["JJK", "Demon Slayer","Dragon ball"]
const fevMovie=["Lakshya", "War","Passenger"]

// fevAnime.push(fevMovie)
// console.log(fevAnime);
// console.log(fevAnime[3][2])

// fevAnime.concat(fevMovie)
// console.log(fevAnime);

// let allFav=fevAnime.concat(fevMovie);
// console.log(allFav);

const allFav=[...fevAnime, ...fevMovie]
// console.log(allFav);

const anotherArray=[1,2,3,4,[5,6,7,8],7,[8,9,10],19,[11,12,14]]

const flatExample=anotherArray.flat(Infinity)
// console.log(flatExample);

console.log(Array.isArray("Deep"));
console.log(Array.from("Deep"));
console.log(Array.from({name:"Deep"})); //imp

let marks1=100
let marks2=300
let marks3=500

console.log(Array.of(marks1,marks2,marks3));

