import { Route, Routes } from "react-router-dom";

import "./App.css";
// import Middle from "./Components/Middle";
import Middle from "./Components/Middle";
import Navbar from "./Components/Navbar/Navbar";
import PrivateRoute from "./Components/PrivateRoute";
import { Login } from "./Components/SignUp&Login/Login";
import { SignUp } from "./Components/SignUp&Login/SignUp";
import { second_extra } from "./Components/slider";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={
						<PrivateRoute>
							<Middle slides={second_extra} />
						</PrivateRoute>
					}
				/>

				<Route path="/signUp" element={<SignUp />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
