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
