const button = document.querySelector('button');
const h1 = document.querySelector('h1');
const h3 = document.querySelector('h3');
const getRandomQuotes=async ()=> {
    const url = await fetch('https://api.quotable.io/random')
    const data = await url.json()
    h1.textContent = '"' + data.content;
    h3.innerText = data.author;
}
const fonts=['Arial, sans-serif','Gill Sans, sans-serif','sans-serif','Palatino, serif','New Century Schoolbook, serif','Fixed, monospace','Courier New, monospace','Coronetscript, cursive','Zapf Chancery, cursive','Lucidatypewriter, monospace','Andale Mono, monospace','revert']
button.addEventListener('click', function () {
    generatingQuotes();
})
async function generatingQuotes()
{   await getRandomQuotes();
    const color = quoteColor();
    document.body.style.background = color;
    let font = Math.floor(Math.random() * fonts.length);
    h1.style.fontFamily = fonts[font];
    h1.style.color = color;
    h3.style.color = quoteColor();
} 
function quoteColor() {
    const r = Math.floor(Math.random() * 75);
    const g = Math.floor(Math.random() * 115);
    const b = Math.floor(Math.random() * 70);
    return `rgb(${r}, ${g}, ${b})`;
}
