var jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I used to play piano by ear, but now I use my hands.",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "How do you organize a space party? You planet!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!"
  ];
let Dis_ran_joke = () =>{
    let Ran_index = Math.floor(Math.random() * jokes.length);
    let ranJoke = jokes[Ran_index];
    document.getElementById("mr").textContent = ranJoke;
}
// let jokes = [
//   "Why don't scientists trust atoms? Because they make up everything!",
//   "I used to play piano by ear, but now I use my hands.",
//   "What do you call a bear with no teeth? A gummy bear!",
//   "Why did the scarecrow win an award? Because he was outstanding in his field!",
//   "What did one wall say to the other wall? I'll meet you at the corner!",
//   "Why did the bicycle fall over? Because it was two-tired!",
//   "How do you organize a space party? You planet!",
//   "Why did the tomato turn red? Because it saw the salad dressing!",
//   "I'm reading a book about anti-gravity. It's impossible to put down!",
//   "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!"
// ];
// let ranIndex = Math.floor(Math.random() * jokes.length);
// let ranJoke = jokes[ranIndex];
// console.log(document.write(ranJoke));