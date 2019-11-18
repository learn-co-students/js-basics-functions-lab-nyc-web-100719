// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    let hqLocation = 42;
    if (distance >= 42){
        return distance - hqLocation;
    }else{
        return hqLocation - distance;
    }
        

};

function distanceFromHqInFeet(location){
    let hqLocation = 42 * 264;
    location = location * 264;
    if (hqLocation < location){
        return location - hqLocation;
    }else{
        return hqLocation - location
    }
};

function distanceTravelledInFeet(loc1, loc2){
    loc1 = loc1 * 264
    loc2 = loc2 * 264
    if(loc1 < loc2){
        return loc2 - loc1
    }else{
        return loc1 - loc2
    }
};

function calculatesFarePrice(start, destination){
    let distance = 0
    if(start < destination){
        distance = destination - start;
    }else{
        distance = start - destination;
    };
    distance = distance * 264;
    if (distance > 2500){
        return 'cannot travel that far';
    }else if(distance>2000){
        return 25;
    }else if(distance < 2000 && distance > 400){
        return (distance-400) * 0.02;
    }else{
        return 0
    }
};