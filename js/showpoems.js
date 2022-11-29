var url = "https://poetrydb.org/author,title/Shakespeare;Sonnet";

window.addEventListener('load', loadpoems);

function loadpoems() {
    fetch(url)
        .then(function(response) {
        return response.json();
        })
        .then(function(json) {
        console.log(json);
        showpoems(json);
        });
    }

function showpoems(json) {

    json.forEach(element => {
        const poem = `
            <div class="main__poem">
                <a href="poem.html"> ${element.title} </a>
            </div>
        `;

        document.querySelector('.main__all-poems').insertAdjacentHTML('beforeend', poem);
    }); 
}
