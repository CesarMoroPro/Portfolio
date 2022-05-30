console.log('%c' + "Hi !", 'color: #f0f; font-size: 1.5rem; background-color:white');

let filterButtonsList       = document.getElementsByClassName('filter-button');
let filterDomainList        = document.getElementsByClassName('filter-domain');

for(let filterDomain of filterButtonsList){
    filterDomain.addEventListener('mouseover', ()=>{
        filterDomain.classList.add('filter-button-mouseover');
    });
    filterDomain.addEventListener('mouseout', ()=>{
        filterDomain.classList.remove('filter-button-mouseover');
    });

    filterDomain.addEventListener('click', ()=>{
        filterDomain.classList.toggle('filter-button-clicked');
    })
}