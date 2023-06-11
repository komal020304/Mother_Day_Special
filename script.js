// text file tests
const sleep = (ms) => {
  return new Promise((r) => setTimeout(r, ms));
};
let file_h = document.getElementById("file_h");
let file_button = document.getElementById("file_button");
async function print_file() {
  let r = await fetch("Mom.txt");
  let text = await r.text();
  file_h.textContent = "";
  for (c of text) {
    file_h.textContent += c;
    if (c != " " && c != "*") {
      await sleep(6);
    }
  }
  console.log(text);
}
file_button.onclick = print_file;
