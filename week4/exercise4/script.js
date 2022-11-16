const result = document.querySelector(".result");
console.log(result);
const send = () => {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const typeAge = document.getElementById("typeAge").value;
  var z = document.createElement("p"); // is a node

  const BMI = weight / height ** 2;

  if (BMI < 18.5) {
    result.innerHTML = "Underweight";
  } else if (BMI >= 18.5 && BMI < 25) {
    result.innerHTML = "Normal";
  } else if (BMI >= 25 && BMI < 30) {
    result.innerHTML = "Overweight";
  } else if (BMI >= 30 && BMI < 35) {
    result.innerHTML = "Obese";
    z.innerHTML = "Khám định kỳ";
    result.appendChild(z);
  } else if (BMI >= 35 && BMI < 40) {
    result.innerHTML = "Extremely Obese";
    z.innerHTML = "Tập thể dục thường xuyên";
    result.appendChild(z);
  } else if (BMI >= 40) {
    result.innerHTML = "Morbidly Obese";
    z.innerHTML = "Hạn chế ăn mỡ động vật";
    result.appendChild(z);
  }
};
