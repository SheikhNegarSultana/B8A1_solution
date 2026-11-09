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
export {};
