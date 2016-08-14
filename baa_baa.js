var woolOwners = [
  { "master": 1 },
  { "dame": 1 },
  { "little boy": 1,
    "location": "down the lane" }
];


var boy = Object.keys(woolOwners[2])[0];
var littleBoy = woolOwners[2];

function haveYouAnyWool() {
    totalBags = 0;
    for (var i = 0; i < woolOwners.length; i++) {
      var totalBags = totalBags + i;
    }
    return totalBags;
};

var bags = haveYouAnyWool();

function baabaaBlackSheep() {
    console.log("BaaBaa BlackSheep have you any wool?");
    if (bags > 0) {
        console.log("yes sir, yes sir " + bags + " bags full");
  }
}

function oneForMy() {
    for (var i = 0; i < 2; i++) {
        person = Object.keys(woolOwners[i]).toString();
        console.log("one for my " + person);
    }
}

baabaaBlackSheep();
oneForMy();

var whereHeLives = littleBoy.location;
console.log("one for the " + boy + " that lives " + whereHeLives);
