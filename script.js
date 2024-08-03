

function run() {
    const HtmlCode = document.getElementById("html").value;
    const css = '<style>'+document.getElementById("css").value+'</style>';
    const js =document.getElementById("js").value;
    const output = document.getElementById("output");
    output.contentDocument.body.innerHTML = HtmlCode + css
    output.contentWindow.eval(js);
}

document.getElementById('html').addEventListener('keyup',run)
document.getElementById('css').addEventListener('keyup',run)
document.getElementById('js').addEventListener('keyup',run)
document.getElementById('button').addEventListener('click',run)