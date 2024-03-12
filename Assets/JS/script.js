const cardHolder = document.getElementById("cardHolder");

fetch("./file.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(activity => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <h3 class="cardTitle">${activity.title}</h3>
                <p class="description">${activity.description}</p>
            `;
            cardHolder.appendChild(card);

            card.addEventListener("click", () => {
                window.location.href = activity.link;
            });
        });
    })
    .catch(error => console.error("Error fetching JSON file:", error));