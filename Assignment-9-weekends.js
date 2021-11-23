var is_weekend = function (date) {
    let d = new Date(date);
    if (d.getDay() == 6 || d.getDay() == 0) {
        return "Weekend";
    }
};

console.log(is_weekend("Nov 15, 2014"));
console.log(is_weekend("Nov 16, 2014"));
console.log(is_weekend("Nov 17, 2014"));
