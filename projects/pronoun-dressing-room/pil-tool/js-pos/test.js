var shortTestString = "This is some sample text. This text can contain multiple sentences.";

var testString = "Oh, did you hear about Natalie’s newest creation? She made a beautiful painting of a campground that her family took her to back when she was a child. Natalie is sooo talented, I wish I was her. She looked at her";

var lexer = new Lexer();
var tagger = new POSTagger();
var start = new Date().getTime();
var words = lexer.lex(testString);
var tags = tagger.tag(words);
var end = new Date().getTime();
difference = (end - start);

let results = new Array(tags.length).fill("");

for (t in tags) {
	results[t] = tags[t][0] + "/" + tags[t][1];
}

console.log(results.join(" "));

document.getElementById("textholder").innerHTML = results.join(" ");
