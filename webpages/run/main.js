var curitem = "source"

function getclick(id) {
    if (id == curitem) return;
    document.getElementById(curitem).className = "unmaindiv";
    setTimeout(function () {
        document.getElementById(curitem).style.display = "none";
        document.getElementById(id).style.display = "block";
        document.getElementById(id).className = "maindiv";
        curitem = id;
    }, 500);
}

window.onresize = function () {
    startresize();
}
function startresize() {
    var curWidth = document.body.clientWidth - 20;
    var curheight = document.body.clientHeight - 120;
    if (curheight * 2.5 >= curWidth) {
        curheight = curWidth / 2.5;
    } else {
        curWidth = curheight * 2.5;
    }
    var items = document.getElementsByTagName("img");
    for (var i = 0; i < items.length; i++) {
        items[i].style.width = curWidth.toString() + "px";
        items[i].style.height = curheight.toString() + "px";
    }
}
