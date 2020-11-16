var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        var t = h + ":" + m;
        function send() {
            var val = document.getElementById('msg').value;
            if (val !== '') {
                var p = document.createElement("p");
                var value = document.createTextNode(val);
                var time = document.createElement("span");
                var tvalue = document.createTextNode(" " + t);
                time.appendChild(tvalue);
                time.style.fontSize = "10px";
                time.style.marginLeft = "7px";
                p.appendChild(value);
                p.appendChild(time);
                var section = document.getElementById('section');
                section.appendChild(p);
                var val = document.getElementById('msg').value = '';
            }
        }
