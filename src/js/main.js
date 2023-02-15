// import markdown function
import { parseMarkdown } from "./markdown.js"
// editor
let editor = document.getElementById("editor");
editor.addEventListener("keyup", parse, false);
// parse mode
let parseModeButton = document.getElementById('parseMode');
let parseHtml = false;
function updateParseMode() {
    parseModeButton.innerText = parseHtml ? "parse text" : "parse HTML";
}
parseModeButton.addEventListener("click", function (e) {
    e.preventDefault();
    parseHtml = parseHtml ? false : true;
    updateParseMode();
    parse();
}, false);

//actual parsing
function parse() {
    let output = document.getElementById("parsed");
    console.log("parsing input")
    output[parseHtml ? "innerHTML" : "innerText"] = parseMarkdown(editor.innerText);
};

//onload init parse
updateParseMode();
parse();