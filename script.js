fetch("https://free-quotes-api.herokuapp.com/").then(response => response.json()).then(result => {
        const quoteText = document.querySelector("#quoteElement");
        authorName = document.querySelector(".author"),
        quoteText.innerText = result.quote;
        authorName.innerText = result.author || "No Author";
    });
