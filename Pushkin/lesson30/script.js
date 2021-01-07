let arr = [
    {
        id: 1,
        date: "2020-12-17T00:30:00Z",
        title: "New York Knicks - Cleveland Cavaliers",
        sport: "Basketball",
        sport_id: 5,
        type: '1',
        name: '_1'
    },
    {
        id: 2,
        date: "2020-12-17T01:00:00Z",
        title: "Oklahoma City Thunder - Chicago Bulls",
        sport: "Basketball",
        sport_id: 5,
        type: '2',
        name: '_2'
    },
    {
        id: 3,
        date: "2020-12-17T02:00:00Z",
        title: "Phoenix Suns - Los Angeles Lakers",
        sport: "Basketball",
        sport_id: 5,
        type: '3',
        name: '_3'
    },
    {
        id: 4,
        date: "2020-12-17T02:00:00Z",
        title: "Denver Nuggets - Portland Trail Blazers",
        sport: "Basketball",
        sport_id: 5,
        type: '2',
        name: '_4'
    },
    {
        id: 5,
        date: "2020-12-18T00:00:00Z",
        title: "Orlando Magic - Charlotte Hornets",
        sport: "Basketball",
        sport_id: 5,
        type: '3',
        name: '_5'
    },
    {
        id: 6,
        date: "2020-12-18T00:00:00Z",
        title: "Washington Wizards - Detroit Pistons",
        sport: "Basketball",
        sport_id: 5,
        type: '1',
        name: '_6'
    },
    {
        id: 7,
        date: "2020-12-18T01:00:00Z",
        title: "Memphis Grizzlies - Atlanta Hawks",
        sport: "Basketball",
        sport_id: 5,
        type: '2',
        name: '_7'
    },
    {
        id: 8,
        date: "2020-12-18T01:00:00Z",
        title: "Houston Rockets - San Antonio Spurs",
        sport: "Basketball",
        sport_id: 5,
        type: '3',
        name: '_8'
    },
    {
        id: 9,
        date: "2020-12-18T01:20:00Z",
        title: "Las Vegas Raiders - Los Angeles Chargers",
        sport: "American Football",
        sport_id: 4,
        type: '2',
        name: '_9'
    },
    {
        id: 10,
        date: "2020-12-18T01:30:00Z",
        title: "Dallas Mavericks - Minnesota Timberwolves",
        sport: "Basketball",
        sport_id: 5,
        type: '3',
        name: '_10'
    },
    {
        id: 11,
        date: "2020-12-18T02:00:00Z",
        title: "Sacramento Kings - Golden State Warriors",
        sport: "Basketball",
        sport_id: 5,
        type: '2',
        name: '_11'
    },
    {
        id: 12,
        date: "2020-12-18T03:00:00Z",
        title: "Los Angeles Clippers - Utah Jazz",
        sport: "Basketball",
        sport_id: 5,
        type: '1',
        name: '_12'
    },
    {
        id: 13,
        date: "2020-12-18T23:00:00Z",
        title: "Indiana Pacers - Philadelphia 76ers",
        sport: "Basketball",
        sport_id: 5,
        type: '1',
        name: '_13'
    },
    {
        id: 14,
        date: "2020-12-19T00:00:00Z",
        title: "Toronto Raptors - Miami Heat",
        sport: "Basketball",
        sport_id: 5,
        type: '2',
        name: '_14'
    },
    {
        id: 15,
        date: "2020-12-19T00:30:00Z",
        title: "New York Knicks - Cleveland Cavaliers",
        sport: "Basketball",
        sport_id: 5,
        type: '1',
        name: '_15'
    },
    {
        id: 16,
        date: "2020-12-19T01:00:00Z",
        title: "Boston Celtics - Brooklyn Nets",
        sport: "Basketball",
        sport_id: 5,
        type: '3',
        name: '_16'
    },
    {
        id: 17,
        "date": "2020-12-19T01:00:00Z",
        "title": "Oklahoma City Thunder - Chicago Bulls",
        sport: "Basketball",
        sport_id: 5,
        type: '4',
        name: '_17'
    },
    {
        id: 18,
        date: "2020-12-19T01:00:00Z",
        title: "New Orleans Pelicans - Milwaukee Bucks",
        sport: "Basketball",
        sport_id: 5,
        type: '4',
        name: '_18'
    },
    {
        id: 19,
        date: "2020-12-19T02:00:00Z",
        title: "Denver Nuggets - Portland Trail Blazers",
        sport: "Basketball",
        sport_id: 5,
        type: '1',
        name: '_19'
    },
    {
        id: 20,
        date: "2020-12-19T03:30:00Z",
        title: "Phoenix Suns - Los Angeles Lakers",
        sport: "Basketball",
        sport_id: 5,
        type: '2',
        name: '_20'
    },
    {
        id: 21,
        date: "2020-12-19T21:30:00Z",
        title: "Denver Broncos - Buffalo Bills",
        sport: "American Football",
        sport_id: 4,
        type: '3',
        name: '_21'
    },
    {
        id: 22,
        date: "2020-12-20T00:00:00Z",
        title: "Orlando Magic - Charlotte Hornets",
        sport: "Basketball",
        sport_id: 5,
        type: '2',
        name: '_22'
    },
];
console.log(moment.tz.guess());
// console.log(arr[12].date);
// let show = (arr) => {
//     let b = moment(arr[12].date).tz(moment.tz.guess()).format().split("T")[0];
//     return b;
// }
// console.log(show(arr));
let timeUser = moment.tz.guess();
// let sortedObj = {};
// for (i in arr) {
//     arr[i].ourDate = moment(arr[i].date).tz(timeUser).format().split("T")[0];
//     console.log(moment(arr[i].date).tz(timeUser).format().split("T")[0]);
//     if (sortedObj.hasOwnProperty(arr[i].ourDate)) {
//         sortedObj[arr[i].ourDate].push(arr[i]);
//     } else {
//         sortedObj[arr[i].ourDate] = [arr[i]];
//     }
// }
// console.group(sortedObj);
// let sport_idData = [];
// for (i in sortedObj) {
//     console.log(i)
//     for (j in arr) {
//         if (!sportData.includes(sortedObj[j]))
//             sportData.push(sortedObj[i])
//     }
//     console.log(sportData)
// }
//Ищем idшник
// let findSport_id = (arr) => {
//     for (i in arr) {
//         if (!sport_idData.includes(arr[i].sport_id)) {
//             sport_idData.push(arr[i].sport_id)
//         } else {
//         }
//     }
//     return sport_idData
// }
// // Ищем название спорта
// let sportData = [];
// let findSport = (arr) => {
//     for (i in arr) {
//         if (!sportData.includes(arr[i].sport))
//             sportData.push(arr[i].sport)
//     }
//     return sportData
// }
// let showGame = [];
// let games = (sortedObj) => {
//     for (i in sortedObj) {
//         if (!showGame.includes(sortedObj[i]))
//             showGame.push(sortedObj[i])
//     }
//     return showGame;
// }
// console.log(games(sortedObj).)
// findSport_id(arr);
// findSport(arr);
// let what = prompt(`Какой вид спорта показать?  ${sportData[0]}: ${sport_idData[0]} либо ${sportData[1]}: ${sport_idData[1]}? Вводите только число`);
// if (what == sport_idData[0] || what == sportData[0]) {
//     console.log(games(sortedObj));
// } else if (what == sport_idData[1] || what == sportData[0]) {
//     console.log(games(sortedObj))
// }
let descriptionForPrompt = "";
let sportsIds = [];
let sports = [];
function sortedData(array = arr) {
    let sortedObj = {};
    for (i in array) {
        array[i].ourDate = moment(array[i].date).tz(timeUser).format().split("T")[0];
        array[i].ourTime = moment(array[i].date).tz(timeUser).format("LT");
        if (!sportsIds.includes(array[i].sport_id)) {
            sportsIds.push(array[i].sport_id);
            sports.push({
                sport: array[i].sport,
                sport_id: array[i].sport_id
            });
            descriptionForPrompt += `${array[i].sport}: ${array[i].sport_id} `;
        }
        if (sortedObj.hasOwnProperty(array[i].ourDate)) {
            sortedObj[arr[i].ourDate].push(array[i]);
        } else {
            sortedObj[array[i].ourDate] = [array[i]];
        }
    }
    for (key in sortedObj) {
        console.log(key);
        document.write(`<p style='background-color: #ccc; font-weight: bold;'>DATE: ${key}</p>`);
        console.log(sortedObj[key]);
        for (game in sortedObj[key]) {
            document.write(`<p>${sortedObj[key][game].ourTime} ${sortedObj[key][game].title}</p>`)
        }
    }
}
function sortedDataBySport(selectedSportId, array = arr) {
    let sortedObj = {};
    for (i in array) {
        if (array[i].sport_id === selectedSportId) {
            array[i].ourDate = moment(array[i].date).tz(timeUser).format().split("T")[0];
            array[i].ourTime = moment(array[i].date).tz(timeUser).format("LT");
            if (!sportsIds.includes(array[i].sport_id)) {
                sportsIds.push(array[i].sport_id);
                sports.push({
                    sport: array[i].sport,
                    sport_id: array[i].sport_id
                });
                descriptionForPrompt += `${array[i].sport}: ${array[i].sport_id} `;
            }
            if (sortedObj.hasOwnProperty(array[i].ourDate)) {
                sortedObj[arr[i].ourDate].push(array[i]);
            } else {
                sortedObj[array[i].ourDate] = [array[i]];
            }
        }
    }
    for (key in sortedObj) {
        console.log(key);
        document.write(`<p style='background-color: #ccc; font-weight: bold;'>DATE: ${key}</p>`);
        console.log(sortedObj[key]);
        for (game in sortedObj[key]) {
            document.write(`<p>${sortedObj[key][game].ourTime} ${sortedObj[key][game].title}</p>`)
        }
    }
}
sortedData();
console.log(sportsIds);
console.log(sports);
setTimeout(function () {
    let valueFromPrompt = prompt(descriptionForPrompt);
    sortedDataBySport(+valueFromPrompt);
}, 2000);