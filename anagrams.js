

let anagramObject = {};
const spot = document.getElementById("wordsDiv");

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

function reset() {
    anagramObject = {};
    while (spot.firstChild) {
        spot.removeChild(spot.firstChild);
    }
}

function findAnagrams() {
    if (Object.keys(anagramObject).length) {
        reset();
    }

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const alphabetizedWord = alphabetize(word);

        if (!anagramObject[alphabetizedWord]) {
            anagramObject[alphabetizedWord] = []
        }
        anagramObject[alphabetizedWord].push(word);
    }
    return anagramObject;
}


document.getElementById("findButton").onclick = function () {
    const anagramPossibilities = Object.keys(findAnagrams());

    for (let i = 0; i < anagramPossibilities.length; i++) {
        const alphabetizedWord = anagramPossibilities[i];
        const anagramWords = anagramObject[alphabetizedWord];

        if (anagramWords.length >= 5) {
            const div = document.createElement("div");
            const textContent = document.createTextNode(anagramWords);
            div.appendChild(textContent);
            spot.appendChild(div);
        }
    }
}

