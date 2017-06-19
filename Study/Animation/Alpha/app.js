/**
 * Created by sw on 2017/6/19.
 */
window.onload=function () {
    var vDiv=document.getElementById("alphaDiv");
    vDiv.onmouseover=function () {
        StartMove(100);
    }

    vDiv.onmouseout=function () {
        StartMove(30);
    }
};

var timer=null;
var alpha=30;
function StartMove(temp) {
    var vDiv=document.getElementById("alphaDiv");
    clearInterval(timer);
    timer=setInterval(function () {
        var speed=0;
        if(alpha>temp){
            speed=-10;
        }else {
            speed=10;
        }
        if(alpha==temp){
            clearInterval(timer);
        }else {
            alpha+=speed;
            vDiv.style.filter='alpha(opacity:'+alpha+')';
            vDiv.style.opacity=alpha/100;
        }
    },30)
}