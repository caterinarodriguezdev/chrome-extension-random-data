chrome.tabs.onCreated.addListener(async () => {  
    await fetch("https://662d90c8a7dda1fa378ad9f1.mockapi.io/codebywoman/frases").then(async (resp) => {
        const programmingFacts = await resp.json();
    
        const randomIndex = Math.floor(Math.random() * programmingFacts.length);
        const randomFact = programmingFacts[randomIndex];
    
        chrome.notifications.create({
            type: "basic",
            iconUrl: "./assets/icon.png",
            title: "Dato Random de Programación",
            message: randomFact,
            silent: true
        });
    });
});