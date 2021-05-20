convertInt = (int) => {
    let date = new Date(0);
    date.setSeconds(int);
    let hour = date.toISOString().substr(11, 2) ;
    let minute = date.toISOString().substr(14,2);
    let second = date.toISOString().substr(17,2);
    hour = hour[0] == 0 ? hour[1] : hour
    minute = minute[0] == 0 ? minute[1] : minute
    second = second[0] == 0 ? second[1] : second
    console.log(`${hour} jam ${minute} menit ${second} detik.`)
}

convertInt(10000)