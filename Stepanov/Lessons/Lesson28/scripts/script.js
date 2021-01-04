let data = [{
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
]


let userTime = moment.tz.guess();
let usTime = moment("2020-12-20T00:00:00Z").tz(userTime).format().split('T')[0];

let descriptionForPrompt = '';
let sportsIds = [];
let sports = [];

function sortedData(array = data) {
    let newObj = {};

    for (i in array) {
        array[i].ourData = moment(array[i].date).tz(userTime).format().split('T')[0];
        array[i].ourTime = moment(array[i].date).tz(userTime).format('LT');

        if (!sportsIds.includes(array[i].sport_id)) {
            sportsIds.push(array[i].sport_id);
            sports.push({
                sport: array[i].sport,
                sport_id: array[i].sport_id
            });
            descriptionForPrompt += `${array[i].sport}: ${array[i].sport_id}`;
        }

        if (newObj.hasOwnProperty(array[i].ourData)) {
            newObj[array[i].ourData].push(array[i]);
        } else {
            newObj[array[i].ourData] = [array[i]];
        }
    }

    for (key in newObj) {
        console.log(key);
        document.write(`<p style='background-color: #ccc; font-weight: bold;'>DATE: ${key}</p>`);
        console.log(newObj[key]);
        for (game in newObj[key]) {
            document.write(`<p>${newObj[key][game].ourTime} ${newObj[key][game].title}</p>`)
        }
    }
}

function sortedDataBySport(selectedSportId, array = data) {
    let newObj = {};

    for (i in array) {
        if (array[i].sport_id === selectedSportId) {
            array[i].ourData = moment(array[i].date).tz(userTime).format().split('T')[0];
            array[i].ourTime = moment(array[i].date).tz(userTime).format('LT');

            if (!sportsIds.includes(array[i].sport_id)) {
                sportsIds.push(array[i].sport_id);
                sports.push({
                    sport: array[i].sport,
                    sport_id: array[i].sport_id
                });
                descriptionForPrompt += `${array[i].sport}: ${array[i].sport_id}`;
            }

            if (newObj.hasOwnProperty(array[i].ourData)) {
                newObj[array[i].ourData].push(array[i]);
            } else {
                newObj[array[i].ourData] = [array[i]];
            }
        }
    }
    for (key in newObj) {
        console.log(key);
        document.write(`<p style='background-color: #ccc; font-weight: bold;'>DATE: ${key}</p>`);
        console.log(newObj[key]);
        for (game in newObj[key]) {
            document.write(`<p>${newObj[key][game].ourTime} ${newObj[key][game].title}</p>`)
        }
    }
}


sortedData();
console.log(sports);
console.log(sportsIds);

setTimeout(function() {
    let valueFromPrompt = prompt(descriptionForPrompt);
    // let newData = data.filter((game) => game.sport_id === +valueFromPrompt);
    // sortedData(newData);
    sortedDataBySport(+valueFromPrompt);
}, 2000);






// let obj = {};
// let a = +prompt('Enter sports id(basketball(5)/american football(4)): ');

// for (i in data) {
//     data[i].Sporttype = data[i].sport_id;
//     if (obj.hasOwnProperty(data[i].Sporttype)) {
//         obj[data[i].Sporttype].push(data[i]);
//     } else {
//         obj[data[i].Sporttype] = [data[i]];
//     }
// }
// let sportData = [];
// let findSport = (data) => {
//     for (i in data) {
//         if (!sportData.includes(data[i].sport))
//             sportData.push(data[i].sport)
//     }
//     return sportData;
// }
// findSport(data);

// let sportId = [];
// let findSportid = (data) => {
//     for (i in data) {
//         if (!sport_id.includes(data[i].sport_id))
//             sportId.push(data[i].sport_id)
//     }
//     return sportId;
// }