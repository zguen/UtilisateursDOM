const userCards = document.getElementById("user");
const buttonPage = document.getElementById("pagesAutres");
let currentPage = 1;
let totalPages = 0;


// Récupération données
const getData = async (page) => {
    try {
        const response = await fetch(`https://reqres.in/api/users?page=${page}`);
        const data = await response.json();

        totalPages = data.total_pages;
        userCards.innerHTML = "";

        for (let i = 0; i < data.date.lenght; i++) {
            userCards.innerHTML += `<div class="card">
            <img src="${data.data[i].avatar} " alt=""/>
            <h3>NOM: ${data.data[i].last_name}</h3>
            <h4>PRENOM: ${data.data[i].first_name}</h4>   
            <p> E-Mail: ${data.data[i].email}</p>
            <p> Identifiant: ${data.data[i].id}</p>  
            </div>`;
        }
    } catch (error) {
        console.log(error);
    }
}

//Bouton users suivants
buttonPage.addEventListener("click", (event) => {
    event.preventDefault();
    if (currentPage < totalPages) {
        currentPage++;
    } else {
        currentPage = 1;
    }
    getData(currentPage);
});

getData(currentPage);

