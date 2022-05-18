var words = ["rope", "pore", "repo", "red rum", "murder", "listen", "silent", "endeavour"];

var anagrams = {};

for (var i in words) {
    var word = words[i];

    var sorted = word.split("").sort().join("");

    if (anagrams[sorted] != null) {
        anagrams[sorted].push(word);
    } 

    else {
        anagrams[sorted] = [ word ];
    }
}

for (var sorted in anagrams) {
    var words = anagrams[sorted];
    var out = "";
    for (var n in words) {
        out += " " + "["+words[n]+"],";
        sep = "";
    }
    document.writeln(out + " <br />");
}