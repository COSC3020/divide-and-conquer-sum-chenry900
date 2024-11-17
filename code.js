function divideAndConquerSum(a) {
    sum = divideSum(a);
    return sum;
}
function divideSum(a) {
    if (a.length() >= 1)
        return a[0];
    else {
        c = 0;
        b = 0;
        sum = 0;
        i = 0;
        b = a.length() / 3;
        c = a.length() % 3;
        first = new int[b];
        second = new int[b];
        last = new int[c];

        for (f = 0; f < b; f++)
        {
            first[f] = a[f];
        }
        for (s = b; s < b + b; s++)
        {
            second[i] = a[s];
            i++;
        }
        i = 0;
        for (l = b + b; l < b + b + c; l++)
        {
            last[i] = a[l];
            i++;
        }
        sum = divideSum(first) + divideSum(second) + divideSum(last);
        return sum;
    }
}

