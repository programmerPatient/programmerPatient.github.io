
function opensidebar(){
    var sidebar=document.getElementById("sidebar");
    sidebar.style.width=20+"%";
}
function closesidebar(){
    var sidebar=document.getElementById("sidebar");
    sidebar.style.width=0;
}
document.getElementById("closeSidebar").onclick=closesidebar;
var t=0;//用于记录每次轮播到第几个位子
function opentanchuang(i){
    var tanchuang=document.getElementsByClassName("tanchuang");
    var main=document.getElementById("main");
    var radius=document.getElementsByClassName("radius");
    for(var j=0;j<tanchuang.length;j++) {="" tanchuang[j].style.top="-20+"%";" tanchuang[j].style.opacity="0;" radius[j].style.backgroundcolor="rgb(131, 128, 123)" ;="" tanchuang[j].style.backgroundcolor="" }="" tanchuang[i].style.top="40+"%";" tanchuang[i].style.opacity="1;" if(i="=0){main.style.backgroundColor="";radius[i].style.backgroundColor="rgb(214," 211,="" 211)";}="" t="i;" var="" radius="document.getElementsByClassName("radius");" radiuslength="radius.length;" for(let="" i="0;i<radiusLength;i++){" radius[i].onclick="function(){opentanchuang(i)};" setinterval(function(){="" 实现轮播效果，每过4秒轮播一次="" if(t="">3){t=0}
opentanchuang(t);
t++;
},4000);
document.getElementById("openenter").onclick=function (){//打开登陆框
    document.getElementById("enter").style.top=0;
}
function closeenter(){//关闭登陆框
    var enter=document.getElementById("enter");
    enter.style.top=-100+"%";
}
document.getElementById("closeenter").onclick=closeenter;//关闭管理员登陆界面
function login(){
    var text=document.getElementsByName("name");
    var pass=document.getElementsByName("pasword");
    if(text[0].value=="马力"&&pass[0].value=="123456"){
        var Administrator=document.getElementById("Administrator");
        Administrator.style.display="block";
        document.querySelector("canvas").style.display="none";
        closeenter();//关闭登陆界面
        closesidebar();//关闭侧边栏
        /*打开管理员界面后，隐藏所有的博客*/
        var blogscontent=document.getElementsByClassName("blogs-content");
        for(var i=0;i<blogscontent.length;i++) {="" blogscontent[i].style.display="none" ;="" }="" else{="" alert("账号或密码出错，请重新输入");="" text[0].value="" pass[0].value="" document.getelementbyid("login").onclick="login;" function="" closeadministrator(){="" 关闭管理员界面="" var="" administrator="document.getElementById("Administrator");" administrator.style.display="none" document.queryselector("canvas").style.display="block" *关闭管理员界面后，显示所有的博客*="" blogscontent="document.getElementsByClassName("blogs-content");" for(var="" i="0;i<blogscontent.length;i++)" document.getelementbyid("closeadministrator").onclick="closeAdministrator;" k="0;" addblogs(){="" blogs="document.createElement("div");" blogs.classname="blogs-content" biaoti="document.getElementById("text");" textarea="document.querySelector("textarea");" newdate="new" date();="" 上传自己新添加博客的标题、文本和时间，其中由于月份默认是从0-11月所以要加一才是当前的月份="" blogs.innerhtml="<h1>" +biaoti.value+"<="" h1="">"+"\n"+"<p>"+textarea.value+"</p>"+"<span>"+newDate.getFullYear()+"年"+(newDate.getMonth()+1)+"月"+newDate.getDate()+"日"+newDate.getHours()+"时"+newDate.getMinutes()+"分"+newDate.getSeconds()+"秒"+"</span>";
    var blogsone=document.getElementsByClassName("blogs-content");
    //document.body.appendChild(blogs);
    if(blogsone.length==0){
        document.body.insertBefore(blogs,blogsone[0]);
        //在blogsone之前插入新加入的结点blogs
    }
    else{
    //如果初始状态一篇博客都没有则会在盒子Administrator之前插入博客
        var a=document.getElementById("Administrator");
         document.body.insertBefore(blogs,a)
    }
    /*添加博客后，隐藏所有的博客*/
    var blogscontent=document.getElementsByClassName("blogs-content");
    for(var i=0;i</blogscontent.length;i++)></tanchuang.length;j++)>