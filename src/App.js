import React,{ useState, useEffect, createContext, memo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './containers/Navbar/Navbar';
import Signup from './containers/Signup/Signup';
import Login from './containers/Login/Login';
import Gold from './containers/Gold/Gold';
import GoldWithDiamondProducts from './containers/GoldWithDiamondProducts/GoldWithDiamondProducts';
import SilverProducts from './containers/SilverProducts/SilverProducts'
import Footer from './components/Footer/Footer'
import Cart from './components/Cart/Cart';
import {getAuth, onAuthStateChanged } from 'firebase/auth';
import {app, db} from './base';
import { collection } from 'firebase/firestore'
import ContactUs from './components/ContactUs/ContactUs';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Backdrop from './components/Backdrop/Backdrop';
import Checkout from './components/Checkout/Checkout'
import SpecialOrder from './components/SpecialOrder/SpecialOrder';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/[slug]';
import Music from './components/Music/Music';
export const User = createContext()

const App = () => {
	const [lang, setLang] = useState();
	const [show, setShow] = useState(false);
	const [music, setMusic] = useState(false);
	const [login, setLogin] = useState(false);
	const [choosenProducts, setChoosenProducts] = useState();
	const [isAuth, setIsAuth] = useState(null);
	const [cartLength, setCartLength] = useState(null);
	const [buyProduct, setBuyProduct] = useState(null);
	let [quantity, setQuantity] = useState(1)
	let [path, setPath] = useState('')
	
	const auth = getAuth(app)
	const query = collection(db, `users/${isAuth}/children`)
	const [docs, loading, error] = useCollectionData(query)
	useEffect(() => {
	if(loading){
		setCartLength(0)
	}else{
		setCartLength(docs.length)
	}
	});
	//check if user logined in or not
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if(user){
				setIsAuth(user.uid)
			}else{
				setIsAuth()
				setCartLength(0)
			}
		})
	}, [auth]);
	return (
		<User.Provider value={{music,setMusic,login,setLogin,path, setPath, isAuth, lang, setLang, show, setShow, choosenProducts, setChoosenProducts, cartLength, setCartLength, buyProduct, setBuyProduct, quantity, setQuantity}}>
			<BrowserRouter>
				<div id="App" className='App'>
					<nav style={{boxShadow:'rgb(0 0 0 / 16%) 0px 1px 4px'}}>
						<Navbar />
					</nav>
					<Login>
						<Backdrop />
					</Login>
					<Music>
						<Backdrop />
					</Music>
					<Routes>
						<Route path='/' element={<Home />}/>
						<Route path='/silver-products' element={<SilverProducts />} />
						<Route path='/gold-products' element={<Gold />}/>
						<Route path='/goldwdiamond_products' element={<GoldWithDiamondProducts />}/>
						<Route path='/contactus' element={<ContactUs />} />
						<Route path='/special-order' element={<SpecialOrder />} />
						<Route path='/cart' element={<Cart />}/>
						<Route path='/sign-up' element={<Signup />}/>
						<Route path='/product/:slug' element={<ProductDetails />}/>
						<Route path='/buynow' element={<Checkout />}/>
					</Routes>
					<footer>
						<Footer />
					</footer>
				</div>
			</BrowserRouter>
		</User.Provider>
	);
}

export default App;
