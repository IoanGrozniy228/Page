var myButton = document.querySelector("button");

function RickRoll() {
    const vid = document.querySelector("video");
    vid.load();
    vid.play();
}
myButton.addEventListener("click", () => {
  RickRoll();
});