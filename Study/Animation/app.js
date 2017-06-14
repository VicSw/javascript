/**
 * Created by sunwei on 2017/6/14.
 */
window.onload=function () {
    var vDiv=document.getElementById("divMenu");

    vDiv.onmouseover=function () {
        StartMove();
    };

    vDiv.onmouseout=function () {
        EndMove();
    }
}

var timer=null;
function StartMove() {
    clearInterval(timer);
    var vDiv=document.getElementById("divMenu");
        timer=setInterval(function () {
           if(vDiv.offsetLeft==0){
               clearInterval(timer);
           }else {
               vDiv.style.left=vDiv.offsetLeft+10+'px';
           }
        },30)

}
function EndMove() {
    clearInterval(timer);
    var vDiv=document.getElementById("divMenu");
    timer=setInterval(function () {
        if(vDiv.offsetLeft==-200){
            clearInterval(timer);
        }else {
            vDiv.style.left=vDiv.offsetLeft-10+'px';
        }
    },30)

}

