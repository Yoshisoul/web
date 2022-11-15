const popular_poem = document.querySelectorAll('.main__popular-poem');

popular_poem.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.border = '1px solid #000';
    })
    item.addEventListener('mouseout', () => {
        item.style.border = 'none';
    })
})

const popular_poem_a = document.querySelectorAll('.main__popular-poem a');

popular_poem_a.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.color = 'brown';
    })
    item.addEventListener('mouseout', () => {
        item.style.color = 'black';
    })
})