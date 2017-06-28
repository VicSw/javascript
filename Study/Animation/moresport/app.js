/**
 * Created by sw on 2017/6/27.
 */
window.onload=function () {
    var aLi=document.getElementsByTagName('li');
    for(var i=0;i<aLi.length;i++){
        aLi[i].timer=null;
        aLi[i].onmouseover=function () {
            StartMove(this,400);
        }
        aLi[i].onmouseout=function () {
            StartMove(this,200);
        }
    }
}
//var timer=null;
function StartMove(obj,temp) {
    clearInterval(obj.timer);
    obj.timer=setInterval(function () {
        var speed=(temp-obj.offsetWidth)/10;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        if(obj.offsetWidth==temp){
            clearInterval(obj.timer);
        }else {
            obj.style.width=obj.offsetWidth+speed+'px';
        }
    },30)
}