var NumberOfWords = 3

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "WW1"
words[2] = "WW2"
words[3] = "Minecraft"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}