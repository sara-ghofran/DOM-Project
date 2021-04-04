const hearts=document.querySelectorAll(".heart")
const minus=document.querySelectorAll(".minus")
const plus=document.querySelectorAll(".plus")
const prices=document.querySelectorAll(".Price-value")
let quant=document.querySelectorAll(".quant")
let check=document.querySelector(".check")
let res=""

for(let i=0;i<hearts.length;i++){
  hearts[i].addEventListener("click",() => {
    if(hearts[i].className==="icon"){
      
      hearts[i].className="clicked"
    } else hearts[i].className="icon"
})
}

for(let i=0;i<minus.length;i++){
  minus[i].addEventListener("click",() => {
    if(quant[i].value!=="0"){
      quant[i].value--
      res=check.value +"-"+ prices[i].innerHTML
      check.value=eval(res)
    } 
})
}

for(let i=0;i<plus.length;i++){
  plus[i].addEventListener("click",() => {
    if(quant[i]){
      quant[i].value++
      res=check.value +"+"+ prices[i].innerHTML
      check.value=eval(res)
      
    } 
})
}
