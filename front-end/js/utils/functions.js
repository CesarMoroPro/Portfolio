function onOffClassList(element, event, className) {
    element.addEventListener('event', () => {
        element.classList.add('className');
    });
    element.removeEventListerner('event', () => {
        element.classList.remove('className');
    })
}