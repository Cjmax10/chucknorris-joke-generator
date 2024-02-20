const jokeContainer = document.getElementById('joke');
const btn = document.getElementById('joke-btn');

function generateJoke() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                jokeContainer.innerHTML = JSON.parse(this.responseText).value;
            } else {
                jokeContainer.innerHTML = 'Something went wrong';
            }
        }
    };

    xhr.send();
}


btn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke);