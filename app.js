
function getTime(h, m, s){
    var d = new Date();
    h && d.setHours(d.getHours() + h);
    m && d.setMinutes(d.getMinutes() + m);
    s && d.setMilliseconds(d.getMilliseconds() + s);
    return + d;
}

console.log('getTime(-8)', getTime(-8));
console.log('getTime(0, -15)', getTime(0, -15));
