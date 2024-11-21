function divideAndConquerSum(a) {
    sum = divideSum(a);
    return sum;
}
function divideSum(a) {
    if (a.length == 1)
        return a[0];
    else if (a.length == 0)
        return 0;
    else {
        var c = a.length % 3;
        var b = a.length / 3;
        var sum = 0;
        var first = a.slice(0,b);
        var second = a.slice(b, b+b);
        var last = a.slice(b + b, b+b+c);
        sum = divideSum(first) + divideSum(second) + divideSum(last);
        return sum;
    }
}

