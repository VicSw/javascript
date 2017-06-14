/**
 * Created by sunwei on 2017/6/14.
 */
window.onload=function () {
    var vDiv=document.getElementById("divMenu");

    vDiv.onmouseover=function () {
        StartMove(10,0);
    };

    vDiv.onmouseout=function () {
        StartMove(-10,-200);
    }
}

var timer=null;
function StartMove(speed,temp) {
    clearInterval(timer);
    var vDiv=document.getElementById("divMenu");
        timer=setInterval(function () {
           if(vDiv.offsetLeft==temp){
               clearInterval(timer);
           }else {
               vDiv.style.left=vDiv.offsetLeft+speed+'px';
           }
        },30)

}


