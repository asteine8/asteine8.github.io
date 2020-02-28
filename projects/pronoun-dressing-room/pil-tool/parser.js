
function initialization() {
    generateTaggedText()
}

function rejoinWords(taggedwords) {
    let fullstring = "";
    for (i in taggedwords) {
        if (taggedwords[i][0].match(/[.,!?/)~]/)) {
            fullstring += taggedwords[i][0];
        }
        else if (i==0) {
            fullstring += taggedwords[i][0];
        }
        else {
            fullstring += " " + taggedwords[i][0];
        }
    }
    return fullstring;
}

function generateTaggedText() {
    let lexer = new Lexer();
    let tagger = new POSTagger();

    let originalText = document.getElementById("input_text").value;
    let pronounSet = document.getElementById("rep_pronoun_sets").value.toLowerCase().split("/");
    let name = document.getElementById("name_box").value.toLowerCase().trim();

    let nameregex = new RegExp(name,'i');
    let subregex = new RegExp(pronounSet[0],'i');

    console.log(subregex);

    let words = lexer.lex(originalText);
    let taggedwords = tagger.tag(words);

    // Go through and label entered name
    for (let w = 0; w < taggedwords.length; w++) {
        if (taggedwords[w][0].match(nameregex)) {
            taggedwords[w][0] = taggedwords[w][0].replace(nameregex,"{name}");
        }
    }

    // Go through and label pronouns
    for (let w = 0; w < taggedwords.length; w++) { 

        // Check for Subjective PRP
        if (taggedwords[w][0].toLowerCase().match(subregex) && taggedwords[w][1].match(/PRP|NN/i)) {
            if (w==0||taggedwords[w-1][1]==".") {
                taggedwords[w][0] = taggedwords[w][0].replace(subregex, "{Sub}");
            } else {
                taggedwords[w][0] = taggedwords[w][0].replace(subregex, "{sub}");
            }
        }

        // Check if personal pronoun
        else if (taggedwords[w][1].match(/prp|prp\$/i)) {

            // Check for Reflexive PRP
            if (taggedwords[w][0].match(pronounSet[4])) {
                taggedwords[w][0] = "{ref}";
            }

            // Check for Posessive PRP (Needs to be not the last word)
            if (w < taggedwords.length-1) {
                // Followed by punct or a conjunction (cc)
                if (taggedwords[w+1][0].match(/[.,?!;-]/i) || taggedwords[w+1][1].match(/cc/i)) {
                    // Check the PRP matches expected pronoun
                    if (taggedwords[w][0].toLowerCase().match(pronounSet[3])) {
                        taggedwords[w][0] = "{pop}";
                    }
                }


            // Check for Possesive Det PRP (Needs to be not the last word)
                else if (taggedwords[w+1][1].match(/NN|RB/i)) {
                    // Check the PRP matches expected pronoun
                    if (taggedwords[w][0].toLowerCase().match(pronounSet[2])) {
                        if (w==0||taggedwords[w-1][1]==".") {
                            taggedwords[w][0] = taggedwords[w][0].replace(subregex, "{Pod}");
                        } else {
                            taggedwords[w][0] = taggedwords[w][0].replace(subregex, "{pod}");
                        }
                    }
                }
            }
            
            // Check for Pos Det with an adjective
            if (w < taggedwords.length-2) {
                if (taggedwords[w+1][1].match(/JJ/i) && taggedwords[w+2][1].match(/NN/i)) {
                    if (taggedwords[w][0].toLowerCase().match(pronounSet[2])) {
                        if (w==0||taggedwords[w-1][1]==".") {
                            taggedwords[w][0] = taggedwords[w][0].replace(subregex, "{Pod}");
                        } else {
                            taggedwords[w][0] = taggedwords[w][0].replace(subregex, "{pod}");
                        }
                    }
                }
            }

            // Check for Objective PRP
            if (w > 0) {
                if (taggedwords[w-1][1].match(/VB|IN/i)) {
                    if (taggedwords[w][0].toLowerCase().match(pronounSet[1])) {
                        taggedwords[w][0] = "{obj}";
                    }
                }
            }
        }
    }

    console.log(taggedwords);

    // document.getElementById("output_text").value = rejoinWords(words);
    document.getElementById("output_text").value = rejoinWords(taggedwords);
}
