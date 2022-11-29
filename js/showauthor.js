window.addEventListener('load', showauthor);

function showauthor(json) {
    const author = `
    <div class="main__photo-and-name">
          <div class ="main__photos">
            <a href="authors/shekspir/shekspir.html">
              <img src = "pictures/shekspir.png"/>
            </a>
          </div>
          <div class="main__names">
            <p><b>Уи́льям Шекспи́р</b></p>
          </div>
        </div>
    `;
    document.querySelector('.main__authors-photos').innerHTML += author;
}