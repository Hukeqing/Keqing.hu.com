var curitem = "source"
var flag = true;

function getclick(id) {
    if (id == curitem || !flag) return;
    flag = false;
    var preItem = document.getElementById(curitem);
    var nexItem = document.getElementById(id);
    var wait = 0;
    if (preItem != null) {
        preItem.className = "unmaindiv";
        wait = 500;
    }
    setTimeout(function () {
        if (preItem != null)
            preItem.style.display = "none";
        if (nexItem != null) {
            nexItem.style.display = "block";
            nexItem.className = "maindiv";
        }
        flag = true;
        curitem = id;
    }, wait);
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
