let fractionOne = {
    up: 3,
    down: 4
}
let fractionTwo = {
    up: 1,
    down: 8
}
function PerfectFraction() {

    //     for (i = 1; i <= final.up; i++) {
    //         if ((final.up % i == 0) && (final.down % i == 0)) {
    //             newObj = {
    //                 up: final.up / i,
    //                 down: final.down / i
    //             }
    //         }
    //         console.log(newObj);

    //     }
    // }
    function Summ() {
        let SummUp = (fractionOne.up * fractionTwo.down) + (fractionTwo.up * fractionOne.down);
        let SummDown = fractionOne.down * fractionTwo.down;
        return {
            up: SummUp,
            down: SummDown
        }

    }
    function Diff() {
        let DiffUp = (fractionOne.up * fractionTwo.down) - (fractionTwo.up * fractionOne.down);
        let DiffDown = fractionOne.down * fractionTwo.down;
        let final = {
            up: DiffUp,
            down: DiffDown
        }
        console.log("Diff:" + final.up + "/" + final.down);
    }
    function Mult() {
        let MultUp = fractionOne.up * fractionTwo.up;
        let MultDown = fractionOne.down * fractionTwo.down;
        let final = {
            up: MultUp,
            down: MultDown
        }
        console.log("Mult.:" + final.up + "/" + final.down);
    }

    function Division() {
        let final = {
            up: (fractionOne.up * fractionTwo.down),
            down: (fractionOne.down * fractionTwo.up)
        }
        console.log("Division:" + final.up + "/" + final.down);
    }

    console.log(Summ());
    Diff();
    Mult();
    Division();
