function display(){

    var con = document.getElementById("site_list");

    if(con.style.display=='none'){
        con.style.display='block';
    }

    else{
        con.style.display='none';

    }
}
function ShowSlide(){
    var slide_length=document.getElementsByName('slide').length;

    for(var i=0;i<slide_length;i++ ){
         if(document.getElementsByName('slide')[i].checked==true){
             var slide_ = document.getElementsByName('slide')[i].value;
          }
     }



    if(slide_=="sl1"){
        document.getElementById('slide01').checked=false;
        document.getElementById('slide02').checked=true;
    }
    else if(slide_=="sl2"){
        document.getElementById('slide02').checked=false;
        document.getElementById('slide03').checked=true;
    }

    else if(slide_=="sl3"){
        document.getElementById('slide03').checked=false;
        document.getElementById('slide04').checked=true;
    }
    else if(slide_=="sl4"){
        document.getElementById('slide04').checked=false;
        document.getElementById('slide05').checked=true;
    }

    else if(slide_=="sl5"){
        document.getElementById('slide05').checked=false;
        document.getElementById('slide01').checked=true;
    }

}
setInterval(ShowSlide,5000);