////////////////Datatypes////////////////////////////
//1. For the light switch I would use a boolean since there are only two options: Light is on; light is off. I cannot make this else statement work-I've never been able to for that matter. I obvs need help.
// let up = 1;
// let down =! 1;
// if(lightSwitch = 1){
//  console.log("Light is on")}
// else {
//   console.log("the light is off")};
// lightSwitch = 6;

//2.for email address, I would put it in a string.once again this doesn't work and I don't know why. I'm getting error :if email =! 'null' {
//                ^^^^^
//SyntaxError: Unexpected identifier. Isn't it identified in the first line. what am I doing wrong?
// let email = "controlaltrapidfire@gmail.com";
//   if email =! 'null' {
//     console.log(email)
//   };

//3.for this spaceship, I would use and array to hold the info. This one worked! YeeeHEeee!
// const spaceship = ["hull", "laser blasters", "tractor beam", "warp drive"];
// console.log(spaceship);

//4.for a simple list of students in the class, I'd use an array.
// const students = ["christoball", "Tesstament", "Scott-tot-tot tot", "Jake the Rake", "Neo-Classical", "Maximum", "Lord Have Marci", "Lillian of the Valley", "Khoa Constrictor"];
// console.log(students);

//5.now that we are adding other items that rep our classmates, I would move to an object, with arrays inside of it.

// let students = [
//   {name: "christoball", location: "Austin"},
//   {name: "Tesstament", location: "Austin"},
//   {name: "Scott-tot-tot tot", location: "Austin"},
//   {name: "Jake the Rake", location: "Austin"},
//   {name: "Neo-Classical", location: "College Station"},
//   {name: "Maximum", location: "Cedar Park"},
//   {name: "Lord Have Marci", location: "Austin"},
//   {name: "Lillian of the Valley", location: "Heaven"},
//   {name: "Khoa Constrictor", location: "H-Tawn"}
// ]
// console.log(students);

//6. I would contiue with this object, adding an array in brackets
// let students = [
//   {name: "christoball", location: "Austin", favTvShows: ["forensic files", "big mouth"]},
//   {name: "Tesstament", location: "Austin", favTvShows: ["bojack horseman", "ncis"]},
//   {name: "Scott-tot-tot tot", location: "Austin", favTvShows: ["scorpion", "the mentalist"]},
//   {name: "Jake the Rake", location: "Austin", favTvShows: ["family fued",  "the munsters"]},
//   {name: "Neo-Classical", location: "College Station", favTvShows: ["NHL", "downton alley"]},
//   {name: "Maximum", location: "Cedar Park", favTvShows: ["hannible", "lt. joe kenda homicide hunter"]},
//   {name: "Lord Have Marci", location: "Austin", favTvShows: ["adventure time", "SNL"]},
//   {name: "Lillian of the Valley", location: "Heaven", favTvShows:["property brothers", "breaking bad"]},
//   {name: "Khoa Constrictor", location: "H-Tawn", favTvShows: ["game of thrones", "silicon valley"]}
// ]
// console.log(students);

////////////////Take it Easy/////////////////////////

//1. let rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

//2.console.log(rainbow[4]);

//3.
// let christopher = {
//       faveFood: "Pizza!",
//       aHobby: "Making beats",
//       currentTown: "ATX-78752",
//       faveDataType: "object, duh."
// };
//4.
    // console.log(christopher.aHobby);

////////////////Crazy Object!///////////////////////

// const crazyObject = {
//   taco: [{meat: 'steak',
//          cheese: ['panela', 'queso', 'chihuahua']},
//          {meat: 'chicken',
//           salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
//         ],
//   larry: {
//     nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
//     quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
//     characters: [{
//       name: "Jeff",
//       occupation: "manager"
//     },
//     {
//       name: "funkhauser",
//       occupation: "tv dude"
//     },
//     {
//       name: "susie",
//       occupation: "jeffs wife",
//       favourtieHobby: "Swearing at Larry and Jeff"
//     },
//     ]
//   }
// }
//1.
//console.log(crazyObject.taco[1].salsa[5]);
//2.
//console.log(crazyObject.larry.quotes[0]);
//3.
//console.log(crazyObject.larry.characters[2].favourtieHobby);
//4.
//console.log(crazyObject.larry.nicknames[1]);
//5.
//console.log(crazyObject.larry.characters[1].name);

////////////////Object-ception/////////////////////
// const inception = {
//    reality: {
//        dreamLayer1: {
//            dreamLayer2: {
//                dreamLayer3: {
//                    dreamLayer4: {
//                        dreamLayer5: {
//                            dreamLayer6: {
//                                limbo: "Joseph Gordon Levitt"
//                           }
//                        }
//                    }
//                }
//            }
//        }
//    }
// }



const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];
const bondTitles = [];
for(var f = 0; f < bondFilms.length; f++) {
  bondTitles.push(bondFilms[f]["title"]);
}
console.log(bondTitles);
