
function updateWeight() {
  const weight = document.getElementById("weightRange").value;
  document.getElementById("weightInput").value = weight;
  calculateBMI();
}
function updateWeightSlider() {
  const weight = document.getElementById("weightInput").value;
  document.getElementById("weightRange").value = weight;
  calculateBMI();
}
function updateHeight() {
  const height = document.getElementById("heightRange").value;
  document.getElementById("heightInput").value = height;
  calculateBMI();
}
function updateHeightSlider() {
  const height = document.getElementById("heightInput").value;
  document.getElementById("heightRange").value = height;
  calculateBMI();
}
function updateAge() {
  const age = document.getElementById("ageRange").value;
  document.getElementById("ageInput").value = age;
}
function updateAgeSlider() {
  const age = document.getElementById("ageInput").value;
  document.getElementById("ageRange").value = age;
}
function calculateBMI() {
  const weight = document.getElementById("weightRange").value;
  const height = document.getElementById("heightRange").value / 100; // Convert cm to meters
  if (height > 0) {
    const bmi = (weight / (height * height)).toFixed(2);
    document.getElementById("bmiResult").innerText = bmi;
  } else {
    document.getElementById("bmiResult").innerText = "...";
  }
}
