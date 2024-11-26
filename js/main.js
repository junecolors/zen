const api_url = 'https://zenquotes.io/api/random'
const quoteContainer = document.querySelector('.quote');
const newBtn = document.querySelector('.new-btn');
const divShape = document.querySelector('.shape');
const inputArea = document.querySelector('textarea');
const fontType = ["RursusCompactMonoMedium", "OuroborosRegular", "VintagePropagandistRegular", "nanookRegular"];


// document.addEventListener('DOMContentLoaded', getQuote)
newBtn.addEventListener('click', getQuote)






async function getQuote() {
    const response = await fetch('http://localhost:3000');
    const data = await response.json();
    console.log(data);

quoteContainer.innerHTML = `<h3>${data[0].q}</h3><p>-${data[0].a}<p>`
divShape.remove();

document.getElementById("quote-container").style.fontFamily = fontType[Math.floor(Math.random() * fontType.length)];

}


