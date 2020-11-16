 function clock(){
        var date = new Date();
        var sec = date.getSeconds();
        var min  = date.getMinutes();
        var hour = date.getHours();
        var hourHand = hour*30 + min/2;
        var minHand = min*6;
        var secHand = sec*6;
        var second = document.getElementById('second');
        var minute = document.getElementById('minute');
        var Hours = document.getElementById('hour');
        second.style.transform = "rotate(" + secHand + "deg)";
        minute.style.transform = "rotate(" + minHand + "deg)";
        Hours.style.transform = "rotate(" + hourHand + "deg)"; 
    }
    setInterval(clock,1000);
