function clock() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    console.log(h + ":" + m + ":" + s);
    setTimeout(clock, 1000);
}

clock();
