$(document).ready(function() {
    $(function() {
        FastClick.attach(document.body);
    });
    $('.deploy-submenu').click(function() {
        $(this).toggleClass('active-submenu');
        $(this).parent().find('.submenu').toggleClass('active-submenu-items');
        return false;
    });
    $('.open-menu').click(function() {
        if (snapper.state().state == "left") {
            snapper.close();
        } else {
            snapper.open('left');
        }
        return false;
    });
    $('.open-more').click(function() {
        if (snapper.state().state == "left") {
            snapper.close();
        } else {
            snapper.open('left');
        }
        return false;
    });
    $('.sidebar-header .fa-times').click(function() {
        snapper.close();
    });
    var snapper = new Snap({
        element: document.getElementById('content')
    });
});