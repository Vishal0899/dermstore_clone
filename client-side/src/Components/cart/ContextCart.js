import React, { useContext } from "react";
import { CartContext } from "./Cart";
import { Items } from "./Items";
// import { products } from "./products";
export const ContextCart = () => {
    // const [item, setItem] = useState(products)
    const { item, totalItem, totalAmount } = useContext(CartContext);
    // const {item }= useContext(CartContext)
    return (
        <>
            <header>
                <div className="continue-shopping">
                    <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
                    <h3>continue shopping</h3>
                </div>

                <div className="cart-icon">
                    <img src="./images/cart.png" alt="cart" />
                    <p>{totalItem}</p>
                </div>
            </header>
            <section className="main-cart-section">
                <div id="last">
                    <div>
                        <h1>shopping cart</h1>
                        <p className="total-items">You have added <span className="total-items-count">{totalItem}</span> item in cart</p>
                    </div>

                    <div className="card-total">
                        <h3>Total Price : <sapan>{totalAmount}</sapan></h3>
                        <button id="last">Checkout</button>
                    </div>

                </div>
                <div className="cart-items">
                    <div className="cart-items-container">

                        {item.map((curItem) => {
                            return <Items key={curItem.id} {...curItem} />
                        })}
                        
                    </div>

                </div>

                <br />

            </section>

        </>
    )

}