interface Boat {
    hullBreached: boolean;
    fillLevel: number;
    sinked: boolean;
  }
  
  function isItSinking(boat: Boat) {
    if (boat.hullBreached) {
      console.log("The boat has a breached hull. It's sinking!");
      while (boat.fillLevel < 100) {
        boat.fillLevel += 20;
        console.log(`Filling... Current fill level: ${boat.fillLevel}%`);
      }
      boat.sinked = true;
      console.log("The boat has sunk!");
    } else {
      console.log("The boat is safe. It's not sinking.");
    }
  }
  
  const myBoat: Boat = {
    hullBreached: true,
    fillLevel: 0,
    sinked: false,
  };
  
  isItSinking(myBoat);
  
  console.log(myBoat);