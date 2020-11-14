var filter_buttons = document.querySelectorAll(".filter-tag button");
var filter_item = document.querySelectorAll(".desc .name");
var item = document.querySelectorAll(".item");
var menubar = document.getElementsByClassName('fa-bars')[0];
var nav = document.querySelector(".header nav")
var buttonLen = filter_buttons.length;
var itemLen = filter_item.length;
for(let i = 0; i<buttonLen; i++){
    filter_buttons[i].addEventListener("click", filter);
    filter_buttons[i].myParam = 'this'
}

function filter(ev){
    let caller = ev.currentTarget.innerText
    caller = caller.toLowerCase()
    caller = caller.slice(0, -1)
    for(let j=0; j<itemLen; j++){
        let item = filter_item[j].innerText
        item = item.toLowerCase()
        let parent = filter_item[j].parentNode.parentNode
        if(item.includes(caller) || caller.includes("al")){
            parent.style.display = "initial"
        }
        else{
            parent.style.display = "none"
        }
    }
}

menubar.addEventListener("click", showHideNav);

function showHideNav(){
    if(nav.style.display == "none"){
        nav.style.display = "block"
    }
    else{
        nav.style.display = "none"
    }
}

