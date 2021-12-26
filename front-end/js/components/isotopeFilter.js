import '../../../node_modules/isotope-layout/dist/isotope.pkgd.js'

let iso = new Isotope('.grid', {
    itemSelector: '.grid-item'
});

let filtersElement = document.querySelector('.grid-item');
filtersElement.addEventListener('click', function(event) {
    let filterValue = event.target.getAttribute('data-filter');
    iso.arrange({filter : filterValue});

    if(filterValue === 'test-1') {
       let js = document.querySelector('.js');
       console.log(js);
    } 
});

