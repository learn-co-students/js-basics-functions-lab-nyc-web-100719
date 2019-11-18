import { monitorEventLoopDelay } from "perf_hooks";

// Code your solution in this file!
function distanceFromHqInBlocks(beginningLocation) {
    let distance;
    distance = beginningLocation - 42
    return Math.abs(distance)
    }

function distanceFromHqInFeet(distance) {
    let feet;
    feet = distanceFromHqInBlocks(distance);
    return feet * 264
    }

function distanceTravelledInFeet(startingPoint, endingPoint) {
    let distance; 
    let distanceInFeet;
    distance = startingPoint - endingPoint
    distanceInFeet = distance * 264
    return Math.abs(distanceInFeet) 
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination) 
        
        if (distance <= 400) {
            return 0;
            } else if (distance > 400 && distance <= 2000) {
            return ((distance - 400)* .02)
            } else if (distance > 2000 && distance < 2500) {
            return 25;
            } else {
            return 'cannot travel that far';
        }
}

// The first four hundred feet are free. 
// For distance bw 400 and 2000 feet, price 2 cents per foot (not including 400, which are free)
// flat fare for a distance over 2000 feet and under 2500 feet. 
// Scuber does not allow any rides over 2500 feet 
// - returns 'cannot travel that far' if a ride over 2500 feet is requested.