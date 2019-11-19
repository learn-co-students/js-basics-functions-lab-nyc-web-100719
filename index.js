// Code your solution in this file!

const hq = 42

function distanceFromHqInBlocks(pickup) {
    let result
    if (pickup >= 42) {
        result = pickup - hq;
    } else if (pickup < 42) {
        result = hq - pickup;
    }
    return result;
}

function distanceFromHqInFeet(pickup) {
    return distanceFromHqInBlocks(pickup) * 264;
}

function distanceTravelledInFeet(start, destination) {
    let result
    if (start >= destination) {
        result = (start - destination) * 264;
    } else if (start < destination) {
        result = (destination - start) * 264;
    }
    return result;
}

function calculatesFarePrice(start, destination) {
    let result
    let feet = distanceTravelledInFeet(start, destination)
    if (feet < 400) {
        result = 0;
    } else if (feet > 400 && feet <= 2000) {
        result = (feet - 400) * .02;
    } else if (feet > 2000 && feet <= 2500) {
        result = 25;
    } else if (feet > 2500 ) {
        result = "cannot travel that far";
    }
    return result;
}