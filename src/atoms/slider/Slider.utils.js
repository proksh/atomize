export function realValue(value, min, max) {
    return (max - min) * value + min
}

export function valueToPercent(value, min, max) {
    return ((value - min) * 100) / (max - min)
}

function isFloat(n) {
    return n === +n && n !== (n|0)
}

function nbAfterDecimal (nb) {
    if(Math.floor(nb.valueOf()) === nb.valueOf()) return 0
    return nb.toString().split(".")[1].length || 0 
}

export function fixValue(value, step) {
    if(isFloat(value) && isFloat(step)){
        return parseFloat(Math.round(value / step) * step).toFixed(nbAfterDecimal(step))
    } else {
        return Math.round(value / step) * step
    }
}