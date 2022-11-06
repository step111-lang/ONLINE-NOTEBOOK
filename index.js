 const diz=document.querySelector(".displ");
const bodyp=document.querySelector(".bodyp");
  const menubtn=document.querySelector(".menubtn");
   const header=document.querySelector(".header");
  const menu=document.querySelector(".menum");
 const paret=document.querySelector(".paretcontainer");
 const pp=paret.getElementsByClassName("pp");
var not=document.getElementById("not")
      var inp = document.getElementById("ipt")
      var butto = document.getElementById("butto")
      var display = document.getElementById("display")
      var timer=setTimeout(fig,1000);
      var ni=document.getElementsByTagName("li")
      let g=0
var arr=[];
var pass=[1101011110100011];
for(let i=0;i<pp.length;i++){
    pp[i].addEventListener("click",(e)=>{
    e.target.classList.add("tp"); 
    menu.classList.add("menump");
    arr.push(e.target.innerHTML);
      function gok(ari){
     let tem="";
    for(let j=0;j<ari.length;j++){
      tem+=`${ari[j]}`;
    }
      return tem;
}
      document.querySelector(".displ").innerHTML=`${gok(arr)}`;
     for(let k=0;k<pass.length;k++){
      if(pass[k]==diz.innerHTML){ 
       menubtn.innerHTML="CORRECT ";
       header.style.background="green";
       menubtn.style.background="green";
       const timer=setTimeout(di,2000); 
        function di(){ 
       bodyp.style.display="block";
       paret.style.display="none";
         clearTimeout(timer);
       }   
      }
     }
     if(diz.innerHTML.length >=18){
         menubtn.innerHTML="MAX LIMIT";
         menubtn.style.background="lightblue";
       }
        
 });
}

   
      
      function fig(){
          clearTimeout(timer);
      }
      
      butto.addEventListener("click",(e)=>{
         if(inp.value !=""){
         
          e.preventDefault()
          not.innerHTML="UPLOADED"
          
        var mql = document.createElement("li")
        mql.textContent = inp.value;
        
        displa.appendChild(mql);
        var spa=document.createElement("span")
         spa.setAttribute("class","delit");
        spa.textContent="DELETE";
        mql.appendChild(spa);
        
         }
        
        var spas=document.getElementsByTagName("span")
         for(let i=0;i<spas.length;i++){
             spas[i].addEventListener("click",(e)=>{
             e.target.parentElement.remove()
             not.style.transform="scale(1)";
             not.innerHTML="DELETED SUCCESSEFFULY";
             fig()
             
         });}
         not.addEventListener("click",()=>{
          not.style.transform="scale(0)"
          
          
         });
         inp.onkeydown=function(){
          not.style.transform="scale(1)";
          not.innerHTML="TYPING.....";
          
         
         }
         
        
        inp.value=""
        
      });
   
