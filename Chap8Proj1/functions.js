/* define your functions here */

function calculateTotal(quantity, price) {
  return quantity * price;
}

function outputCartRow(item, total) {
  document.write(`
    <tr>
      <td><img src="images/${item.product.filename}" alt="${item.product.title}"></td>
      <td>${item.product.title}</td>
      <td>${item.quantity}</td>
      <td>$${item.product.price.toFixed(2)}</td>
      <td>$${total.toFixed(2)}</td>
    </tr>
  `);
}








        
