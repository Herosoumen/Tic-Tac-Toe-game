var selectrb=document.getElementById('b')
var cells=document.querySelectorAll('td')
 function clearAllcells(){
   for (var i = 0; i < cells.length; i++) {
      cells[i].textContent=''
   }
   }
selectrb.addEventListener('click',clearAllcells)
function changecontent(){
  if(this.textContent===''){
    this.textContent='X'
  }
  else if(this.textContent=='X'){
    this.textContent='O'
  }
  else{
    this.textContent=''
  }
}
   for (var i = 0; i <cells.length; i++) {
    cells[i].addEventListener('click',changecontent)
   }
