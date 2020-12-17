function A() {
    return {
        up: 12,
        down: 18
    }

}
// console.log(A())


function B() {
    for (i = 1; i <= A().up; i++) {
        if ((A().up % i == 0) && (A().down % i == 0)) {
            let newA = {
                up: A().up / i,
                down: A().down / i
            }
            console.log(i);

        }

    }

}
// console.log(B());