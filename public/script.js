function myfunction() {
  window.location.href = "hivemind.html";
}

function returnidea() {
  let name1 = document.getElementById("idea name");
  let desc1 = document.getElementById("Idea desc");
  let price1 = document.getElementById("Idea Price");
  var name = name1.value;
  var desc = desc1.value;
  var price = price1.value;
  let list = document.querySelectorAll(".list");
  let cnt = document.querySelectorAll(".qqq");
  list[1].className = "list";
  list[2].className = "list active";
  cnt[1].className = "qqq";
  cnt[2].className = "qqq active";

  document.getElementById("ideanm").textContent = "Idea Name:  " + name;
  document.getElementById("ideads").textContent = "Idea Description:  " + desc;
  document.getElementById("idepr").textContent = "Idea Price:  " + price;
  name1.value = "";
  desc1.value = "";
  price1.value = "";
}
