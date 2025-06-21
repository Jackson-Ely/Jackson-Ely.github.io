
const tax_rate = prompt('Enter tax rate (0.10)');
const shipping_threshold = prompt('Enter shipping threshold (1000)');

/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

let subtotal = 0;

for (let i = 0; i < cart.length; i++) {
  const item      = cart[i];
  const lineTotal = calculateTotal(item.quantity, item.product.price);
  outputCartRow(item, lineTotal);
  subtotal += lineTotal;
}

const tax       = subtotal * taxRate;
const shipping = subtotal > shippingThreshold ? 0 : 40;
const grandTotal = subtotal + tax + shipping;

document.write(`
  <tr class="totals"><td colspan="4">Subtotal</td> <td>$${subtotal.toFixed(2)}</td></tr>
  <tr class="totals"><td colspan="4">Tax</td> <td>$${tax.toFixed(2)}</td></tr>
  <tr class="totals"><td colspan="4">Shipping</td> <td>$${shipping.toFixed(2)}</td></tr>
  <tr class="totals"><td colspan="4" class="focus">Grand Total</td> <td class="focus">$${grandTotal.toFixed(2)}</td></tr>
`);
