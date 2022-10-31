AOS.init();
const quotes = document.getElementById('quotes');
const authors = document.getElementById('author');
const newQ = document.getElementById('newQ');
const tweetMe = document.getElementById('tweetMe');

let realdata = "";
let quotesdata = "";

const getNewQuotes = () => {
    let rnum = Math.floor(Math.random() * 10);
    quotesdata = realdata[rnum];
    quotes.innerText = `${quotesdata.text}`;
    quotesdata.author === null ? authors.innerText = 'By unknown' : authors.innerText = `By ${quotesdata.author}`;
};
const getQuotes = async () => {
    const api = 'https://type.fit/api/quotes';
    try {
        let data = await fetch(api);
        realdata = await data.json();
        getNewQuotes();
        // console.log(realdata.length);
        // console.log(realdata[10].author);
    } catch (error) {

    }
};

const tweetNow = () => {
    let tweetPost =` https://twitter.com/intent/tweet?text=${quotesdata.text} ${quotesdata.author}`;
    window.open(tweetPost);
}

newQ.addEventListener('click', getQuotes);
tweetMe.addEventListener('click', tweetNow);