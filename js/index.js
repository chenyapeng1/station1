window.onload=function () {
    //下拉列表
    let class_shang=document.getElementsByClassName("class_shang")[0];
    let selection=class_shang.getElementsByClassName("selection");
    let menu_drop=class_shang.getElementsByClassName("menu_drop");
    let shangxia=document.querySelector(".shangxia");
    class_shang.onmouseenter=function(){
        shangxia.style.height="212px";
        shangxia.style.display="block";
        for(let i=0;i<selection.length;i++){
            selection[i].onmouseenter=function(){
                for(let j=0;j<menu_drop.length;j++){
                    menu_drop[j].style.display="none";
                }
                menu_drop[i].style.display="block";
            }
        }
    }
    class_shang.onmouseleave=function(){
        shangxia.style.height=0;
        shangxia.style.display="none";
        for(let i=0;i<selection.length;i++){
            menu_drop[i].style.display="none";
        }
    }
    // for (let i=0;i<selection.length;i++){
    //     selection[i].onmouseenter=function(){
    //         for (let j=0;j<selection.length;j++){
    //             menu_drop[j].style.height=0;
    //         }
    //         menu_drop[i].style.height="212px";
    //         menu_drop[i].style.display="block";
    //     }
    //     selection[i].onmouseleave=function(){
    //         menu_drop[i].style.height=0;
    //     }
    // }

    //头部的js效果
    let top=document.querySelector(".top");
    window.onscroll=function(){
        let th=(document.body.scrollTop||document.documentElement.scrollTop);
        if (th=0){
            top.style.background="rgba(1,143,207,0.0)";
        }
    }

    //首页的轮播图
    let img=document.querySelectorAll(".photo img");
    let p1=document.querySelector(".p1");
    let p2=document.querySelector(".p2");
    let photo=document.querySelector(".photo");
    let point=document.querySelectorAll(".point");
    let t=setInterval(fn,1000);
    let num=0;
    function fn(){
        num++;
        if(num==img.length){
            num=0;
        }
        for (let i=0;i<img.length;i++){
            img[i].style.zIndex=5;
            point[i].style.background="#ABA8B4";
        }
        img[num].style.zIndex=10;
        point[num].style.background="#0D6CBD";
    }
    function fn1(){
        num--;
        if(num<0){
            num=img.length-1;
        }
        for (let i=0;i<img.length;i++){
            img[i].style.zIndex=5;
            point[i].style.background="#ABA8B4";
        }
        img[num].style.zIndex=10;
        point[num].style.background="#0D6CBD";
    }
    photo.onmouseenter=function(){
        clearInterval(t);
    }
    photo.onmouseleave=function(){
        setInterval(fn,2000)
    }
    p1.onclick=function(){
        fn1();
    }
    p2.onclick=function(){
        fn();
    }
    for (let i=0;i<point.length;i++){
        point[i].onclick=function(){
            for (let j=0;j<point.length;j++){
                img[j].style.zIndex=5;
                point[j].style.background="#ABA8B4";
            }
            if (i==num){
                return;
            }
            else if (i<num){
                num=i;
                img[i].style.zIndex=10;
                point[i].style.background="#0D6CBD";
            }
            else if (i>num){
                num=i;
                img[i].style.zIndex=10;
                point[i].style.background="#0D6CBD";
            }
            num=i;
        }
    }
}
