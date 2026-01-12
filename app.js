function setActiveNav(){
document.querySelectorAll('nav a').forEach(a=>{
if(a.href===location.href) a.classList.add('active')
})
}


function mockJoin(team){
alert(`Join request sent to ${team}`)
}


document.addEventListener('DOMContentLoaded', setActiveNav)
