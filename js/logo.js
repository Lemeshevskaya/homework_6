// random color

function randomColor() {
    var color = "#";
    for (i = 0; i < 3; i++) {
        color += ("0" + (Math.random() * 256 | 0).toString(16)).substr(-2);
    }
    document.getElementById('logo').style.backgroundColor = color;
}
randomColor();
setInterval('randomColor()',2500);

document.getElementById('logo').addEventListener('mouseenter', randomColor);


