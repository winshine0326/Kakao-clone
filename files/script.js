
// 헤더 서비스 호버
var survice = document.getElementById("survice");
var headsubdiv = document.getElementById("headsubdiv");
var headsubul = document.getElementById("headsubul");

survice.addEventListener('mouseover',()=>{
  headsubdiv.style.maxHeight='85px';
  headsubul.style.visibility='visible'
})
survice.addEventListener('mouseout',()=>{
    headsubdiv.style.maxHeight='0px';
    headsubul.style.visibility='hidden';
})

headsubul.addEventListener('mouseover',()=>{
    headsubdiv.style.maxHeight='85px';
    headsubul.style.visibility='visible'
  })
headsubul.addEventListener('mouseout',()=>{
    headsubdiv.style.maxHeight='0px';
    headsubul.style.visibility='hidden';
})
