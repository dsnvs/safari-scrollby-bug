let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let scroller = document.getElementById(e.currentTarget.attributes['data-scroller'].value);
        let direction = e.currentTarget.attributes['data-action'].value == "next" ? 1 : -1;
        let behavior = e.currentTarget.attributes['data-behavior'].value;

       scrollElement(scroller, direction, behavior);
    })
})

function scrollElement (scroller, direction, behavior) {
    scroller.scrollBy({left: 800 * (direction), behavior: behavior})
}