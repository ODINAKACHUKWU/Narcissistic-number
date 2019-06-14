const userInput = document.querySelector("#userInput");
const btn = document.querySelector("#check");
const result = document.querySelector("#result");

const isNacissistic = () => {
  const number = userInput.value;
  if (isNaN(number)) {
    result.textContent = "Please enter a positive integer!";
    result.style.color = "red";
  } else {
    const num = Number(number);
    if (num <= 0 || !Number.isInteger(num)) {
      result.textContent = "Please enter a positive integer!";
      result.style.color = "red";
    } else {
      const numArray = num.toString().split("");
      const newArray = numArray.map(e => parseInt(e, 10));
      let sum = 0;
      for (let i = 0; i < newArray.length; i++) {
        sum += Math.pow(newArray[i], newArray.length);
      }
      if (sum === num) {
        result.textContent = `${num} is a Narcissistic number`;
        result.style.color = "green";
      } else {
        result.textContent = `${num} is not a Narcissistic number`;
        result.style.color = "red";
      }
    }
  }
};

btn.addEventListener("click", isNacissistic);
