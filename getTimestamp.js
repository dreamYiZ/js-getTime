
function getTime(h, m, s){
    var d = new Date();
    h && d.setHours(d.getHours() + h);
    m && d.setMinutes(d.getMinutes() + m);
    s && d.setMilliseconds(d.getMilliseconds() + s);
    return + d;
}

