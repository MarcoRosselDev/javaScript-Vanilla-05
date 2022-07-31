const link = document.querySelector('.links');
const button = document.querySelector('.sidebar-toggle');

button.addEventListener('click', function() {
    if(link.classList.contains('show-sidebar')) {
        link.classList.remove('show-sidebar')
    } else {
        link.classList.add('show-sidebar')
    }
    // link.classList.toggle('show-sidebar');
})