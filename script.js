const button = document.querySelector('button');
const h1 = document.querySelector('h1');
const h3 = document.querySelector('h3');
const fonts=['Arial, sans-serif','Gill Sans, sans-serif','sans-serif','Palatino, serif','New Century Schoolbook, serif','Fixed, monospace','Courier New, monospace','Coronetscript, cursive','Zapf Chancery, cursive','Lucidatypewriter, monospace','Andale Mono, monospace']
const quo = [
     ["The purpose of our lives is to be happy.", '- Dalai Lama'],
     ["Live as if you were to die tomorrow. Learn as if you were to live forever.", " -Mahatma Gandhi"],
     ["All the world’s a stage, and all the men and women merely players.", ' -William Shakespeare'],
     ["Let us sacrifice our today so that our children can have a better tomorrow.", " -A. P. J. Abdul Kalam"],
     ["There is nothing permanent except change.", ' -Heraclitus'],
     ["It is better to be feared than loved, if you cannot be both.", ' -Niccolo Machiavelli'],
     ["All that we see or seem is but a dream within a dream.", '-Edgar Allan Poe'],
     ['Lord, make me an instrument of thy peace. Where there is hatred, let me sow love.', ' -Francis of Assisi'],
     ['If you cannot do great things, do small things in a great way.', ' -Napoleon Hill'],
     ['All our dreams can come true, if we have the courage to pursue them.', ' -Walt Disney'],
     ['The secret of getting ahead is getting started.', ' -Mark Twain'],
     ['Only the paranoid survive.', ' -Andy Grove'],
     ['It’s hard to beat a person who never gives up.', ' -Babe Ruth'],
    ['If people are doubting how far you can go, go so far that you can’t hear them anymore.',' -Michele Ruiz'],
    ['Success is not final, failure is not fatal: it is the courage to continue that counts.',' -Winston Churchill']
]

button.addEventListener('click', function () {
    const color = quoteColor();
    document.body.style.background = color;
    let n = Math.floor(Math.random() * quo.length);
    let font = Math.floor(Math.random() * fonts.length);
    h1.style.fontFamily = fonts[font];
    h1.style.color = color;
    h1.textContent = '"' + quo[n][0];
    h3.style.color = quoteColor();
    h3.innerText = quo[n][1];
    
})

function quoteColor() {
    const r = Math.floor(Math.random() * 75);
    const g = Math.floor(Math.random() * 115);
    const b = Math.floor(Math.random() * 50);
        return `rgb(${r}, ${g}, ${b})`;
}
