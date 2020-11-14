var bar;
var close;
function show(){
    bar = document.getElementById('bar');
    bar.style.left = "0";
    document.body.style.overflow = "hidden";
    bar.style.overflow = "auto";
}

function hide(){
    bar.style.left = "-100%";
    document.body.style.overflow = "auto";
   
}

function load(){
    setTimeout(loader,1000);
}
function loader(){
    var loader = document.getElementById('loader');
    var main = document.getElementById('main');
    loader.style.display = "none";
    main.style.display = "block";
}
function detail(p){
    var modal = document.getElementById('modal');
    modal.style.top = "0";
    document.body.style.overflow = "hidden";
    modal.style.overflow = "auto";
    var overviewContent = document.getElementById('overview-content');
    var featureContent = document.getElementById('feature-content');
    var ctn = p.parentNode.parentNode.innerHTML;
    overviewContent.innerHTML = ctn;
    featureContent.innerHTML = ctn;
}
function detailClose() {
    var modal = document.getElementById('modal');
    modal.style.top = "-200%";
    var content = document.getElementById('overview-content');
    content.innerHTML = "";
    document.body.style.overflow = "auto";
}

function heart(h){
    if(h.style.color == "red")
        h.style.color = "black";
    else
        h.style.color = "red";
}

function overview(o){
    var features = document.getElementById('features');
    var featureCtn = document.getElementById('feature-content');
    var overviewCtn = document.getElementById('overview-content');
    overviewCtn.style.display = "block";
    features.style.borderBottom = "none";
    featureCtn.style.display = "none";
    o.style.borderBottom = "2px solid #2874f0";
}

function features(f){
    var overview = document.getElementById('overview');
    var featureCtn = document.getElementById('feature-content');
    var overviewCtn = document.getElementById('overview-content');
    overviewCtn.style.display = "none";
    featureCtn.style.display = "block";
    overview.style.borderBottom = "none";
    f.style.borderBottom = "2px solid #2874f0";

}
