var button = document.getElementById("giaiBtn");
const result = document.querySelector(".result");
giaiBtn.onclick = function () {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  if (a == "" || b == "") {
    alert("Vui lòng nhập dữ liệu");
  } else {
    a = Number(a);
    b = Number(b);
    giai_pt_bac_nhat(a, b);
  }
};

function giai_pt_bac_nhat(a, b) {
  if (a == 0 && b == 0) {
    alert("Phương trình vô số nghiệm");
  } else if (a != 0 && b == 0) {
    alert("Phương trình có nghiệm x = 0");
  } else if (a == 0 && b != 0) {
    alert("Phương trình vô nghiệm");
  } else {
    var z = document.createElement("span"); // is a node
    z.innerHTML = -b / a;
    result.appendChild(z);
  }
}
