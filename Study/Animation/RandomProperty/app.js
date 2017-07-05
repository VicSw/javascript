/**
 * Created by sw on 2017/7/3.
 */
window.onload=function(){
      var aLi=document.getElementsByTagName("li");
      for(var i=0;i<aLi.length;i++){
          aLi[i].timer=null;
          aLi[i].styleType="";
          let num=i;
          if(num%2==0){
              aLi[i].styleType="width";
          }else if(num%2!=0){
              aLi[i].styleType="height";
          }
          aLi[i].onmouseover=function () {
              if(this.styleType=="width"){
                  StartMove(this,400);
              }else {
                  StartMove(this,200);
              }
          }
          aLi[i].onmouseout=function () {
              if(this.styleType=="width"){
                  StartMove(this,200);
              }else {
                  StartMove(this,100);
              }

          }
      }
}

function StartMove(obj,temp) {
    clearInterval(obj.timer);
    obj.timer=setInterval(function () {
        var speed=(temp-parseInt(getStyle(obj,obj.styleType)))/10;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        obj.style[obj.styleType]=parseInt(getStyle(obj,obj.styleType))+speed+'px';
    },30)
}

function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];//IE
    }else{
        return getComputedStyle(obj,false)[attr];//火狐
    }
}

