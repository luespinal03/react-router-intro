# react-router-intro

# React-Router-Intro Assignment

- _Approach_: - We are going to create a simple react application that is capable of switching through different page views without having to re-render the entire DOM by using react-router. - To do this, we are going to create three simple pages, a Home page, an About page and a Contact page (to simulate a simple website). - We are then going to create a Browser Router using react-router and add it to our application so that we can enter different urls in our browser address bar and visit different pages. - We are then going to add a simple navigation bar that will allow us to visit different pages in our application with simple button clicks. - Lastly, we are going to add a programmatic redirect to one of our pages to simulate a user visiting our site, filling out a contact form and then being redirected to the Home page.
  ​

## High Level Instructions

- Create a new github repository called react-router-intro and add the link to populi
- Clone the repository and initialize it by running 'create-react-app .' inside the project directory and running 'npm i react-router-dom' to install react router
- Create 3 pages Home.js, About.js and Contact.js in the .src/Pages directory. Each page should have a simple initial react component with an h1 that says the name of the page.
- Add some lorem ipsum sample text to the Home and About pages.
- Import createBrowserRouter from 'react-router-dom' in index.js and create a new router variable using createBrowserRouter with an empty array of routes.
- Add three new routes to the router array with the following pages as their elements
  - Path "/" should display the Home page
  - Path "/about" should display the About page
  - Path "/contact" should display the Contact page
- Import the RouterProvider component from 'react-router-dom' and replace the default <App/> component in index.js with <RouterProvider/> with the router passed in as a prop.
- Create a new component NavBar in the ./src/Components directory. Import the <Link/> component from 'react-router-dom' and add three links to the NavBar component that link to "/", "/about" and "/contact"
- Import NavBar into Home.js, About.js and Contact.js and add the <NavBar /> component to each page so that the NavBar displays above the h1 header for all the pages.
- Add a basic text input fields to the Contact page for firstName, lastName and email (just as an example contact page) and a button that says 'Submit' that programmatically redirects to the home page onClick
  ​

## Expanded Instructions

​

1. Project Setup:

- Create a new github repo called react-router-intro
- Clone the repo to your computer and add the link to populi
- cd into the react-router-intro directory
- Run 'npx create-react-app .' to initialize react in the repository
- Run 'npm i react-router-dom'
- Open App.js and replace the initial code with the following code:
  ​

```
import "./App.css";
​
const App = () => {
	return (
		<div className="App-header">
​
		</div>
	);
}
​
export default App;
```

- Run 'npm start' after react has finished installing
- If the above worked properly, you should see the react start page on localhost:3000
  ​

2. Create the Application Pages

- _Approach_: We are going to create three simple pages, a Home Page, an About Page and a Contact Page, for our application to render based upon the url path.
- Create a new directory ./src/Pages
- Create three new files
  - ./src/Pages/Home.js
  - ./src/Pages/About.js
  - ./src/Pages/Contact.js
- In each of the three files, create a simple react component. The name of the component should be the page name + Page (e.g. HomePage for Home.js). The components should all be the default export of the file. The components should also have an h1 inside the JSX with the title of the page (e.g. About Page in h1 tags for the about page)[1]
- In the JSX of the Home Page and the About Page, add some lorem ipsum example text separated into paragraphs using <p> tags. - https://www.lipsum.com/
  ​

3. Add the Browser Router and Create the Routes

- _Approach_: We are going to create a new Browser Router using react-router. The Browser Router will act as the main component that handles the url and page routing for our application.
- Open index.js and implement the following:
- import createBrowserRouter and RouterProvider from 'react-router-dom'
- import HomePage from './src/Pages/HomePage'
- import AboutPage from './src/Pages/AboutPage'
- import ContactPage from './src/Pages/ContactPage'
- Above the root variable, create a new variable called 'router' and set the value equal to createBrowserRouter([]). [2]
- In the empty array of createBrowserRouter([]), add three new objects which represent our routes with the following properties: [3]
  - The first object should have a path equal to "/" and the element should be <HomePage/>
  - The second object should have a path equal to "/about" and the element should be <AboutPage/>
  - The third object should have a path equal to "/contact" and the element should be <ContactPage/>
  - _Commentary_: These three objects represent the different url paths for our application. E.G. The path '/about' will be the path in the url after localhost:3000 (i.e. localhost:3000/about) and will display the About Page when visited.
- In the JSX of root (between the <React.StrictMode> tags), replace <App/> with <RouterProvider/> and pass in router as a prop. [4]
- If you implemented the above correctly, you should be able to visit the following urls and see their respective pages render: - localhost:3000 => Home Page - localhost:3000/about => About Page - localhost:3000/contact => Contact Page
  ​

4. Adding a Navigation Bar

- _Approach_: We cannot expect our users to manually enter urls into the address bar when they want to visit different pages in our application. Thus, we are going to create a navigation bar component with links to our pages. We are then going to import the navigation bar into every page of our application so that our users can click simply through to the various pages.
- Create a new folder ./src/Components
- Create a new file ./src/NavBar.js
- In ./src/NavBar.js, implement the following:
- Create a simple react component called NavBar and have it default exported from the file.
- Import Link from 'react-router-dom' at the top of the file.
- Add three <Link><Link/> components into the JSX of NavBar. The text inside the <Link> tags should be names of the three pages of our application Home, About and Contact. The 'to' prop for each <Link> should be set to the appropriate path for each page (e.g. '/contact' for the Contact Page).[5]
- In each of the three page files ./src/HomePage.js, ./src/AboutPage.js and ./src/ContactPage.js, import the NavBar component. Then in the JSX of each Page, add an instance of <NavBar/> above the h1 tag. [6]
- If you implemented the above correctly, you should now be able to view every page of your application and click on the links in the navigation bar to switch between pages. - _Note_: Even though we are switching between pages, we are not reloading the browser and the nagivation between pages is fast since we are simply rendering different componets as our pages using react-router.
  ​

5. Building the Contact Form

- _Approach_: We are going to implement basic form fields to simulate a user entering information on our site. We are then going to add a programmatic on our submit button to simulate a user submitting the form and being redirected to the Home Page.
- In ./src/ContactPage.js, implement the following:
- Import useNavigate from 'react-router-dom'
- Add the variable navigate = useNavigate() to the body of Contate Page (above the JSX return statement).
- Add three new text input fields in the JSX of ContactPage with accompanying state variables for firstName, lastName and email.
- Add a button with the text 'Submit' to the JSX of ContactPage. Add an onClick handler that calls useNavigate with "/" passed in as the argument. [7]
- If you implemented the above correctly, you should be able to visit the contact page and click the Submit button and be redirected to the Home Page.
  ​ \***\*\*\*\*\***STRETCH_GOALS\***\*\*\*\*\***
  ​

6. Add Basic Form Validation to the Contact Page

- In the onClick handler of the contact form Submit button, add conditionals that will check to see that all three fields firstName, lastName and email have truthy values before allowing the user to submit the form. I.E. Check to see that all three state variables have truthy values before calling navigate("/")
  ​

## Code References

- [1]

```
const HomePage = () => {
	return (
		<div>
			<h1>
				Home Page
			</h1>
		</div>
	)
}
​
export default HomePage
```

- [2]

```
const router = createBrowserRouter([])
```

- [3]

```
const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage/>
	},
	{
		path: "/about",
		element: <AboutPage/>
	},
	{
		path: "/contact",
		element: <ContactPage/>
	}
])
```

- [4]

```
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

- [5]
  import { Link } from "react-router-dom";
  ​
  const NavBar = () => {
  return (
  <div>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/contact">Contact</Link>
  </div>
  )
  }
  ​
  export default NavBar;
- [6]

```
import NavBar from '../Components/Navbar'
​
const HomePage = () => {
	return (
		<div>
			<NavBar/>
			<h1>
				Home Page
			</h1>
		</div>
	)
}
​
export default HomePage
```

- [7]

```
<button onClick={()=>{
	navigate("/")
}}></button>
```

# React-Router-Intro Part 2 Assignment

- _Approach_: - In our current setup, we have to import NavBar and include it in the JSX of every page in our application. React-router provides us with the ability to render a part of the page as a layout and have child components render within that layout using the <Outlet/> component. This will allow us to refactor our application so that we only have to import NavBar into a single page layout component, but have the NavBar show up on every page. - We will also be creating a Signups page that will dynamically display the users who signup via the contact form with <Outlet/>, the outlet context and the route params.
  ​

## High Level Instructions

​

1. Layout Refactor

- In ./src/index.js, refactor the routes we are passing into createBrowserRouter so that the topmost route has a path of "/" and the element is <App/>. Set the child routes of this new "/" <App/> route to be <HomePage/> as the index route, <AboutPage/> as the "/about" route and <ContactPage/> as the "/contact" route.
- In ./src/Pages/HomePage, ./src/Pages/AboutPage and ./src/Pages/ContactPage, remove the NavBar import and remove <NavBar/> from the JSX of each component.
- In ./src/App, import the <NavBar/> component and include it in the JSX of <App/>. Additionally, import the <Outlet/> component from 'react-router-dom' and add an instance of <Outlet/> to the JSX of <App/> below <NavBar/>
- Check that the above worked by visiting every page and verifying that each one has a NavBar and is displaying the dark grey background color.
  ​
  ****\*\*****STRETCH_GOALS****\*\*****
  ​

2. Adding a Signup

- In the body of <App/> in ./src/App.js:
  - Create a new state variable called signupList.
  - Create a new function called handleAddSignup that takes in three parameters: firstName, lastName and email. handleAddSignup should create a new signup object with those three properties and add them to the signupList state variable.
- In the <Outlet/> in the JSX of <App/>, pass in a prop called context with the value of an array containing signupList and handleAddSignup as the first two items.
  - <Outlet context={[signupList, handleAddSignup]}/>
- In <ContactPage/>, implement the following: - Import useOutletContext from react-router-dom and invoke it in the body <ContactPage/> to gain access to the handleAddSignup variable. - Call handleAddSignup with the firstName, lastName and email passed as arguments in the Submit button onclick handler.
  ​

3. Signups Page Implementation

- Create a new page in ./src/Pages called SignupsPage and add it to the router in index.js as a child of the "/" route with the path "/signups".
- Create a new component in ./src/Components called SignupCard and add it to the router in index.js as a child of the "/signups" route with the path "/signups/:email".
- In <NavBar/>, add a new link that links to the "/signups" path for the Signup Page.
- In the <SignupsPage/>, implement the following:
  - Import useOutletContext from react-router-dom and invoke it to gain access to the signupList variable.
  - Create a select dropdown that:
    - Has one empty option as the default option.
    - Maps through signupList and generates options for each user signup. The value of the options should be the signup email and the text should be the signup's first name.
    - On change, it programmatically navigates to /signups/{email-of-the-signup}
      - _Hint_: The email of the signup should be coming through on the event object.
  - Add an <Outlet/> with a context prop set to an array that containst signupList as its first item.
- In <SignupCard/>, implement the following:
  - Import useOutletContext from react-router-dom and invoke it to gain access to the signupList variable.
  - Import useParams from react-router-dom and invoke it to gain access to the email url parameter.
  - Loop through signupList and search for a signup whose email matches the email in the url parameter.
  - Add a conditional render to the JSX of <SignupCard/> that will display the signup firstName, lastName and email if the signup exists (if the signup does not exist, only render the enclosing <div>'s for <SignupCard> to avoid react throwing an error).
- If the above was implemented properly, you should be able to add a new user signup via the contact form and see the info for that user display on the /signups/:email page
  ​

## Extended Instructions

​

1. Refactor the Application Routes

- _Approach_: In order to have our <App/> component act as the layout for our application, we will need to refactor our routes so that the routes we created for part 1 are children of the base <App/> route.
- In ./src/index.js, implement the following:
- Add a new route object in the createBrowserRouter routes array that has the property path set to "/", the property element set to <App/> and property children set to an empty array.
- Move all the route objects from part 1, including the original "/" Home Page route, the /about" route and the "/contact" route into the empty children array for the new "/" route. Then remove the path: "/" property from the <HomePage/> route and set the property index: true on it. [1] - _Note_: What we are doing here is setting the default page view for "/" to be <App/> and setting the children of this page view to be our other pages. This will eventually have the effect of rendering our other pages inside of the JSX of <App/> when react-router renders the route we visit. We remove the path for our Home Page and set the property index to be true so that when we visit the "/" route, the Home Page will render by default.
  ​

2. Refactor NavBar and App Layout

- _Approach_: Instead of importing NavBar three times into three separate files, we want to import it once and include it in our default <App/> layout. We also need to provide a way for react-router to use this layout to render our pages. We will implement this by using the <Outlet/> component provided by react-router.
- In ./src/HomePage.js, ./src/AboutPage.js and ./src/ContactPage.js, remove <NavBar/> from the JSX of each page and remove the NavBar import statement.
- In ./src/App.js, implement the following:
- Import NavBar from "./Components/NavBar" and add <NavBar/> to the JSX of <App/>.
- Import {Outlet} from 'react-router-dom' and add <Outlet/> to the JSX of <App/> below the <NavBar/>.
- If you implemented the above correctly, you should now be able to visit localhost:3000 and see the new page layout render with the grey background and white text styling.
- _Optional_: Add a class to <NavBar/> and add some styling so that the links have space between them and easier to see on the grey background.
  ​
  ****\*\*****STRETCH_GOALS****\*\*****
  ​

3. Adding a Signup

- _Approach_: We are going to add new user signups to our application by saving the inputs from the <ContactPage/> as a new signup in the state of <App/>. Because our application is now using react-router to render our components, we can no longer directly pass props into child components. Instead, we will be using the <Outlet/> component to pass our variables around our application.
- In the body of <App/> in ./src/App.js, implement the following:
  - Create a new state variable called signupList with its setter function.
  - Create a new function called handleAddSignup that takes in three parameters: firstName, lastName and email. [2]
  - In the handleAddSignup function, create a new variable newSignup and set the key/value pairs to be equal to the parameters of the handleAddSignup function: firstName, lastName and email. Then add the new signup to the signupList state variable by making a copy of signupList (spread operator), adding newSignup to the signupListCopy and calling setSignupList with signupListCopy.
- In the <Outlet/> component in the JSX of <App/>, pass in a prop called context. Set the value of the context prop to be an array containing signupList and handleAddSignup as the first two items. [3]
  - _Commentary_: <Outlet/> is going to render whatever child element matches the current route, e.g. it will render the <ContactPage/> element for the "/contact" route. In order to pass variables from <App/> in to <ContactPage/> we will have to use the context prop of <Outlet/> to pass our variables through since we can no longer pass props directly to <ContactPage/> from <App/>.
- In ./src/Pages/ContactPage, implement the following: - Import useOutletContext from react-router-dom - In the body of <ContactPage/>, set a destructured array variable containing signupList and handleAddSignup as the two items equal to useOutletContext invoked. [4] - _Commentary_: Note how the two items in the destructured array provided by useOutletContext matches the array passed into the <Outlet/> context from <App/>. We can add as many items we wish from the parent element <App/> into this array and gain access to them from the rendered child element. The only thing we need to pay attention to is the order of the items in the array. The first item passed into the context array will be the first item in the destructured array given to us by useOutletContext(). E.G. if we pass [someVariable] into the <Outlet/> context, then the first item in the destructured array coming from useOutletContext() will be someVariable. - In the onClick handler for the Submit button, call handleAddSignup with the firstName, lastName and email passed as arguments. [5]
  ​

4. Adding the Signups Page Route

- _Approach_: Now that we are saving a new user signup with the contact form, we are going to implement a Signups Page that will dynamically display a signup on the page based upon a url parameter.
- Create a new file ./src/Pages/SignupsPage.
- In ./src/Pages/SignupsPage, create a new component <SignupsPage> with the title Signups Page in an h1 tag and export default SignupsPage from the file.
- Create a new file ./src/Components/SignupCard.
- In ./src/Components/SignupCard, create a new component <SignupCard> with just the enclosing <div> tags in the JSX and export default SignupCard from the file.
- In ./src/index.js, implement the following:
  - Import SignupsPage from "./Pages/SignupsPage"
  - Import SignupCard from "./Components/SignupCard"
  - Add a new route as a child of the "/" route, the path should be "/signups" and the element should be <SignupsPage />.
  - Add a new route as a child of the "/signups" route, the path should be "/signups/:email" and the element should be <SignupCard/> [6]
  - _Commentary_: This will allow the Signup Page to be rendered in our <App/> layout when the user visits localhost:3000/signups. Additionally, when the user vists the url localhost:3000/signups/{some-user-email} the Signup Page will be rendered along with the Signup Card through <Outlet/> since <SignupCard/> is now a child of <SignupsPage/>.
- In the <NavBar/> component in ./src/Components/NavBar.js, add a new <Link/> that links to the "/signups" path with the text Signups.
  ​

5. Implementing the Signups Page

- In ./src/Pages/SignupsPage.js, implement the following:
  - Import { Outlet, useOutletContext, useNavigate } from 'react-router-dom'
  - In the body of <SignupsPage/>,
    - Create a new variable navigate and set it equal to useNavigate().
    - Create a new destructured array variable with signupList as the first item and set it equal to useOutletContext(). [7]
  - In the JSX of <SignupsPage/>,
    - Add a new <select> dropdown with an empty <option> as the first option.
    - Inside the <select> tags, map through signupList and return an <option> for each signup in the signupList. The value of each <option> should be equal to the signup email and the displayed text should be equal to the signup firstName. [8]
    - Add an onChange handler to the <select> that will programmatically navigate (using navigate()) to the path `/signups/${e.target.value}`
    - _Note_: This handler will now navigate the user to the /signups/:email url where the email is being set by the value of each <option> inside the <select>.
    - Add an <Outlet/> below the <select> dropdown. Pass in the context prop to outlet and set the value equal to an array containing signupList as the first item.
- In ./src/Components/SignupCard.js, implement the following:
  - Import { useOutletContext, useParams } from 'react-router-dom'
  - In the body of <SignupCard/>,
    - Create a new variable params and set it equal to useParams()
    - Create a new destructured array variable with signupList as the first item and set it equal to useOutletContext(). [7]
    - Loop through signupList (I recommend using .find()) to find a user signup whose email property matches the email url parameter (this can be accessed from params.email) and assign that found user signup to a new variable called foundSignup.
  - In the JSX of <SignupCard/>,
    - Add three conditional render statements that will render the firstName, lastName and email of foundSignup if foundSignup exists. [9]
      - _Note_: The conditional render here is to account for the usecase of there being no users in our signupList. This is because react will throw an error if we try to render foundSignup.firstName for instance when foundSignup does not exist.
- If you implemented all the above correctly, you should be able to add a new user signup by filling in and submitting the contact form. Then you should be able to navigate to the Signup Page and click on the dropdown menu to see the details of the user signup display on the page.
  ​

## Code References

- [1]

```
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);
```

- [2]

```
const handleAddSignup = (firstName, lastName, email) => {}
```

- [3]

```
<Outlet context={[signupList, handleAddSignup]}/>
```

- [4]

```
const [signupList, handleAddSignup] = useOutletContext()
```

- [5]

```
handleAddSignup(firstName, lastName, email)
```

- [6]

```
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
			{
				path: "/signups",
				element: <SignupsPage />,
				children: [
					{
						path: "/signups/:email",
						element: <SignupCard/>
					}
				]
			}
    ],
  },
]);
```

- [7]

```
const navigate = useNavigate()
const [signupList] = useOutletContext();
```

- [8]

```
{signupList.map((signup)=>{
	return (<option value={signup.email}>{signup.firstName}</option>)
})}
```

- [9]

```
{foundSignup && <p>{foundSignup.firstName}</p>}
```
