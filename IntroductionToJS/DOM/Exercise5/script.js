var addParagraph=document.getElementById("add-paragraph");
var removeParagraph=document.getElementById("remove-paragraph");
var container =document.getElementById("container");
var paragraph = document.createElement("p");

//action to be performed when add button is pressed
addParagraph.addEventListener("click",function(){
    var paragraph = document.createElement("p");
    paragraph.setAttribute("class","bg");
    paragraph.innerHTML="Hello this is cool!!";
    container.appendChild(paragraph);

    paragraph.addEventListener("click",function(){
        console.log(paragraph)
       
        paragraph.style.backgroundColor="blue";
        
    })
});



//action to be performed when remove button is pressed
removeParagraph.addEventListener("click",function(){
    if (container.children.length>0){
        container.removeChild(container.lastChild);
    }
})

