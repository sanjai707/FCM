import React from "react";
import cover from"../images/FOOD STALL (1).png";
import { useNavigate } from "react-router-dom";
function Home()
{
const navigate = useNavigate();

    return(
        <section className="home-sec">
            <article className="home-img">
            <img src={cover} alt="cover Img"/>
            </article>
            <article className="home-text">
            <h3>ONLINE FOOD ORDERING SYSTEM</h3>
            </article>
            <article className="home-btn">
            <button onClick={()=>navigate("/categories")}>Order now</button>
            </article>
        </section>
    )
}
export default Home;
