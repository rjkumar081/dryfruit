fetch("https://your-backend.onrender.com/hash", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    txnid: "TXN" + Date.now(),
    amount: "999",
    productinfo: "Dry Fruit Hamper",
    firstname: "Customer",
    email: "customer@email.com"
  })
})
.then(res => res.json())
.then(data => {
  document.getElementById("hash").value = data.hash;
  document.getElementById("payuForm").submit();
});
