import React from "react";
import veg from'../images/Rectangle 6.png'
import juice from'../images/Rectangle 7.png'
import nveg from'../images/Rectangle 8.png'
import snacks from'../images/snacks.png'
import { useNavigate } from "react-router-dom";
function Categories()
{
    const navigate=useNavigate();
    return(
        <section className="cate">
            <article className="cate-art">
            <h1>Veg</h1>
            <img onClick={()=>{navigate('/veg')}} src={veg}/>
            </article>
            <article className="cate-art">
            <h1>Non-Veg</h1>
            <img  onClick={()=>{navigate('/Nonveg')}} src={nveg}/>
            </article>
            <article className="cate-art">
            <h1>Juice</h1>
            <img  onClick={()=>{navigate('/')}} src={juice}/>
            </article>
            <article className="cate-art">
            <h1>Snacks</h1>
            <img onClick={()=>{navigate('/')}} src={snacks}/>
            </article>
        </section>
    )
}
export default Categories;