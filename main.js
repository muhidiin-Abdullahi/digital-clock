const month = document.querySelector("#month")
const day = document.querySelector("#day")
const year = document.querySelector("#year")
const MoOrafternoon = document.querySelector("#MoOrafternoon")


const daynames = [ "Sunday", "Monday" , "Tuesday", "Wedneday", "Thursday", "friday",  "Saturday" ]
const monthNames = [
   'January', 'February', 'March', 'April', 'May', 'June',
   'July', 'August', 'September', 'October', 'November', 'December'
 ];


 function clock(){


   
  
const dateTime = new Date()


month.innerHTML = dateTime.getDate()
day.innerHTML = monthNames[dateTime.getMonth()]
year.innerHTML= dateTime.getFullYear()

if(dateTime.getHours() > 12){
   MoOrafternoon.innerHTML = "PM"
}
else{
   MoOrafternoon.innerHTML = "AM"

}



 
const hour = document.querySelector("#hour")
const minutes = document.querySelector("#Minutes")
const seconds = document.querySelector("#seconds")


if (dateTime.getHours() < 10) {
   hour.innerHTML `0${dateTime.getHours()}`
}
else {
   hour.innerHTML = dateTime.getHours() + ":"
}

if (dateTime.getMinutes() < 10) {
   minutes.innerHTML `0${dateTime.getMinutes()}`
}
else {
   minutes.innerHTML = dateTime.getMinutes() + ":"
}
minutes.innerHTML = dateTime.getMinutes() + ":"
seconds.innerHTML = dateTime.getSeconds()
 }
 setInterval(clock, 400)



