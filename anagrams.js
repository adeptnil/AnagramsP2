

var anagramObject = {


};


function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}



document.getElementById("findButton").onclick = function (){
    var typedText = document.getElementById("input").value;
    var spot = document.getElementById("wordsDiv");

    for (i = 0; i < words.length; i ++){
        var store = words[i];
        if(alphabetize(typedText) == alphabetize(store)){
            console.log(store)

            // var span = document.createElement("span");
            // var textContent = document.createTextNode(store + " ");
            // span.appendChild(textContent);
            // spot.appendChild(span);
        }
    }
}
