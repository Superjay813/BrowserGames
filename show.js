function toggle(ele) {
    var cont = document.getElementById('cont');
    if (cont.style.display == 'block') {
        cont.style.display = 'none';

        document.getElementById(ele.id).value = 'Search';
    }
    else {
        cont.style.display = 'block';
        document.getElementById(ele.id).value = 'Hide Search';
    }
}