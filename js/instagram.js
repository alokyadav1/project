alert("Don't know why eventListener is not working\n If you know please tell me")
var more = document.getElementsByClassName('more');
var tag = document.getElementsByClassName('tag');
for(let i = 0;i< more.length;i++){
    more[i].addEventListener("click",function(){
        more[i].parentElement.style.textOverflow = "initial";
        more[i].parentElement.style.whiteSpace = "initial";
        more[i].style.display = "none";
        tag[i].style.display = "block";
    });
}
var ellipsis = document.getElementsByClassName('fa-ellipsis-v');
var modal = document.getElementById('modal');
for(let i = 0;i<ellipsis.length;i++){
    ellipsis[i].addEventListener("click",function(){
       modal.style.display = "block";
       document.body.style.overflow = "hidden";
    })
}
window.onclick = function(event){
    if(event.target == modal){
        this.modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

var img = document.querySelectorAll(".post-body img");
var like = document.getElementsByClassName('fa-heart');
for(let j = 0;j<like.length;j++){
    img[j].addEventListener("dblclick",function(){
        if(like[j].style.color == "red"){
            like[j].classList.remove("fa");
            like[j].classList.add("far");
            like[j].style.color= "black";
        }
        else{
            like[j].classList.remove("far");
            like[j].classList.add("fa");
            like[j].style.color= "red";
        }
    })
}
