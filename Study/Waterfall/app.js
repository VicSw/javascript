/**
 * Created by sunwei on 2017/6/28.
 */
window.onload=function(){
    imgLocation("container","box");
}
function imgLocation(parent,content){
//将父级下所有的content全部取出
    var cparent =document.getElementById(parent);
    var ccontent=getChildElement(cparent,content);


//图片宽度
    var imgWidth=ccontent[0].offsetWidth;
//放置多少图片
    var num=Math.floor(document.documentElement.clientWidth/imgWidth);
//设置最外层div宽度
    cparent.style.cssText="width:"+imgWidth*num+"px;margin:0 auto";
//console.log(cols);

//存放每个图片盒子的高度
    var BoxHeightArr=[];
    for(var i=0;i<ccontent.length;i++){
//num一排放几个图片 i<num就是每一排内的
        if(i<num){
            BoxHeightArr[i]=ccontent[i].offsetHeight;//第一排每个盒子的高度
        }else {
            var minheight=Math.min.apply(null,BoxHeightArr);//得到第一排最小的高度
            var minIndex=getminHeightLocation(BoxHeightArr,minheight);//得到第几张图片是高度最矮的

            //设置样式
            ccontent[i].style.position="absolute";//绝对位置
            ccontent[i].style.top=minheight+"px";//设置高度
            //ccontent[i].left=minIndex*ccontent[i].offsetWidth+"px";//设置居左
            //也可以写成
            ccontent[i].style.left=ccontent[minIndex].offsetLeft+"px";
            BoxHeightArr[minIndex]=BoxHeightArr[minIndex]+ccontent[i].offsetHeight;//最矮位置图片高度重新计算
        }

    }

}

//得到高度最矮的图片的位置，第几个；
function getminHeightLocation(BoxHeightArr,minheight){
    for(var i in BoxHeightArr)
    {
        if(BoxHeightArr[i]==minheight){
            return i;
        }
    }

}

function getChildElement(parent,content){
    var contentArr=[];
    var allcontent=parent.getElementsByTagName("*");
    for(var i=0;i<allcontent.length;i++){
        if(allcontent[i].className==content){
            contentArr.push(allcontent[i]);
        }
    }

    return contentArr;
}