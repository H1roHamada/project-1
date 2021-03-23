//sidebar
const SIDEBAR_TOGGLE_BTN = document.querySelector('.menu-icon-wrapper')
const MENU_ICON = document.querySelector('.menu-icon')
const SIDEBAR = document.querySelector('.sidebar')

//доп карточки
const BTN_SHOW_MORE_CARD = document.querySelector('.btn-more')
const HIDDEN_CARDS = document.querySelectorAll('.card-link--hidden')

//виджеты
const WIDGETS = document.querySelectorAll('.widget');

//ещё в доп опциях
const SHOW_MORE_OPTIONS = document.querySelector('.widget__btn-show-hidden');
const HIDDEN_OPTIONS = document.querySelectorAll('.checkbox--hidden');



// ------------------------------------------------------------

/*раскрытие Sibedar*/
SIDEBAR_TOGGLE_BTN.addEventListener('click', () => {
    MENU_ICON.classList.toggle('menu-icon-active')
    SIDEBAR.classList.toggle('sidebar--mobile-active')
})
////раскрытие Sibedar



/*показать дополнительные карточки*/
BTN_SHOW_MORE_CARD.addEventListener('click', () => {
    HIDDEN_CARDS.forEach(card => {
        card.classList.remove('card-link--hidden')
    })
})
////показать дополнительные карточки

/*виджеты*/
WIDGETS.forEach(widget => widget.addEventListener('click', e => {
    if (e.target.classList.contains('widget__title')) {
        console.log(e.target.classList)
        e.target.classList.toggle('widget__title--active');
        e.target.nextElementSibling.classList.toggle('widget__body--hidden');
    }
}))
//// виджеты

/* показать ещё в доп опциях */
SHOW_MORE_OPTIONS.addEventListener('click', e => {
    e.preventDefault();
    let hiddenOptions = SHOW_MORE_OPTIONS.dataset.options

    //показать
    if (hiddenOptions === 'hidden') {
        HIDDEN_OPTIONS.forEach(hidden => {
            hidden.style.display = 'block'
        })
        SHOW_MORE_OPTIONS.innerText = 'Скрыть дополнительные опции';
        SHOW_MORE_OPTIONS.dataset.options = 'visible';
    }
    //скрыть
    else if (hiddenOptions === 'visible') {
        HIDDEN_OPTIONS.forEach(hidden => {
            hidden.style.display = 'none'
        })
        SHOW_MORE_OPTIONS.innerText = 'Показать ещё';
        SHOW_MORE_OPTIONS.dataset.options = 'hidden';
    }
})
//// показать ещё в доп опциях