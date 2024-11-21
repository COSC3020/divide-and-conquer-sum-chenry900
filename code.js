function divideAndConquerSum(a) {
    var sum = divideSum(a);
    return sum;
}
function divideSum(a) {
    if (a.length == 1)
        return a[0];
    else if (a.length == 0)
        return 0;
    else {
        var total = 0;
        var b = Math.floor(a.length / 3);
        var first = a.slice(0, b);
        var second = a.slice(b, (b + b));
        var last = a.slice((b + b), a.length);
        total = divideSum(first) + divideSum(second) + divideSum(last);
        return total;
    }
}

