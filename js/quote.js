const loadQuote = () =>{
    fetch('https://api.kanye.rest')
    .then(ref => ref.json())
    .then(data => displayQuote(data))
}

const displayQuote = quote =>{
    const blockQuote = document.getElementById('quote');
    blockQuote.innerHTML = quote.quote;
}

loadQuote();