function copyCopyright() {
    var theBody = document.getElementsByTagName("body")[0];
    var selection;
    selection = window.getSelection();
    var copyrightLink = '<br /><br />Reference '+document.location.href+'<br />';
    var copytext = selection + copyrightLink;
    var extraDiv = document.createElement("div");
    extraDiv.style.position="absolute";
    extraDiv.style.left="-99999px";
    theBody.appendChild(extraDiv);
    extraDiv.innerHTML = copytext;
    selection.selectAllChildren(extraDiv);
    window.setTimeout(function() {
        theBody.removeChild(extraDiv);
    },0);
}
document.body.oncopy=copyCopyright;