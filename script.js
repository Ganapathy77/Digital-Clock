setInterval(()=>{
    const timeElement = document.querySelector('#time');
let date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let day_night = "AM"
if(hour>12){
    day_night = "PM"
    hour-=12;
}
if(hour<10){
    hour="0" + hour
}
if(minutes<10){
    minutes="0" + minutes
}
if(seconds<10){
    seconds="0" + seconds
}
timeElement.textContent = hour + ":" + minutes + ":" + seconds + " " + day_night;
})