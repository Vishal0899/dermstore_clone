import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../Footer";
import Navbar from "../Navbar/Navbar";
import { CartContext } from "./Cart";
import { Items } from "./Items";
// import { products } from "./products";
export const ContextCart = () => {
	// const [item, setItem] = useState(products)
	const { item, totalItem, totalAmount } = useContext(CartContext);

	const navigate = useNavigate();
	// const {item }= useContext(CartContext)
	return (
		<div>
			<Navbar />
			<div className="shopping-data">
				<Link to="/">
					<div className="continue-shopping">
						<img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
						<h3>continue shopping</h3>
					</div>
				</Link>

				<div className="cart-icon">
					<img src="./images/cart.png" alt="cart" />
					<p>{totalItem}</p>
				</div>
			</div>
			<section className="main-cart-section">
				<div id="last">
					<div>
						<h1>shopping cart</h1>
						<p className="total-items">
							You have added{" "}
							<span className="total-items-count">{totalItem}</span> item in
							cart
						</p>
					</div>

					<div className="card-total">
						<h3>
							Total Price : <sapan>{totalAmount}</sapan>
						</h3>
						<button
							id="last"
							onClick={() => {
								navigate("/checkoutPage");
							}}>
							Checkout
						</button>
					</div>
				</div>

				<br />
			</section>
			<div className="cart-items">
				<div className="cart-items-container">
					{item.map((curItem) => {
						return <Items key={curItem.id} {...curItem} />;
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
};
