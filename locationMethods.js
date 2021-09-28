// 해당 URL이 가리키는 문서를 읽어들임
location.href= "http://www.gilbut.co.kr/";
location.assign("http://www.gilbut.co.kr/");

//URL이 가리키는 문서를 읽어들일때 이력을 남기지 않으려면 replace 메서드를 사용
location.replace("http://www.gilbut.co.kr/");

setTimeout(function(){
    location.replace("/book/bookList.aspx");
},3000);

location.search = "some data";
//URL 끝에 "?some%20data"를 덧붙여 서버에 보낸다
