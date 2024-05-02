import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
// import { Button,FlexboxGrid } from 'rsuite';
// import 'rsuite/dist/rsuite.min.css';

function Card() {
   // State untuk daftar barang yang akan dibeli
   const [data,setData] = useState(0)
  const [items, setItems] = useState([
    { id: 1, name: 'Product 1', price: 10, quantity: 1 },
    { id: 2, name: 'Product 2', price: 20, quantity: 1 },
    { id: 3, name: 'Product 3', price: 15, quantity: 1 },
  ]);

  // Fungsi untuk mengubah jumlah barang dalam keranjang
  const handleQuantityChange = (id, quantity) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };
 const increment = () => {
    setData(data + 1)
 }
 const decrement = () =>{
    setData(data - 1)
 }
 if(data < 0){
    setData(0)
    alert('not under 0')
 }
  // Fungsi untuk menghapus barang dari keranjang
  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Menghitung total harga belanja
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className='container'>
      <div className='row'>
      <h1>{data}</h1>
        <div className='col-md-6'>
        <Button onClick={increment} appearance='primary'>Add</Button>
        </div>
        <div className='col-md-6'>
        <Button onClick={decrement} appearance='primary'>Decrement</Button>
        </div>
      </div>
        
     
      {/* <h2>Checkout</h2>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>Price: ${item.price}</p>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) =>
                handleQuantityChange(item.id, parseInt(e.target.value))
              }
            />
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <h3>Total Price: ${totalPrice}</h3>
      <button>Checkout</button> */}
    </div>
  );
}

export default Card