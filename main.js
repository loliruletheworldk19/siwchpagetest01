function myFunctionlight() {
    var CheckBox1 = document.getElementById("CheckBox1");
    var text1A = document.getElementById("text1A");
    var text1B = document.getElementById("text1B");

    if (CheckBox1.checked == true)
    {
        text1A.style.display = "block";
        text1B.style.display = "none";
        window.location = "page01.html";
    } 
    else 
    {
        text1A.style.display = "none";
        text1B.style.display = "block";
    };

}

function myFunctionlight2() {
    var CheckBox4 = document.getElementById("CheckBox4");
    var text4A = document.getElementById("text4A");
    var text4B = document.getElementById("text4B");

    if (CheckBox4.checked == true)
    {
        text4A.style.display = "block";
        text4B.style.display = "none";
        window.location = "page02.html";
    } 
    else 
    {
        text4A.style.display = "none";
        text4B.style.display = "block";
    };
}

  

