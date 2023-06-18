let baseUrl = "https://api.adviceslip.com/advice",
    adviceNum = document.querySelector(".advice__title"),
    adviceBody = document.querySelector(".advice__quote"),
    randAdvice = document.querySelector(".advice--active");

    const generator = async () => {
        try {
            const response = await fetch(baseUrl);
            let respJSON = await response.json();
            console.log(respJSON);
            adviceNum.innerText = `Advice #${respJSON.slip.id}`
            adviceBody.innerText = `"${respJSON.slip.advice}"`
        } catch (error) {
            console.log(error);
        }
    };

    randAdvice.addEventListener("click", generator);
    window.addEventListener("load", generator);