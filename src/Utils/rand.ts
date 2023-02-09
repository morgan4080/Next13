const rand = (min: number, max?: number) => {
    if (max == null) { max = min; min = 0; }
    if (min > max) { let tmp = min; min = max; max = tmp; }
    return min + (max - min) * Math.random();
}

export default rand
