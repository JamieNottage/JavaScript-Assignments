const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

var month_name = function (date) {
    let m = date.getMonth();
    return MONTHS[m];
};

console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));
