
function rioList() {
  let input = document.getElementById("number").value;
  let output = " ";
  let list = [];
  for (let i = 0; i <= input; i++) {
    list.push(i);
  }
  output = list.join(",");
  document.getElementById("result").innerHTML = output;

  function rioList(num) {
    let output = "";
    for (let i = 0; i <= num; i++) {
      let numStr = i.toString();
      if (numStr.includes("3")) {
        output += "a little bit more, ";
      } else if (numStr.includes("2")) {
        output += "keep counting, ";
      } else if (numStr.includes("1")) {
        output += "keep going, ";
      } else {
        output += i + ", ";
      }
    }
    return output.slice(0,-2); // remove the trailing comma and space
  }
  
  let num = parseInt(prompt("Enter a number:"));
  let list1 = rioList(num);

}
