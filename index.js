// Code your solution in this file!
function distanceFromHqInBlocks(number){
    let distanceFromHQ = Math.abs(number - 42);
    return distanceFromHQ
}

function distanceFromHqInFeet(number){
    let distanceFromHqInFeet = distanceFromHqInBlocks(number) * 264
    return distanceFromHqInFeet
}

function distanceTravelledInFeet(num1, num2){
    let distanceTraveled = Math.abs(num1 - num2) * 264
    return distanceTraveled
}

function calculatesFarePrice(start, destination){
    let totalFare;
    let distanceTraveled = distanceTravelledInFeet(start, destination);
    if (distanceTraveled < 400){
        totalFare = 0;
    }
    else if (distanceTraveled > 400 && distanceTraveled < 2000){
        totalFare = (distanceTraveled - 400) * 0.02;
    }
    else if (distanceTraveled > 2000 && distanceTraveled < 2500){
        totalFare = 25;
    }
    else {
        totalFare = "cannot travel that far"
    }
    return totalFare;
}