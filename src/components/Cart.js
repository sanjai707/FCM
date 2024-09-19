import React, { useContext, useState } from 'react';
import { OrderContext } from './OrderContext';
import jsPDF from 'jspdf';

function Cart() {
  const { orderList, setOrderList } = useContext(OrderContext);
  const[mobile,setMobile]=useState('');
  const [name,setName]=useState('');
  const [dineInfo,setDineInfo]=useState('');


  const increaseQuantity = (index) => {
    const updatedList = [...orderList];
    updatedList[index].quantity += 1;
    setOrderList(updatedList);
  };

  const decreaseQuantity = (index) => {
    const updatedList = [...orderList];
    if (updatedList[index].quantity > 1) {
      updatedList[index].quantity -= 1;
      setOrderList(updatedList);
    } else {
      updatedList.splice(index, 1);
      setOrderList(updatedList);
    }
  };

  const totalCost = orderList.reduce((total, item) => total + item.price * item.quantity, 0);
  //generating bill pdf by using jsPDF
  const billNo=1;
  const generatePdf = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica");

    doc.setFontSize(20);
    doc.setTextColor(0, 102, 204); 
    doc.text('INVOICE', 105, 20, { align: 'center' });

    doc.setFontSize(18);
    doc.setTextColor(0, 0, 0);
    doc.text(`Dine: ${dineInfo}`,10,30)
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Bill no ${billNo}`, 10, 40);
    doc.text(`Customer Name: ${name}`, 10, 50);
    doc.text(`Mobile No: ${mobile}`, 10, 60);

    doc.setFontSize(14);
    doc.setFillColor(0, 102, 204);
    doc.rect(10, 70, 190, 10, 'F');
    doc.setTextColor(255, 255, 255);
    doc.text('Item', 15, 76);
    doc.text('Quantity', 80, 76);
    doc.text('Price', 130, 76);
    doc.text('Total', 170, 76);

    let yPosition = 90; 

    orderList.forEach((item) => {
      doc.setTextColor(0, 0, 0);
      doc.text(`${item.name}`, 15, yPosition);
      doc.text(`${item.quantity}`, 80, yPosition);
      doc.text(`${item.price}`, 130, yPosition);
      doc.text(`${(item.quantity * item.price).toFixed(2)}`, 170, yPosition);

      yPosition += 10; 
    });

    doc.setFontSize(14);
    doc.setTextColor(0, 102, 204);
    doc.text('Total', 130, yPosition);
    doc.text(`${totalCost.toFixed(2)}`, 170, yPosition);

    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.5);
    doc.line(10, 68, 200, 68); 
    doc.line(10, yPosition + 5, 200, yPosition + 5);

    doc.save(`${name}-invoice.pdf`);
  };
  const [ischeckOut,setCheckOut]=useState(false);
  const handleCheckoutClick = () => {
    setCheckOut(true);
  };
  const handleChange=(e)=>{
    setDineInfo(e.target.value);
  }
  return (
    <section className="cart-container">
      <h1 className='heading'>Your Cart</h1>
      {orderList.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {orderList.map((item, index) => (
            <li key={index} className="cart-item">
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price.toFixed(2)}</p>
                <p>Subtotal: ₹{(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <div className="item-quantity">
                <button onClick={() => decreaseQuantity(index)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(index)}>+</button>
              </div>
            </li>
            
          ))}
           {orderList.length > 0 && (
        <div className="cart-total">
          <h3>Total Cost: ₹{totalCost.toFixed(2)}</h3>
        </div>
      )}
          { !ischeckOut ? (
                      <button className="checkout-button" onClick={handleCheckoutClick}>Checkout</button>

          ):(
            <>
          <section className="container">
          <form className="toggle" id='info-form'>
            <article className='costumer-info'>
              <label>Name</label>
              <input type='text' placeholder='Enter Name...'  value={name} onChange={(e)=>setName(e.target.value)} />
              <label>Mobile No</label>
              <input type='mobile' placeholder='Enter Mobile no...'  value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
            </article>
            <input type="radio" 
            id="choice1" 
            name="choice" 
            value="Dine In" 
            onChange={handleChange}
            checked={dineInfo==="Dine In"}
            />  
            <label htmlFor="choice1">Dine In</label>
            
            <input type="radio" 
            id="choice2" 
            name="choice" 
            value="Take Away" 
            onChange={handleChange}
            checked={dineInfo==="Take Away"}
            />
            <label htmlFor="choice2" className='off-label'>Take Away</label>
            <span className='selected' aria-hidden='true'></span>             
          </form>
        </section>
        <button className="checkout-button"form='info-form' type='sumit' onClick={generatePdf}>Checkout</button>
      </>)
}
        </ul>
        
      )}

    </section>
  );
}
export default Cart;
