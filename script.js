function show(id){
    let section=document.getElementById(id)
    if(section.style.display==="block"){
        section.style.display="none";
    }else{
        let sections=document.getElementsByClassName('details')
        for(let i=0;i<sections.length;i++){
            sections[i].style.display="none";
        }
        section.style.display="block";
    }
}