//1. For the light switch I would use a boolean since there are only two options: Light is on; light is off. I cannot make this else statement work-I've never been able to for that matter. I obvs need help.
let up = 1;
let down =! 1;
if(lightSwitch = 1){
 console.log("Light is on")}
else {
  console.log("the light is off")};
lightSwitch = 6;

//2.for email address, I would put it in a string.once again this doesn't work and I don't know why. I'm getting error :if email =! 'null' {
//                ^^^^^
//SyntaxError: Unexpected identifier. Isn't it identified in the first line. what am I doing wrong?
let email = "controlaltrapidfire@gmail.com";
  if email =! 'null' {
    console.log(email)
  };

//3.for this spaceship, I would use and array to hold the info. This one worked! YeeeHEeee!
const spaceship = ["hull", "laser blasters", "tractor beam", "warp drive"];
console.log(spaceship);

//4.for a simple list of students in the class, I'd use an array.
const students = ["christoball", "Tesstament", "Scott-tot-tot tot", "Jake the Rake", "Neo-Classical", "Maximum", "Lord Have Marci", "Lillian of the Valley", "Khoa Constrictor"];
console.log(students);

//5.now that we are adding other items that rep our classmates, I would move to an object, with arrays inside of it.

let students = [
  {name: "christoball", location: "Austin"},
  {name: "Tesstament", location: "Austin"},
  {name: "Scott-tot-tot tot", location: "Austin"},
  {name: "Jake the Rake", location: "Austin"},
  {name: "Neo-Classical", location: "College Station"},
  {name: "Maximum", location: "Cedar Park"},
  {name: "Lord Have Marci", location: "Austin"},
  {name: "Lillian of the Valley", location: "Heaven"},
  {name: "Khoa Constrictor", location: "H-Tawn"}
]
console.log(students);

//6. I would contiue with this object, adding an array in brackets
let students = [
  {name: "christoball", location: "Austin", favTvShows: ["forensic files", "big mouth"]},
  {name: "Tesstament", location: "Austin", favTvShows: ["bojack horseman", "ncis"]},
  {name: "Scott-tot-tot tot", location: "Austin", favTvShows: ["scorpion", "the mentalist"]},
  {name: "Jake the Rake", location: "Austin", favTvShows: ["family fued",  "the munsters"]},
  {name: "Neo-Classical", location: "College Station", favTvShows: ["NHL", "downton alley"]},
  {name: "Maximum", location: "Cedar Park", favTvShows: ["hannible", "lt. joe kenda homicide hunter"]},
  {name: "Lord Have Marci", location: "Austin", favTvShows: ["adventure time", "SNL"]},
  {name: "Lillian of the Valley", location: "Heaven", favTvShows:["property brothers", "breaking bad"]},
  {name: "Khoa Constrictor", location: "H-Tawn", favTvShows: ["game of thrones", "silicon valley"]}
]
console.log(students);

////////////////Take it Easy/////////////////////////

//1.
let rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

//2.
console.log(rainbow[4]);

//3.
let christopher = {
      faveFood: "Pizza!",
      aHobby: "Making beats",
      currentTown: "ATX-78752",
      faveDataType: "object, duh."
};
//4.
console.log(christopher.aHobby);
