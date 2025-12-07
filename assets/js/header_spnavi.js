function toggleNav() {
    var body = document.body;
    var SPnavi = document.getElementById('js-SPnavi');
    var bgBlack = document.getElementById('js-bg-black');


    SPnavi.addEventListener('click', function () {
        body.classList.toggle('SPnavi-open');
    });
    bgBlack.addEventListener('click', function () {
        body.classList.remove('SPnavi-open');
    });
}
toggleNav();