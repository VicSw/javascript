/**
 * Created by sunwei on 2017/6/14.
 */
window.onload=function () {
    var vDiv=document.getElementById("divMenu");

    vDiv.onmouseover=function () {
        StartMove(0);
    };

    vDiv.onmouseout=function () {
        StartMove(-200);
    }
}

var timer=null;
function StartMove(temp) {
    clearInterval(timer);
    var vDiv=document.getElementById("divMenu");
    timer=setInterval(function () {
        var speed=(temp-vDiv.offsetLeft)/20;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        if(vDiv.offsetLeft==temp){
            clearInterval(timer);
        }else {
            vDiv.style.left=vDiv.offsetLeft+speed+'px';
        }
    },30)

}


