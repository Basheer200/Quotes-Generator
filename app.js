const quote = document.querySelector('.quotes');
const person = document.querySelector('.person');
const btn = document.querySelector('#new-quote');
const quotes = [
{
    quote:`"Being happy never goes out of style."`,
    person:`Lilly Pulitzer` 
},{
    quote:`"Life is either a great adventure or nothing."`,
    person:`Helen Keller`
},{
    quote:`"You are the sum total of everything you've ever seen, heard, eaten, smelled, been told, forgot - it's all there. Everything influences each of us, and because of that I try to make sure that my experiences are positive."`,
    person:`Maya Angelou`
},{
    quote:`"All you need in this life is ignorance and confidence; then success is sure."`,
    person:`Mark Twain` 
},{
    quote:`"I have very strong feelings about how you lead your life. You always look ahead, you never look back." `,
    person:`Ann Richards`   
},{
    quote:`"Never lose sight of the face that the most important yard stick to your success is how you treat other people."`,
    person:`Barbara Bush`
}, {
    quote:`"All your life, you will be faced with a choice. You can choose love or hate…I choose love."`,
    person:`Johnny Cash`
},];


btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()* quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
    quote.style.fontSize = '30px';
    person.style.fontSize = '30px';
    quote.style.lineHeight = '30px';
    person.style.lineHeight = '30px';
});

const container = document.querySelector('.container');
container.style.backgroundColor='white';
container.style.minHeight = '23rem';
container.style.maxHeight = '25rem';
// dealing with title 
const title = document.querySelector(".title");
title.innerHTML = " Js Quotes Generator";
title.style.maxWidth = "30%";
title.style.fontSize = "30px";
title.style.fontWeight = "bold";
title.style.maxWidth = "30%";
title.style.marginTop = "100px";
title.style.marginLeft = "30rem";
title.style.padding = "10px";
