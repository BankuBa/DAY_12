let buttons = document.querySelectorAll(".btn");
let card_1 = document.querySelector(".card");
let card_2 = document.querySelector(".card2");
let selected_vallue = document.getElementById("selcted_value");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let expression = e.target.classList;

    if (expression.contains("one")) {
      console.log("it works");
      expression.toggle("active");
      selected_vallue.textContent = "1";
    } else if (expression.contains("two")) {
      console.log("it works");
      expression.toggle("active");
      selected_vallue.textContent = "2";
    } else if (expression.contains("three")) {
      console.log("it works");
      expression.toggle("active");
      selected_vallue.textContent = "3";
    } else if (expression.contains("four")) {
      console.log("it works");
      expression.toggle("active");
      selected_vallue.textContent = "4";
    } else if (expression.contains("five")) {
      console.log("it works");
      expression.toggle("active");
      selected_vallue.textContent = "5";
    } 
      
    
      else if(expression.contains("submit_btn")) {
      console.log("submit");
      card_1.classList.add("invisible");
      card_2.classList.remove("invisible");
    }
  });
});
