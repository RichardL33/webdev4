console.log('\'Allo \'Allo!');

$(document).ready(function () {
    $('.navbar-toggle').click(function () {
        $(this).parent().find('img.logo').toggle('200');
    });
});