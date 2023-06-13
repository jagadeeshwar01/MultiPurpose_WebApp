const button = document.getElementById("calculate");
button.addEventListener("click", function() {
  calculateBMI();
});
let weightInput = document.getElementById("weight");
let heightInput = document.getElementById("height");
weight.setAttribute("placeholder", "   Enter Weight in Kgs");
height.setAttribute("placeholder", "   Enter Height in mtrs");
function calculateBMI() {
  let weight = weightInput.value;
  let height = heightInput.value;
  let bmi = Math.round(weight / (height * height));
  let message = "";
  let desc = document.getElementById("desc");
  desc.classList.add("desc");
  desc.style.backgroundColor = "#fff";
  desc.style.color = "#000";

  if (bmi < 18.5) {
    message = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    message = "Normal";
  } else if (bmi >= 25 && bmi < 30) {
    message = "Overweight";   
  } else if (bmi >= 30) {
    message = "Obese";
  }
  desc.innerHTML="BMI : " + bmi +  " kg/m^2   ("+message+")";
}
let titleOne = document.getElementById("h1");
titleOne.style.textAlign = "center";
titleOne.style.marginTop = "5%";

const titles = document.querySelectorAll("li");
console.log(titles);

titles.forEach((title, i) => {
  title.style.fontSize = "26px";
  title.style.listStyleType = "none";
  var k=0;
  while(k<=3){
    title.style.color = "#000";
    k++;
  }
});
