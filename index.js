// Code your solution in this file!
function distanceFromHqInBlocks(d1, d2 = 42) {
  //return Math.ceil((distance / 264))
  return Math.abs((d1 - d2))
}

function distanceFromHqInFeet(d1, d2 = 42) {
  return (distanceFromHqInBlocks(d1, d2) * 264)
}

function distanceTravelledInFeet(d1, d2) {
  return distanceFromHqInFeet(d1, d2);
}

function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceFromHqInFeet(start, destination);
  if (distanceInFeet <= 400){
    return 0;
  } else if (distanceInFeet <= 2000){
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet <= 2500){
    return 25;
  } else if (distanceInFeet > 2500){
    return 'cannot travel that far';
  }
}