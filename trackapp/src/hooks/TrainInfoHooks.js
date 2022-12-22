export const totalMedium = (array) => {
    return array.filter(x => x.CriticalLevel === "Medium").length;
}

export const totalHigh = (array) => {
    return array.filter(x => x.CriticalLevel === "High").length;
}

export const totalLow = (array) => {
    return array.filter(x => x.CriticalLevel === "Low").length;
}

export const slightlydmged = (array) => {
    return array.filter(x => x.Status === "Slightly damanged").length;
}

export const dmged = (array) => {
    return array.filter(x => x.Status === "Damanged").length;
}

export const highdmged = (array) => {
    return array.filter(x => x.Status === "Maintenance required").length;
}