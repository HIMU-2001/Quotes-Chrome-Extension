fetch("http://www.boredapi.com/api/activity/").then(response => response.json()).then(result => {
        const Text = document.querySelector("#text");
        Text.innerText = result.activity;
    });
