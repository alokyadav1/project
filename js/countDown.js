var days = document.getElementById('days');
	var hours = document.getElementById('hours');
	var minutes = document.getElementById('minutes');
	var seconds = document.getElementById('seconds');
	function countDown(){
		let day = parseInt(days.innerText);
		let hour = parseInt(hours.innerText);
		let minute = parseInt(minutes.innerText);
		let second = parseInt(seconds.innerText);
		if(second>0)
			second--;
		else{
			second = 59;
			minute--;
		}
		if(minute<1){
			minute = 59;
			hour--;
		}
		if(hour<1){
			hour = 23;
			day--;
		}
		seconds.innerText = second;
		minutes.innerText = minute;
		hours.innerText = hour;
		days.innerText = "0"+day;
	}
	setInterval(countDown, 1000);
