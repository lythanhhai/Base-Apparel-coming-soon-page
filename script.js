
const selectButton = document.getElementById("buttonEmail1");
const input = document.getElementById("work__left-form--input");
const error = document.getElementById("error1");
const unvalidEmail = document.getElementById("unvalidEmail1");


selectButton.addEventListener("click",function()
{
    
    if(input.value.includes("@")!=true || input.value.includes(".")!=true || input.value!="")
    {
       error.style.display = "block";
       unvalidEmail.style.display = "block";
       error.style.transition = "all 1s linear";
    }
    else 
    {

    }
});

input.addEventListener("click",function()
{
    error.style.display = "none";
    unvalidEmail.style.display = "none";
});