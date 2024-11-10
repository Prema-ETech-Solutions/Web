function Add(a, b) {
    return a + b;

}
function Sub(a, b) {
    return a - b;

}
const Mul = (a, b) => {
    return a * b;

}
const Div = (a, b) => {
    return a / b;

}
const Mods = (a, b) => {
    return a % b;

}

// module.exports = { Add, Sub, Mul, Div, Mods };


exports.Add = Add;
exports.Sub = Sub;
exports.Div = Div;
exports.Mods = Mods;

