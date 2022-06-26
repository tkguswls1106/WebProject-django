var Keyindex=new Array;
var saveindex=0;
var savedate="";
var saverecommend="";
var u_free_name=document.getElementById("free_name");
var u_free_title=document.getElementById("free_title");
var u_free_text=document.getElementById("free_text");
var u_free_file=document.getElementById("free_file");
window.onload =function(){

    Start();
    Announce_example();
}
function Start(){

    if(localStorage.length==0){
        saveindex=0;
        Keyindex[0]=saveindex;
    }
    else{
        var num="";

        var temp= localStorage.getItem("Keyindex");

        for(var i =0; i<temp.length;i++){

            if(temp[i]==','){

                if(Keyindex.length==0){
                    Keyindex[0]=Number(num);
                    saveindex=Keyindex[0];
                    num="";
                }
                else{
                    num=num.substring(1);
                    Keyindex.push(num);
                    num="";
                }

            }

            num+=temp[i];
            if(i+1==temp.length){
                num=num.substring(1);
                Keyindex.push(num);
                num="";

            }

        }
    }
    saveComent();
}
function saveComent(){

    if(Keyindex.length==1){}
    else{
        for(var i =1;i<Keyindex.length;i++){
            var temp;
            Made_comments(Keyindex[i]);

        }

    }
}
function SaveItem(){
         var temp;

         if(u_free_title.value=="제목"){
             alert("제목을 입력하십시오");
             return;
         }

        else if(u_free_name.value=="이름"){
            alert("이름을 입력하십시오");
            return;
        }

        else if(u_free_text.value=="내용을 입력해 주십시오"){
            alert("내용을 입력하십시오");
            return;
        }
        temp=free_name.value+saveindex;
        var date = new Date();
        Keyindex.push(temp);
        localStorage.setItem(temp,u_free_name.value);
        temp=free_name.value+saveindex+'_N';
        localStorage.setItem(temp,saveindex);
        temp=free_name.value+saveindex+'_t';
        localStorage.setItem(temp,u_free_title.value);
        temp=free_name.value+saveindex+'_tt';
        localStorage.setItem(temp,u_free_text.value);
        temp=free_name.value+saveindex+'_R';
        if(saverecommend==""){
            saverecommend=0;
        }
        localStorage.setItem(temp, saverecommend);
        temp=free_name.value+saveindex+'_d';
        if(savedate==""){
            savedate=date.getFullYear()+'. '+(date.getMonth()+1)+'. '+(date.getDay()+5)+'. '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
        }
        localStorage.setItem(temp,savedate);
        saveindex++;
        Keyindex[0]=saveindex;
        localStorage.setItem("Keyindex",Keyindex);
        saverecommend="";
        savedate="";
        Made_comments(Keyindex[Keyindex.length-1]);
}

function ClearAll(){

    for(var i=1;i<Keyindex.length;i++){
        var Id_temp;
         var delete_temp;
          Id_temp=Keyindex[i]+'I';
       delete_temp=document.getElementById(Id_temp);
       delete_temp.remove();
    }

    localStorage.clear();
    Keyindex.splice(0,Keyindex.length);
    Keyindex[0]=0;
    localStorage.setItem("Keyindex",Keyindex);

}
function delete_comments(str_name){
    var Id_temp;
    var delete_temp;
    Id_temp=str_name+'I';
    delete_temp=document.getElementById(Id_temp);
    delete_temp.remove();

    Id_temp=str_name+'_d'
    localStorage.removeItem(Id_temp);
    Id_temp=str_name+'_N'
    localStorage.removeItem(Id_temp);
    Id_temp=str_name+'_t'
    localStorage.removeItem(Id_temp);
    Id_temp=str_name+'_tt'
    localStorage.removeItem(Id_temp);
    Id_temp=str_name+'_R'
    localStorage.removeItem(Id_temp);
    Id_temp=str_name
    localStorage.removeItem(Id_temp);

    for( i=1;i<Keyindex.length;i++){
        if(Keyindex[i]==str_name){
            Keyindex.splice(i,1);
            break;
        }
    }
    localStorage.setItem("Keyindex",Keyindex);
}
function Made_comments(str_name){


    var comment=document.getElementById("comment_list");
    var Torso_div = document.createElement('div');
    var ul_list = document.createElement('ul');
    var ul_list_number = document.createElement('list');
    var ul_list_title = document.createElement('list');
    var ul_list_name = document.createElement('list');
    var ul_list_date = document.createElement('list');
    var ul_list_recommend = document.createElement('list');
    var ul_list_recommend_button = document.createElement('input');
    var ul_list_delete = document.createElement('list');
    var ul_list_delete_button = document.createElement('input');
    var Text_div = document.createElement('div');
    var ul_list_recommend_number = document.createElement('div');

    ul_list_recommend_number.id=str_name+'_Recommend'
    Torso_div.id=str_name+'I';

    ul_list_delete_button.value="삭제";
    ul_list_delete_button.type="button";


    ul_list_recommend_button.setAttribute('type','button');
    ul_list_recommend_button.setAttribute('value','추천');
    ul_list_recommend_button.onclick=function(){recommend_comments(str_name)};


    ul_list_delete_button.setAttribute('type','button');
    ul_list_delete_button.setAttribute('value','삭제');
    ul_list_delete_button.onclick=function(){delete_comments(str_name)};
    if(localStorage.getItem(str_name)=="운영자"){
        ul_list_delete_button.disabled='disabled';
    }


    temp_str=str_name+'_t'
    Torso_div.style.cssText='border: solid;border-bottom: none;padding-bottom: 30px;background-color: rgb(246, 246, 246);';
    ul_list.style.cssText='list-style: none;padding: 0;font-size: 20px';
    ul_list_number.style.cssText='display:inline-block ;width: 12.4%;margin-left: 35px;';
    ul_list_title.style.cssText='display:inline-block ;width: 35.7%;';
    ul_list_name.style.cssText='display:inline-block ;width: 15.5%';
    ul_list_date.style.cssText='display:inline-block ;width: 15.3%';
    ul_list_recommend.style.cssText='display:inline-block ;width: 13%';
    ul_list_delete.style.cssText='display:inline-block';
    Text_div.style.cssText='overflow:auto; width: 1522px;height: 150px;border: solid;margin: 0 auto;';
    ul_list_title.innerHTML=localStorage.getItem(temp_str);
    ul_list_name.innerHTML=localStorage.getItem(str_name);
    ul_list_recommend_number.style.cssText='display:inline-block ;margin-left: 25px';

    temp_str=str_name+'_N'
    ul_list_number.innerHTML=localStorage.getItem(temp_str);
    temp_str=str_name+'_d'
    ul_list_date.innerHTML= localStorage.getItem(temp_str);
    temp_str=str_name+'_tt'
    var lines=localStorage.getItem(temp_str).split("\n");
    var result="<p>"
        for(var i= 0;i<lines.length;i++){
            result+=lines[i]+"<br />";
        }
        result+="</p>";
    Text_div.innerHTML=result;
    temp_str=str_name+'_R'
    ul_list_recommend_number.innerHTML=localStorage.getItem(temp_str).split("\n");


    ul_list_recommend.append(ul_list_recommend_button,ul_list_recommend_number);

    ul_list_delete.appendChild(ul_list_delete_button);
    ul_list.append(ul_list_number,ul_list_title,ul_list_name,ul_list_date,ul_list_recommend,ul_list_delete);
    Torso_div.append(ul_list,Text_div);

    comment.appendChild(Torso_div);

}
function recommend_comments(str_name){
    temp=str_name+'_R'
    number=document.getElementById(str_name+'_Recommend');
    localStorage.setItem(temp,Number(localStorage.getItem(temp))+1);
    number.innerHTML=localStorage.getItem(temp)
}
function Announce_example(){
  if(localStorage.length==1||localStorage.length==0){
    u_free_name.value="운영자"
    u_free_title.value="안녕하세요"
    u_free_text.value="Datawiki에 오신 것을 환영합니다."
    saverecommend = 10
    savedate = "2022. 5. 01. 09:00:00"
    SaveItem();

    u_free_title.value="관리자소개"
    u_free_text.value="Datawiki의 관리자를 소개 합니다."
    saverecommend = 5
    savedate = "2022. 5. 05. 09:00:00"
    SaveItem();

    u_free_title.value="최신 뉴스"
    u_free_text.value="Datawiki는 상명대 천안캠퍼스에서 주관하는 데이터 공유 사이트 입니다."
    saverecommend = 22
    savedate = "2022. 5. 06. 09:00:00"
    SaveItem();

    u_free_title.value="공지사항"
    u_free_text.value="Datawiki가 새롭게 단장됩니다. 더욱 개선된 사이트를 기대해 주세요."
    saverecommend = 100
    savedate = "2022. 5. 08. 09:00:00"
    SaveItem();

    u_free_title.value="추가 공지 사항"
    u_free_text.value="Datawiki를 새롭게 개선하기 위한 메니저를 공모합니다."
    saverecommend = 1
    savedate = "2022. 5. 10. 09:00:00"
    SaveItem();

    u_free_title.value="2022년 데이터위키 공모전"
    u_free_text.value="2022년 데이터 위키는 이미지 인식 주제로 진행합니다."
    saverecommend = 44
    savedate = "2022. 5. 12. 09:00:00"
    SaveItem();

    u_free_title.value="공모전 종료 안내"
    u_free_text.value="2022년 데이터 위키 공모전이 성공리에 마감 되었습니다. "
    saverecommend = 50
    savedate = "2022. 5. 14. 09:00:00"
    SaveItem();

    u_free_title.value="2023년 데이터 위키 공모전"
    u_free_text.value="2023년 데이터 위키 공모전을 소개 합니다."
    saverecommend = 49
    savedate = "2022. 5. 16. 09:00:00"
    SaveItem();

    u_free_title.value="학기 종료 안내"
    u_free_text.value="22년 1학기 종료까지 이제 6주 남았습니다."
    saverecommend = 17
    savedate = "2022. 5. 18. 09:00:00"
    SaveItem();

    u_free_title.value="튜토리얼 공지"
    u_free_text.value="tensorflow와 keras의 라이브러리를 이용하여 같이 공부해 봅시다."
    saverecommend = 84
    savedate = "2022. 5. 19. 09:00:00"
    SaveItem();

    u_free_title.value="신규 데이터 요청"
    u_free_text.value="새로운 데이터가 필요하신 분은 언제든 요청 바랍니다."
    saverecommend = 3
    savedate = "2022. 5. 21. 09:00:00"
    SaveItem();

    u_free_name.value="이름"
    u_free_title.value="제목"
    u_free_text.value="내용을 입력해 주십시오"
    }
}
