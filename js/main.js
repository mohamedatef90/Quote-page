var quotes = [
    { quote: "A room without books is like a body without a soul.", author: "-- Marcus Tullius Cicero" },
    { quote: "The only way to do great work is to love what you do.", author: "-- Steve Jobs" },
    { quote: "Be the change that you wish to see in the world.", author: "-- Mahatma Gandhi" },
    { quote: "If you tell the truth, you don't have to remember anything.", author: "-- Mark Twain" },
    { quote: "Always forgive your enemies; nothing annoys them so much.", author: "-- Oscar Wilde" }
  ];
  
  var quoteContainer = document.getElementById("quote-container");
  var authorContainer = document.getElementById("author");
  
  function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex].quote;
    var randomAuthor = quotes[randomIndex].author;
    
    quoteContainer.innerHTML = randomQuote;
    authorContainer.innerHTML = randomAuthor;
  }
  
  