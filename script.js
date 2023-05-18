
var pt = document.getElementById("go");
pt.addEventListener("submit", function (e) {
    var a = document.querySelector("#go input"), n = a.value.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/|\/shorts\/)/); n[2] && n[2].length > 10 ? (a.value = "https://www.youtube.com/watch?v=" + n[2].split(/[^0-9a-z_\-]/i)[0], search(a.value, "url")) : search(a.value, "q");
    function search(p, q) {
        var d = new Date();
        var n = d.getHours();
        document.getElementById("search-result").innerHTML = '<iframe id="hphp" style="border: none;" src="https://apiyoutube.cc/?' + q + '=' + p + '&t=' + n + '&color=3b6c96" width="100%" height="530"></iframe>';
        e.preventDefault();
    }
});
function openNav() {
    var element = document.getElementById("navbarCollapse");
    if (element.classList.contains('show')) {
        element.classList.remove("show");
    } else { element.classList.add("show"); }
}
