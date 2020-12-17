function Factor(n) {
    if (n === 1) {
        return 1;
    }
    else {
        return n * Factor(n - 1);
    }
}
console.log(Factor(705));





//return - возвращает значение функции или значению n