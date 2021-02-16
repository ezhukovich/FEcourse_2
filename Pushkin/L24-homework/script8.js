
function Week(date) {
    let array = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return array[date.getDay()];
}


do {
    alert(Week(new Date()));
}
while (confirm("Next day?"));

/// ПОчти