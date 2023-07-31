// level 1-------------------------------------------------------------

const rockMap1Level1 = [
  new Rock("stone",30, { xPos: 50, yPos: 50 }),
  new Rock("stone", 30, { xPos: 60, yPos: 70 }),
  new Rock("stone",30, { xPos: 40, yPos: 20 }),
  new Rock("stone",30, { xPos: 30, yPos: 30 }),
  new Rock("stone", 30, { xPos: 80, yPos: 20 }),
  new Rock("stone",30, { xPos: 20, yPos: 70 }),
  new Rock("bag", 20, { xPos: 70, yPos: 50 }),
  new Rock("gold", 90, { xPos: 30, yPos: 55 }),
  new Rock("gold", 90, { xPos: 5, yPos: 70 }),
  new Rock("gold", 70, { xPos: 70, yPos: 70 }),
  new Rock("gold",30, { xPos: 10, yPos: 29 }),
  new Rock("gold",30, { xPos: 12, yPos: 10 }),
];

const rockMap2Level1 = [
  new Rock("stone",60, { xPos: 40, yPos: 50 }),
  new Rock("stone", 30, { xPos: 60, yPos: 60 }),
  new Rock("stone",30, { xPos: 40, yPos: 20 }),
  // new Rock("stone",60, { xPos: 20, yPos: 30 }),
  new Rock("stone", 30, { xPos: 80, yPos: 20 }),
  new Rock("stone",30, { xPos: 20, yPos: 70 }),
  new Rock("bag", 20, { xPos: 80, yPos: 50 }),
  new Rock("gold", 90, { xPos: 30, yPos: 55 }),
  new Rock("gold", 90, { xPos: 5, yPos: 70 }),
  new Rock("gold", 70, { xPos: 85, yPos: 70 }),
  new Rock("gold",30, { xPos: 75, yPos: 29 }),
  new Rock("gold",30, { xPos: 12, yPos: 10 }),
];

const rockMap3Level1 = [
  new Rock("stone",60, { xPos: 40, yPos: 50 }),
  new Rock("stone", 30, { xPos: 60, yPos: 60 }),
  new Rock("stone",60, { xPos: 40, yPos: 20 }),
  new Rock("stone",60, { xPos: 20, yPos: 30 }),
  new Rock("stone", 90, { xPos: 80, yPos: 20 }),
  new Rock("stone",30, { xPos: 20, yPos: 70 }),
  new Rock("bag", 20, { xPos: 80, yPos: 50 }),
  new Rock("gold", 90, { xPos: 45, yPos: 65 }),
  new Rock("gold", 90, { xPos: 5, yPos: 50 }),
  new Rock("gold", 70, { xPos: 85, yPos: 70 }),
  new Rock("gold",30, { xPos: 55, yPos: 29 }),
  new Rock("gold",30, { xPos: 12, yPos: 10 }),
];

//level2-----------------------------------------------------------------

const rockMap1Level2 = [
  new Rock("stone",30, { xPos: 40, yPos: 50 }),
  new Rock("stone", 30, { xPos: 60, yPos: 60 }),
  new Rock("stone",60, { xPos: 40, yPos: 20 }),
  new Rock("stone",60, { xPos: 10, yPos: 30 }),
  new Rock("stone",90, { xPos: 65, yPos: 10 }),
  // new Rock("stone", 90, { xPos: 80, yPos: 20 }),
  // new Rock("stone",50, { xPos: 20, yPos: 70 }),
  new Rock("stone",60, { xPos: 30, yPos: 70 }),
  new Rock("stone",30, { xPos: 60, yPos: 70 }),
  new Rock("bag", 20, { xPos: 60, yPos: 50 }),
  new Rock("gold", 90, { xPos: 75, yPos: 65 }),
  new Rock("gold", 90, { xPos: 5, yPos: 50 }),
  new Rock("gold", 70, { xPos: 85, yPos: 40 }),
  new Rock("gold",30, { xPos: 55, yPos: 29 }),
  new Rock("gold",30, { xPos: 12, yPos: 10 }),
  new Rock("gold",60, { xPos: 32, yPos: 40 }),
];
const rockMap2Level2 = [
  new Rock("stone",60, { xPos: 40, yPos: 50 }),
  new Rock("stone", 30, { xPos: 60, yPos: 60 }),
  new Rock("stone",60, { xPos: 40, yPos: 20 }),
  new Rock("stone",60, { xPos: 10, yPos: 30 }),
  new Rock("stone",30, { xPos: 25, yPos: 10 }),
  new Rock("stone", 90, { xPos: 80, yPos: 20 }),
  new Rock("stone",60, { xPos: 20, yPos: 70 }),
  new Rock("stone",30, { xPos: 30, yPos: 70 }),
  new Rock("stone",50, { xPos: 60, yPos: 70 }),
  new Rock("bag", 20, { xPos: 50, yPos: 50 }),
  new Rock("gold", 90, { xPos: 75, yPos: 65 }),
  new Rock("gold", 90, { xPos: 5, yPos: 50 }),
  new Rock("gold", 70, { xPos: 85, yPos: 40 }),
  new Rock("gold",30, { xPos: 65, yPos: 29 }),
  new Rock("gold",30, { xPos: 12, yPos: 10 }),
  new Rock("gold",60, { xPos: 32, yPos: 40 }),
];

const rockMap3Level2 = [
  new Rock("stone",30, { xPos: 40, yPos: 50 }),
  new Rock("stone", 30, { xPos: 60, yPos: 60 }),
  new Rock("stone",60, { xPos: 40, yPos: 20 }),
  new Rock("stone",60, { xPos: 10, yPos: 30 }),
  new Rock("stone",90, { xPos: 25, yPos: 10 }),
  new Rock("stone", 90, { xPos: 80, yPos: 20 }),
  new Rock("stone",60, { xPos: 20, yPos: 70 }),
  // new Rock("stone",70, { xPos: 30, yPos: 70 }),
  new Rock("stone",60, { xPos: 60, yPos: 70 }),
  new Rock("bag",  20, { xPos: 50, yPos: 50 }),
  new Rock("gold", 90, { xPos: 45, yPos: 65 }),
  new Rock("gold", 90, { xPos: 15, yPos: 47 }),
  new Rock("gold", 70, { xPos: 85, yPos: 60 }),
  new Rock("gold",30, { xPos: 65, yPos: 29 }),
  new Rock("gold",30, { xPos: 12, yPos: 10 }),
  new Rock("gold",60, { xPos: 32, yPos: 40 }),
  new Rock("gold",60, { xPos: 22, yPos: 60 }),
];

//level 3 -----------------------------------------------------------------------

const rockMap1Level3 = [
  new Rock("stone",60, { xPos: 40, yPos: 50 }),
  new Rock("stone", 30, { xPos: 60, yPos: 60 }),
  new Rock("stone",60, { xPos: 40, yPos: 20 }),
  new Rock("stone",60, { xPos: 10, yPos: 30 }),
  new Rock("stone",90, { xPos: 25, yPos: 10 }),
  // new Rock("stone", 90, { xPos: 80, yPos: 20 }),
  new Rock("stone", 90, { xPos: 60, yPos: 10 }),
  new Rock("stone", 90, { xPos: 50, yPos: 20 }),
  new Rock("stone",30, { xPos: 20, yPos: 70 }),
  new Rock("stone",60, { xPos: 30, yPos: 70 }),
  new Rock("stone",30, { xPos: 60, yPos: 70 }),
  new Rock("bag",  20, { xPos: 50, yPos: 50 }),
  new Rock("gold", 90, { xPos: 45, yPos: 65 }),
  new Rock("gold", 90, { xPos: 15, yPos: 47 }),
  new Rock("gold", 70, { xPos: 85, yPos: 60 }),
  new Rock("gold",30, { xPos: 65, yPos: 29 }),
  new Rock("gold",30, { xPos: 12, yPos: 10 }),
  new Rock("gold",60, { xPos: 32, yPos: 40 }),
  new Rock("gold",60, { xPos: 72, yPos: 40 }),
  new Rock("gold",60, { xPos: 32, yPos: 80 }),
];
const rockMap2Level3 = [
  new Rock("stone",60, { xPos: 40, yPos: 50 }),
  new Rock("stone", 30, { xPos: 60, yPos: 60 }),
  new Rock("stone",60, { xPos: 40, yPos: 20 }),
  new Rock("stone",60, { xPos: 10, yPos: 30 }),
  new Rock("stone",90, { xPos: 25, yPos: 10 }),
  new Rock("stone", 90, { xPos: 80, yPos: 20 }),
  new Rock("stone", 90, { xPos: 60, yPos: 10 }),
  new Rock("stone", 90, { xPos: 50, yPos: 20 }),
  new Rock("stone",30, { xPos: 20, yPos: 70 }),
  new Rock("stone",60, { xPos: 30, yPos: 70 }),
  new Rock("stone",30, { xPos: 60, yPos: 70 }),
  new Rock("bag",  20, { xPos: 50, yPos: 50 }),
  new Rock("gold", 90, { xPos: 45, yPos: 65 }),
  new Rock("gold", 90, { xPos: 5, yPos: 47 }),
  new Rock("gold", 70, { xPos: 85, yPos: 60 }),
  new Rock("gold",30, { xPos: 65, yPos: 29 }),
  new Rock("gold",30, { xPos: 12, yPos: 10 }),
  new Rock("gold",60, { xPos: 32, yPos: 40 }),
  new Rock("gold",60, { xPos: 72, yPos: 60 }),
  new Rock("gold",60, { xPos: 32, yPos: 80 }),
];

const rockMap3Level3 = [
  new Rock("stone",60, { xPos: 40, yPos: 50 }),
  new Rock("stone", 30, { xPos: 60, yPos: 60 }),
  new Rock("stone",60, { xPos: 40, yPos: 20 }),
  new Rock("stone",60, { xPos: 10, yPos: 30 }),
  new Rock("stone",90, { xPos: 25, yPos: 10 }),
  new Rock("stone", 90, { xPos: 80, yPos: 20 }),
  new Rock("stone", 90, { xPos: 60, yPos: 10 }),
  new Rock("stone", 90, { xPos: 50, yPos: 20 }),
  new Rock("stone",30, { xPos: 20, yPos: 70 }),
  new Rock("stone",60, { xPos: 30, yPos: 70 }),
  new Rock("stone",90, { xPos: 60, yPos: 70 }),
  new Rock("bag",20, { xPos: 50, yPos: 50 }),
  new Rock("gold", 90, { xPos: 45, yPos: 65 }),
  new Rock("gold", 90, { xPos: 5, yPos: 47 }),
  new Rock("gold", 70, { xPos: 85, yPos: 35 }),
  new Rock("gold",30, { xPos: 65, yPos: 29 }),
  new Rock("gold",30, { xPos: 22, yPos: 10 }),
  new Rock("gold",60, { xPos: 32, yPos: 40 }),
  new Rock("gold",60, { xPos: 72, yPos: 60 }),
  new Rock("gold",60, { xPos: 32, yPos: 80 }),
];

const mapsLevel1 = [rockMap1Level1, rockMap1Level2, rockMap1Level3];
const mapsLevel2 = [rockMap2Level1, rockMap2Level2, rockMap2Level3];
const mapsLevel3 = [rockMap3Level1, rockMap3Level2, rockMap3Level3];



///גדלים של זהב:
90
70
60
30


//גדלים של אבנים
60 
90
30

