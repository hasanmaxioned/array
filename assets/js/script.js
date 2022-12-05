/* Author: 

*/

function findNumber() {
  let numFound = false;
  let x = parseInt(document.getElementById("input-field").value);
  let arr = [3, 2, 7, 5, 8, 4, 10];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === x) {
        document.getElementById("text").innerHTML =
          "sum of " + arr[i] + ", " + arr[j] + " is " + x;
        numFound = true;
      }
    }
  }
  if (!numFound) {
    document.getElementById("text").innerHTML = "num not found";
  }
}
