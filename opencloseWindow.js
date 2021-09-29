window.onload = function() {
    var w;
    document.getElementById("open").onclick = function(){
        w = open("newpage.html", "new page" ,"width=400, height=300");
        w.document.body.style.backgroundColor = "green"; // 자식 창의 배경색을 녹색으로 만듦
            w.moveBy(10,20); // 수평 방향(오른쪽) 으로 10px 이동하고 수직방향(아래쪽)으로 20px 이동
            w.moveTo(100,150); // 창의 왼쪽 좌표(100, 150)로 이동
            w.resizeBy(10,20); //너비를 10px 높이를 20px 키운다 
            w.resizeTo(200,150); //너비를 200px, 높이를 150px로 설정한다
            w.scrollBy(0,100); //아래쪽으로 100px 스크롤한다
            w.scrollTo(0,0); //시작 위치로 이동한다

    };
    document.getElementById("close").onclick = function(){
        if(w) w.close();
    };  
};
