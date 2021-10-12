checkSize()
window.addEventListener('resize', function(event) {
    checkSize()
}, true)

function checkSize(){

    const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

    if(width <= 810){
        document.getElementById("row").style.display = "grid"
        document.getElementById("projects").setAttribute("style","width:100%")
        document.getElementById("rightcolumn").setAttribute("style","width:100%")
    }else{
        document.getElementById("row").style.display = "table"
        document.getElementById("projects").setAttribute("style","width:73%")
        document.getElementById("rightcolumn").setAttribute("style","width:25%")
    }
}
