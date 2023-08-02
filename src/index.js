module.exports = function reverse(n) {
    var a = String(Math.abs(n)).split("").reverse().join("");
    return Number(a);
};
