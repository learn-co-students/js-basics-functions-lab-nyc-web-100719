// Code your solution in this file!
function distanceFromHqInBlocks(input){
let hq = 42;
let distanceBlocksApart = Math.abs(input - hq);
return distanceBlocksApart;
}

function distanceFromHqInFeet(number){
    let blocks = distanceFromHqInBlocks(number);

    let numberOfFeetTraveled = blocks * 264;
    return numberOfFeetTraveled;
}

function distanceTravelledInFeet(start, finish){
let resultInBlocks = Math.abs(start - finish);
let resultInFeet = resultInBlocks * 264;
return resultInBlocks, resultInFeet
}

function calculatesFarePrice(start, destination){
const totalFeet = distanceTravelledInFeet(start, destination)
    if(totalFeet < 400){
        return 0;
    } else if (totalFeet > 400 && totalFeet < 2000){
        let cost = (totalFeet - 400)* 0.02;
        return cost;
    } else if (totalFeet > 2000 && totalFeet < 2500){
        return 25;
    } else {
        return 'cannot travel that far'
    }
}