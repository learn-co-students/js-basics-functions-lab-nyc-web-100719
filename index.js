// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
    //returns the number of blocks given a value
    return Math.abs(someValue - 42);
  }
   
  function distanceFromHqInFeet (someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
    // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    //the return value of distanceFromHqInBlocks can then be used to calculate feet
  }
 function distanceTravelledInFeet (valueA, valueB) {
    return Math.abs(valueA - valueB) * 264; 
 }

 function calculatesFarePrice(start, destination) {
     var distance = distanceTravelledInFeet(start, destination);

     if (distance > 2500)
     {
        return 'cannot travel that far';
     }
     else if (distance > 2000)
     {
         return 25.00;
     }
     else if (distance > 400)
     {
         distance = distance - 400;
         return distance * 0.02
     }
     else
     {
         return 0;
     }
 }