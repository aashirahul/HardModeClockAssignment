
var displayClock = function(){
	var currentDate = new Date();
    var hour = currentDate.getHours();
    var minute = currentDate.getMinutes();
    var second = currentDate.getSeconds();
    var displayHour = document.getElementById("hours");
	
	var hourHex = hour.toString(16);
	var minuteHex =minute.toString(16);
	var secondHex = second.toString(16);
	if(hour<10){
		hourHex = '0'+hour;
	}

	var displayMinute = document.getElementById("minutes");
	if (minute<10){
		 minuteHex='0'+ minute + ':';
		}

	var displaySecond = document.getElementById("seconds");
	if(second<10){
		 secondHex = '0'+ second;
		}
	var timeHex = hourHex+minuteHex+secondHex;
	var color = timeHex;	
	document.getElementById("clock").style.background='#'+color;
	document.getElementById("clock-box").innerHTML=color;

}
var currentTime = function(){
	var timeoutID = window.setInterval(displayClock,1000);
	}
	currentTime();


