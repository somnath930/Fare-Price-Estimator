document.getElementById("calculateBtn").addEventListener("click", function () {
    const pickup = document.getElementById("pickup").value;
    const drop = document.getElementById("drop").value;
  
    if (!pickup || !drop) {
      alert("Please enter both locations.");
      return;
    }
  
    const ratePerKm = 12;
    const distance = Math.floor(Math.random() * 20) + 1;
    const fare = distance * ratePerKm;
  
    const resultBox = document.getElementById("result");
    resultBox.style.display = "block";
    resultBox.innerHTML = `
      <p><strong>Distance:</strong> ${distance} km</p>
      <p><strong>Estimated Fare:</strong> ₹${fare}</p>
    `;
  });