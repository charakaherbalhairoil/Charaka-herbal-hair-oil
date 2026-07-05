document.getElementById("orderForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;
  let payment = document.getElementById("payment").value;

  firebase.firestore().collection("orders").add({
    name: name,
    phone: phone,
    address: address,
    payment: payment,
    time: new Date()
  });

  alert("Order placed successfully!");

  // WhatsApp fallback
  let msg = `Order\nName:${name}\nPhone:${phone}\nAddress:${address}`;
  window.open("https://wa.me/94715733633?text=" + encodeURIComponent(msg), "_blank");
});
