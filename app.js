// 1A
const button1 = document.querySelector(`#one`);

// 1B
button1.onclick = function () {
    alert("Cool! You can hear/understand a hummingbird and ants");
}

// 2A
const h3 = document.querySelector(`h3`);

// 2B
h3.addEventListener(`mouseenter`, () => {
    alert("OH NO! The squirrels are on to you. Now you have to leave this reality and move to a new one");
});

// 3A
const form = document.querySelector(`form`);

// 3B  Messed up on this, go back and review assignment note.
form.add.entListener(`submit`, () => {
    alert(`${form.elements.quote.value}`);
});
