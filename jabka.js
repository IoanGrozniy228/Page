var myButton = document.getElementById('btn2');
var myText = document.querySelector("textarea");

function RickRoll() {
  if(myText.value == "Rick")
  {
    const vid = document.querySelector("video");
    vid.src = "Rick Astley - Never Gonna Give You Up Official Video 4K Remaster [get.gt].mp4";
    vid.load();
    vid.play();
  }
  if(myText.value == "Joper")
  {
    const vid = document.querySelector("video");
    vid.src = "Матушка 5opka - Жопер [get.gt].mp4";
    vid.load();
    vid.play();
  }
  if(myText.value == "42")
  {
    const vid = document.querySelector("video");
    vid.src = "5opka x 6055 - 42 клип [get.gt].mp4";
    vid.load();
    vid.play();
  }
  var my = document.querySelector("h1");
  my.textContent = myText.value;
}
myButton.addEventListener("click", () => {
  RickRoll();
});