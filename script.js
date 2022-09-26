document.getElementById("calculateLove").onClick = function() {calculateLove()};

function calculateLove(event){
    document.getElementById("calculateLove").innerHTML = "The final result of love Bot after much calculation is : " + Math.floor(Math.random() * 101) + '%' ;

    document.getElementByTagName("body").style.backgroundImage = "url(back.jpg)";
}