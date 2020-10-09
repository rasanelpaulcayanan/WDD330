const form = document.forms['search'];
const input = form.elements.searchInput;
//input.addEventListener('focus', () => alert('focused'), false);
//input.addEventListener('blur', () => alert('blurred'), false);
//input.addEventListener('change', () => alert('changed'), false);
input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);
input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
    } }, false);

form.addEventListener ('submit', search, false);
//function search(event) {
 //  alert('Form Submitted');
 //   event.preventDefault();
//}

function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}

document.forms.hero.heroName.focus();