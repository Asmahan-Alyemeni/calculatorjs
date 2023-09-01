
var scr = document.getElementById("scr");
var PrevNum =0;
var opertype='';
var val ={prev :null , new :null, total: null}
var listNim=false;

function GetNum(num){
    if(listNim){
        var res ;
        if(val.new){
           
          res =val.new +'' +num;
          val.new= res;
          scr.value =res;

        }else{
            res =val.prev +'' +num;
          val.prev= res;
          scr.value =res;
        }




    }else{
            scr.value =num;
        if(val.prev){
        val.new =num  ; 

    } else{
        
        val.prev =num;
    }
    listNim=true; 
    }
   
  
}



function Getoper(oper){
    console.log(val)
    opertype =oper;
     listNim=false;
}

function calc(){
    console.log('cal',val);
    if(!val.new){
        return;
    }
    if(val.new && val.prev && opertype){
    
      if(opertype === "p"){
        var Newval= Number(val.prev )+ Number(val.new );
        sc.value =Newval;
        val.prev=Newval;
      }
      if(opertype === "m"){
        var Newval= Number(val.prev) -Number(val.new );
        sc.value =Newval;
        val.prev=Newval;
      }
      if(opertype === "mu"){
        var Newval= Number(val.prev )* Number(val.new );
        sc.value =Newval;
        val.prev=Newval;
      }
      if(opertype === "d"){
        var Newval= Number(val.prev) / Number(val.new) ;
        sc.value =Newval;
        val.prev=Newval;
      } 
      if(opertype === "mo"){
        var Newval= Number(val.prev) % Number(val.new) ;
        sc.value =Newval;
        val.prev=Newval;
      
    }
    if(opertype === "t"){
        var Newval= Number(val.prev) ** Number(val.new) ;
        sc.value =Newval;
        val.prev=Newval;
      

}}
listNim = false;
}