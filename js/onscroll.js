window.onscroll = () => {
    var st = document.documentElement.scrollTop;
    console.log(st);
    if (st > header.offsetHeight) {
        ad.style.display = "block";
        header.style.position = "fixed";
    }
    else {
        ad.style.display = "none";
        header.style.position = "static";
    }
}
