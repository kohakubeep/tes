let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addCart(name, price){
  cart.push({name, price});
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Ditambahkan ke keranjang');
}

function renderCart(){
  let table = document.getElementById('cartTable');
  if(!table) return;
  table.innerHTML='';
  let total=0;
  cart.forEach((c,i)=>{
    total+=c.price;
    table.innerHTML+=`<tr><td>${c.name}</td><td>Rp ${c.price}</td><td><button onclick="remove(${i})">Hapus</button></td></tr>`;
  });
  document.getElementById('total').innerText='Total: Rp '+total;
}

function remove(i){
  cart.splice(i,1);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

function clearCart(){
  localStorage.removeItem('cart');
  location.reload();
}

renderCart();