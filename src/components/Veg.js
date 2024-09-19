import React, { useState,useContext } from 'react';
import Cart from './Cart';
import { OrderContext } from './OrderContext';

function Veg()
{
    const initialfooditems=[
        
            { name: 'veg Biriyani', category: 'veg', quantity: 0, price: 300 },
            { name: 'veg Fried Rice', category: 'veg', quantity: 0, price: 220 },
            { name: 'veg Rogan Josh', category: 'veg', quantity: 0, price: 350 },
            { name: 'vathal Kuzhambu', category: 'veg', quantity: 0, price: 280 },
    
    ]
    const [foodItems, setFoodItems] = useState(initialfooditems);
    const {orderList, setOrderList} = useContext(OrderContext);
    const [searchResults, setSearchResults] = useState(initialfooditems);
    const [searchItem, setsearchItem] = useState('');

    if(!Array.isArray(orderList)){
        console.error("orderList is not an array:", orderList);
        return <div>Error: orderList is not an array</div>;
    }
   /*  const adder = (index) => {
        const updatedFoodItems = [...foodItems];
        updatedFoodItems[index].quantity++;
        setFoodItems(updatedFoodItems);

        const updatedOrderList = updatedFoodItems.filter(item => item.quantity > 0);
        setOrderList(updatedOrderList);
    };

    const lesser = (index) => {
        const updatedFoodItems = [...foodItems];
        if (updatedFoodItems[index].quantity > 0) 
        {
            updatedFoodItems[index].quantity--;
        }
        setFoodItems(updatedFoodItems);

        const updatedOrderList = updatedFoodItems.filter(item => item.quantity > 0);
        setOrderList(updatedOrderList);
    };
    */ const order = (item) => {
        console.log("Order list:", orderList);
        const existItem=orderList.find((food)=>food.name===item.name)
        if(existItem)
        {
            console.info("Item already added",item.name);
        }
        else{
            item.quantity++;
            setOrderList([...orderList,item]);
        }
    };

    const SearchList = (searchValue) => {
        setsearchItem(searchValue);
        const filteredData = foodItems.filter(item =>
            Object.values(item).join('').toLowerCase().includes(searchValue.toLowerCase())
        );
        setSearchResults(filteredData);
    };
    return(
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
                        
                        <button className="submit" type="submit">SUBMIT</button>
                        <Cart/>
                    </div>
                </div>
            </section>

            <h1 className='heading'>Veg</h1>
            <section className='mutton'>
                {searchResults.map((veg, index) => (
                    <article className='mut-va' key={index}>
                        <img src={process.env.PUBLIC_URL + `/non-veg/${veg.name.toLowerCase()}.jpg`} alt="veg" />
                        <h1>{veg.name}</h1>
                        <h1>Price: {veg.price}</h1>
                        <article className='but-n'>
                           {/*  <button onClick={() => lesser(index)}>-</button>
                            <h1 id='num'>{veg.quantity}</h1>
                            <button onClick={() => adder(index)}>+</button> */}
                        <button onClick={()=>order(veg)}>Add</button>
                        </article>
                    </article>
                ))}
            </section>
{/* 
            <h1>CHICKEN</h1>
            <section className='mutton'>
                {fillterdchic.map((chic, index) => (
                    <article className='mut-va' key={index}>
                        <img src={process.env.PUBLIC_URL + `/non-veg/${chic.name.toLowerCase()}.jpg`} alt="Logo" />
                        <h1>{chic.name}</h1>
                        <h1>Price: {chic.price}</h1>
                        <article className='but-n'>
                            <button onClick={() => lesser(foodItems.indexOf(chic))}>-</button>
                            <h1 id='num'>{chic.quantity}</h1>
                            <button onClick={() => adder(foodItems.indexOf(chic))}>+</button>
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
                            <button onClick={() => lesser(foodItems.indexOf(fish))}>-</button>
                            <h1 id='num'>{fish.quantity}</h1>
                            <button onClick={() => adder(foodItems.indexOf(fish))}>+</button>
                        </article>
                    </article>
                ))}
            </section> */}
        </section>
    );
} 
export default Veg;