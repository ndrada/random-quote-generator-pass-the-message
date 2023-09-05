// QUOTE GENERATOR

function generate(){
    let quotes = {
        "-Jules Renard" : '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."',
        "-Mary Astell" : '"If all men are born free, how is it that all women are born slaves?"',
        "-Virginia Woolf" :'"The history of men’s opposition to women’s emancipation is more interesting perhaps than the story of that emancipation itself."',
        "-Jaclyn Friedman" : "'One of the best ways to free yourself to what you want is to feel secure in your ability to say no to what you don’t.'"
    }

    const authors = Object.keys(quotes);

    const source = authors[Math.floor(Math.random() * authors.length)];

    const cite = quotes[source];

    document.getElementById('quote').innerHTML = cite;
    document.getElementById('author').innerHTML = source;
}

// PASS THE MESSAGE

const messageInput = document.getElementById('message-input');

messageInput.addEventListener("keydown", function(event){
    if(event.key == "Enter")
    getMessage();
})

function getMessage(){
    document.getElementById('message-output').innerHTML = messageInput.value;
    messageInput.value = "";
}