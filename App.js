import './App.css';
//  import LoanAgreement from './component/loanAgreement/LoanAgreement';
//  import LoanApplication from './component/loanApplication/LoanApplication'; 
 import LoanManager from './component/loanManager/LoanManager';
 import Admin from './component/loanApplication/admin/Admin';
  import Customer from './component/customer/Customer';
 import Login from './component/login/login';
 import About from './component/About';
 import Contact from './component/Contact';
 import Home from './component/Home';
 import Dashboard from "./component/customer/Dashboard"; 
 import News from "./component/customer/news/News";
 import Header from './component/Header';
 import { Switch, Route, Redirect } from "react-router-dom";
 import PrivateRoute from "./component/PrivateRoute";
 import { NewsContextProvider } from "./component/customer/news/NewsContext";
	 
function App() {
  return (
		<div className="App">
			<Header />

			{/* Based on location particular component should render */}
			{/* {location === "/" && <Content />}
			{location === "/about" && <About />} */}

			{/* React Routing with Lazy Loading */}
		
				<Switch>
					{/* <Redirect from="/todoappv1" to="/todoappv2" /> */}
					<Route path="/about">
						<About />
					</Route>
					<Route path="/news">
						<NewsContextProvider>
						<News />
						</NewsContextProvider>
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<PrivateRoute path="/dashboard" component={Dashboard} />
					<PrivateRoute path="/admin" component={Admin} />
					<PrivateRoute path="/loanManager" component={LoanManager} />
					<PrivateRoute path="/customer" component={Customer} />
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/logout">
					<Redirect to="/login" />
					</Route>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="*">
						<h1>404 Not Found!</h1>
					</Route>
				</Switch>
			
		</div>
	);
}
export default App;

  
