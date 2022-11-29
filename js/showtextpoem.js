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
            console.log(json[0].lines); 
            const poem_title =
            `
            <h1> ${json[0].title} </h1>
            `;
            document.querySelector('.main__poem-name').insertAdjacentHTML('beforebegin', poem_title);


            json[0].lines.forEach(element => {
                var poem_line =
                `
                <p> ${element} </p>
                `;
                document.querySelector('.main__poem').insertAdjacentHTML('beforeend', poem_line); 
            });
        }; 