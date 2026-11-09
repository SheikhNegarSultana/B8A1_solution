const multiplyValue = (value, multiplier) => {
    if (multiplier === 0) {
        return 0;
    }
    else if (multiplier) {
        return value * multiplier;
    }
    else {
        return value * 2;
    }
};
const processInput = (value) => {
    if (typeof (value) === 'string') {
        return `${value.trim().toLocaleLowerCase()}`;
    }
    else if (typeof (value) === 'number') {
        return value * 10;
    }
    else {
        if (value) {
            return "Active";
        }
        else {
            return "Inactive";
        }
    }
};
const formatCoordinate = ([latitude, longitude, locationName]) => {
    return `Location: ${locationName} (${latitude}, ${longitude})`;
};
const concatenateArrays = (...arrays) => {
    let concat = [];
    for (let i of [...arrays]) {
        concat.push(...i);
    }
    return concat;
};
export {};
