function calcular() {
  tare = document.getElementById("tare").value;
  tare = parseFloat(tare);
  
  ten = document.getElementById("ten").value;
  ten = parseFloat(ten);

  total = document.getElementById("total").value;
  total = parseFloat(total);

  result = (total - tare) * 10 / ten
  document.getElementById("result").innerHTML = result;
}