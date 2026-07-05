document.getElementById("orderForm").addEventListener("submit", async function(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let address = document.getElementById("address").value;
  let phone = document.getElementById("phone").value;
  let payment = document.getElementById("payment").value;

  try {
    await addDoc(collection(db, "orders"), {
      name: name,
      address: address,
      phone: phone,
      payment: payment,
      time: new Date()
    });

    alert("Order Placed Successfully!");

    window.open(
      "https://wa.me/94715733633?text=" +
      encodeURIComponent(`New Order\nName:${name}\nPhone:${phone}\nAddress:${address}`)
    );

    document.getElementById("orderForm").reset();

  } catch (error) {
    alert("Error placing order!");
    console.log(error);
  }
});
