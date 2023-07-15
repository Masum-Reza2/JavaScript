let jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "What's the best thing about Switzerland? I don't know, but the flag is a big plus!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "Why don't eggs tell jokes? Because they might crack up!",
    "How does a penguin build its house? Igloos it together!",
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why don't seagulls fly over the bay? Because then they would be bagels!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call a snowman with a six-pack? An abdominal snowman!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "Why did the stadium get hot after the game? All of the fans left!",
    "Why don't oysters donate to charity? Because they are shellfish!",
    "Why couldn't the leopard play hide and seek? Because he was always spotted!",
    "What did one elevator say to the other elevator? I think I'm coming down with something!",
    "Why did the coffee file a police report? It got mugged!",
    "How do you catch a squirrel? Climb a tree and act like a nut!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "Why did the math book look sad? Because it had too many problems!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What did the grape say when it got stepped on? Nothing, it just let out a little wine!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why don't eggs tell jokes? Because they might crack up!",
    "What do you call a snowman with a six-pack? An abdominal snowman!",
    "Why don't seagulls fly over the bay? Because then they would be bagels!",
    "How do you organize a space party? You planet!",
    "What do you call fake spaghetti? An impasta!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "Why did the stadium get hot after the game? All of the fans left!",
    "Why don't oysters donate to charity? Because they are shellfish!",
    "Why couldn't the leopard play hide and seek? Because he was always spotted!",
    "What did one elevator say to the other elevator? I think I'm coming down with something!",
    "Why did the coffee file a police report? It got mugged!",
    "How do you catch a squirrel? Climb a tree and act like a nut!",
];//100 jokes inside this array

let my_Func = () => {
    let writeMe = document.getElementById('writeMe');
    let ran_Index = Math.floor(Math.random() * jokes.length);
    let ran_Joke = jokes[ran_Index];
    writeMe.innerHTML = ran_Joke;
}

let button = document.getElementsByTagName('button');
let btntgl = () => button[0].classList.toggle('blue');
let timer1 = setInterval(btntgl,400)