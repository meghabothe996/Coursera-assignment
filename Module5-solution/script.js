// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

function sayhello(event) {
    console.log(this);
    var name =
        document.getElementById("name").value;
        var message = "<h4>hola..." + name + "!</h4>";

    document
        .getElementById("content")
        .innerHTML = message;

    if (name === "student") {
     var title =
        document
        .querySelector("#title")
        .textContent;
    title += " & Lovin' it";
    document
        .querySelector("#title")
        .textContent = title;
    }
}