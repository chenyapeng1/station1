window.onload=function () {
    let class_shang=document.getElementsByClassName("class_shang")[0];
    let selection=class_shang.getElementsByClassName("selection");
    let menu_drop=class_shang.getElementsByClassName("menu_drop");
    for (let i=0;i<selection.length;i++){
        selection[i].onmouseenter=function(){
            for (let j=0;j<selection.length;j++){
                menu_drop[j].style.height=0;
            }
            menu_drop[i].style.height="212px";
            menu_drop[i].style.display="block";
        }
        selection[i].onmouseleave=function(){
            menu_drop[i].style.height=0;
        }
    }

    //首页的轮播图
    let img=document.querySelectorAll(".photo img");
    console.log(img);

}
