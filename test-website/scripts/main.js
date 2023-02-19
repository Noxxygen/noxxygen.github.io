const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/test-wolf.png") {
    myImage.setAttribute("src", "images/raven.png");
  } else {
    myImage.setAttribute("src", "images/test-wolf.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
  localStorage.setItem("name", myName);
  myHeading.textContent = `Welcome to Thorsheim Kindred, ${myName}!`;

  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome to Thorsheim Kindred, ${storedName}!`;
}
myButton.onclick = () => {
  setUserName();
};
