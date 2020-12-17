

function SortPick(a, b) {
    if (a.pick > b.pick) {
        return 1;
    }
    if (a.pick < b.pick) {
        return -1;
    } a < b
    if (a.pick == b.pick) {
        return 0;
    }
};

let array = [
    { name: "Potato", count: "5", pick: "Yes" },
    { name: "Root", count: "7", pick: "No" },
    { name: "Apple", count: "4", pick: "Yes" },
    { name: "Cherry", count: "4", pick: "No" },

];
let newObj = { name: "Apple", count: "10", pick: "Yes" };
let caroot = { name: "caroot", count: "78", pick: "No" };
function addNewProduct(newObj) {
    if (array.find(item => item.name === newObj.name)) {
        array.map((item) => {
            if (item.name === newObj.name) {
                item.count = +item.count + +newObj.count;
            }
        })
    }
    else {
        array.push(newObj);

    }
}
function buyProduct(ProductName) {
    array.map((item => {
        if (item.name === ProductName) {
            item.pick = "Yes";
        }
    }))
}
addNewProduct(newObj);
buyProduct("Root");
addNewProduct(caroot);
array.sort(SortPick);
console.log(array);
