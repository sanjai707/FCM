import React, { useState,useContext } from 'react';
import Cart from './Cart';
import { OrderContext } from './OrderContext';
import { toast } from 'react-toastify';

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
    const order = (item) => {
        console.log("Order list:", orderList);
        const existingItemIndex=orderList.findIndex((food)=>food.name===item.name);
        if(existingItemIndex != -1)
        {
            const updatedOrderList =[...orderList];
            updatedOrderList[existingItemIndex].quantity +=1;
            setOrderList(updatedOrderList)
            toast.info(`${item.name} quantity updated`, {
                position: "bottom-right",
                theme: "dark"
              });
        }
        else{
            
            setOrderList([...orderList,{...item,quantity: 1}]);
            toast.success(`${item.name} added to your cart`,{
                position:"bottom-right",
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
    return(
    <section className='nonveg-va'>
            <section className='nonveg-va'>
                <div className="fc-container">
                    <div className="fc">FS</div>
                    <div className="search-submit">
                        <input
                            className='in'
                            type="text"
                            value={searchItem}
                            id="search"
                            onChange={(e) => SearchList(e.target.value)}
                            placeholder="Search the food items"
                        />
                          {/*
                        <button className="submit" type="submit">SUBMIT</button>
                       <Cart/> */}
                    </div>
                </div>
            </section>

            <h1 className='heading'>VEG</h1>
            <section className='mutton'>
                {searchResults.map((veg, index) => (
                    <article className='mut-va' key={index}>
                        <img src={process.env.PUBLIC_URL + `/veg/${veg.name.toLowerCase()}.jpg`} alt="veg" />
                        <h1>{veg.name}</h1>
                        <h1>Price: {veg.price}</h1>
                        <article className='but-n'>
                        <button onClick={()=>order(veg)}>Add</button>
                        </article>
                    </article>
                ))}
            </section>
        </section>
    );
} 
export default Veg;