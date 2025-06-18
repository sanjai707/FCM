import React, { useState,useContext } from 'react';
import Cart from './Cart';
import { OrderContext } from './OrderContext';
import { toast } from 'react-toastify';

function Nonveg()
{
    const initialfooditems=[
    { name: 'Mutton Kebab', category: 'mutton', quantity: 0, price: 250 },
    { name: 'Hyderbadi Biriyani', category: 'mutton', quantity: 0, price: 300 },
    { name: 'Mutton Fried Rice', category: 'mutton', quantity: 0, price: 220 },
    { name: 'Mutton Rogan Josh', category: 'mutton', quantity: 0, price: 350 },
    { name: 'Chettinad Mutton Kuzhambu', category: 'mutton', quantity: 0, price: 280 },
    { name: 'Butter Chicken', category: 'chicken', quantity: 0, price: 200 },
    { name: 'Chicken Chettinad', category: 'chicken', quantity: 0, price: 240 },
    { name: 'Hyderabadi Dum Chicken Biriyani', category: 'chicken', quantity: 0, price: 270 },
    { name: 'Chettinad Prawns', category: 'fish', quantity: 0, price: 300 },
    { name: 'Karahi Chicken', category: 'chicken', quantity: 0, price: 230 },
    { name: 'Pallipalayam Chicken', category: 'chicken', quantity: 0, price: 250 },
    { name: 'Tandoori Chicken', category: 'chicken', quantity: 0, price: 260 },
    { name: 'Mutton Kosha', category: 'mutton', quantity: 0, price: 310 },
    { name: 'Tandoori Pomfret', category: 'fish', quantity: 0, price: 350 },
    { name: 'Chilli Crabs', category: 'fish', quantity: 0, price: 400 },
    { name: 'Fish Curry', category: 'fish', quantity: 0, price: 280 },
    { name: 'Fish Tawa Fry', category: 'fish', quantity: 0, price: 260 },
    ]   

    const [foodItems, setFoodItems] = useState(initialfooditems);
    const {orderList, setOrderList} = useContext(OrderContext);
    const [searchResults, setSearchResults] = useState(initialfooditems);
    const [searchItem, setsearchItem] = useState('');

    if (!Array.isArray(orderList)) {
        console.error("orderList is not an array:", orderList); // For debugging
        return <div>Error: orderList is not an array</div>;
      }


    /* const order = (item) => {
        console.log("Order list:", orderList);
        console.log("added",item);
        const existItem=orderList.find((food)=>food.name===item.name);
        
        if(existItem)
        {
            console.info("Item already Added",item.name);
        }
        else{
            item.quantity++;
            setOrderList([...orderList,item]);
        }
    }; */

   /*  const order = (item) => {
        const existItem = orderList.find((food) => food.name === item.name);        
        if (existItem) {
            toast.info(`${item.name} is already in your cart`, { autoClose: 1500 });
        } else {
            item.quantity++;
            setOrderList([...orderList, item]);
            toast.success(`${item.name} added to your cart`, { autoClose: 1500 });
        }
        toast.success("message", {
            position: "bottom-right",
            hideProgressBar: false,
            theme: "dark"
          });
          
    };
     */
    const order = (item) => {
        const existingItemIndex = orderList.findIndex(food => food.name === item.name);
      
        if (existingItemIndex !== -1) {
          // Clone the order list
          const updatedOrderList = [...orderList];
          // Increase the quantity
          updatedOrderList[existingItemIndex].quantity += 1;
          setOrderList(updatedOrderList);
          toast.info(`${item.name} quantity updated`, {
            position: "bottom-right",
            theme: "dark"
          });
        } else {
          setOrderList([...orderList, { ...item, quantity: 1 }]);
          toast.success(`${item.name} added to your cart`, {
            position: "bottom-right",
            theme: "dark"
          });
        }
      };
      

    const SearchList = (searchValue) => {
        setsearchItem(searchValue);
        const filteredData = foodItems.filter(item =>
            Object.values(item).join('').toLowerCase().includes(searchValue.toLowerCase())
        );
        setSearchResults(filteredData);
    };

    const fillterdmutton = searchResults.filter(item => item.category === 'mutton');
    const fillterdchic = searchResults.filter(item => item.category === 'chicken');
    const fillterdfish = searchResults.filter(item => item.category === 'fish');
    return (
        <section className='nonveg-va'>
            <section className='nonveg-va'>
                <div className="fc-container">
                    <div className="fc">FS</div>
                    <div className="search-submit">
                        <input
                            type="text"
                            value={searchItem}
                            id="search"
                            onChange={(e) => SearchList(e.target.value)}
                            placeholder="Search the food items"
                        />
{/*                         <Cart/>
 */}                    </div>
                </div>
            </section>
            
            <h1 className='heading'>MUTTON</h1>
            <section className='mutton'>
                {fillterdmutton.map((mutt, index) => (
                    <article className='mut-va' key={index}>
                        <img src={process.env.PUBLIC_URL + `/non-veg/${mutt.name.toLowerCase()}.jpg`} alt="Logo" />
                        <h1>{mutt.name}</h1>
                        <h1>Price: {mutt.price}</h1>
                         <article className='but-n'>
                        <button onClick={()=>order(mutt)}>Add</button>
                        </article> 
                    </article>
                ))}
            </section>

            <h1>CHICKEN</h1>
            <section className='mutton'>
                {fillterdchic.map((chic, index) => (
                    <article className='mut-va' key={index}>
                        <img src={process.env.PUBLIC_URL + `/non-veg/${chic.name.toLowerCase()}.jpg`} alt="Logo" />
                        <h1>{chic.name}</h1>
                        <h1>Price: {chic.price}</h1>
                         <article className='but-n'>
                        <button onClick={()=>order(chic)}>Add</button>  
                       </article> 
                    </article>
                ))}
            </section>

            <h1>FISH</h1>
            <section className='mutton'>
                {fillterdfish.map((fish, index) => (
                    <article className='mut-va' key={index}>
                        <img src={process.env.PUBLIC_URL + `/non-veg/${fish.name.toLowerCase()}.jpg`} alt="Logo" />
                        <h1>{fish.name}</h1>
                        <h1>Price: {fish.price}</h1>
                        <article className='but-n'>
                        <button onClick={()=>order(fish)}>Add</button>
                      </article>
                    </article>
                ))}
            </section>
        </section>
    );
}

export default Nonveg;