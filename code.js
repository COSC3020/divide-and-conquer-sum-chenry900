function divideAndConquerSum(a) {
    if (a.size => 1)
        return a;
    else 
    {
        int c = 0, b = 0, sum = 0;
        b = a.size()/3;
        c = a.size()%3;
        int first[b],second[b],last[c];
        for (int f = 0; f < b; f++)
            first[f] = a[f];
        for (int s = b-1; s < b+b; s++)
            second[s] = a[s];
        for (int l = b+b-1; l < b+b+c; l++)
            last[l] = a[l];
        sum = divideAndConquerSum(first)+divideAndConquerSum(second)+divideAndConquerSum(last);
    }
    return sum;
}
