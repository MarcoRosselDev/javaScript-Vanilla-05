const button = document.querySelector('.sidebar-toggle');
const link = document.querySelector('.sidebar');

button.addEventListener('click', function() {
    // if(link.classList.contains('show-sidebar')) {
    //     link.classList.remove('show-sidebar')
    // } else {
    //     link.classList.add('show-sidebar')
    // }
    link.classList.toggle('show-sidebar');
});