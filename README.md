Web-based app built in React searches for Breaking Bad characters via API

Tailor-made improvements:

1. Status translate function to Brazilian Portuguese
2. Function that converts dates to Brazilian format
3. Search using UseState (real-time search)
4. Use Axios to query via query (real-time search)


#API #frontend #components #CSS #JavaScript #react 

Made using React 6, Axios, Redux, Webpack and CSS3, JavaScript and HTML5
API provided by https://breakingbadapi.com

Repository: https://github.com/marcelxv/Breaking-Bad-Char-Index
Live project: https://breaking-bad-char-index.vercel.app/

Walkthrough (step by step): 
- [x] Create first component HEADER.JS
- [x] Create a subfolder on components called UI
- [x] Analyze and comment CSS
- [x] Add favicon
- [x] Error for capital letter on project’s name
- [x] Create a React App Structure
- [x] Clean code that we’ll not use
- [x] Clean files that we’ll not use
- [x] Open terminal on VSCODE and give command to create react app
- [x] Open new folder on VSCODE
- [x] Add imagens (pasta em src)
- [x] Mistake with hard reload
- [x] Copy CSS from repository
- [x] Create components folder
- [x] Use ES7 React/Redux to create a pre-modeled component (template) with arrow function
- [x] @ Header.js import logo using Webpack
- [x] @ Header. Js apply class center 
- [x] @ Header.js insert logo image 
- [x] @app.js Test Header component 
- [x] @app.js Import UseState
- [x] @app.js Import UseEffect
- [x] @app.js Create const to cards, with setCards function to useStates (empty)
- [x] @app.js Create const to carregando, with estaCarregando function to useStates (true)
- [x] @app.js Create useEffect arrow function to fetch data (using AXIOS)
- [x] @app.js Import AXIOS
- [x] @packcage.json Check if it’s installed 
- [x] @ terminal Install AXIOS via npm
- [x] @app.js Create const to FetchData / arrow function async = await axios( base url )
- [x] @app.js Console log to test data fetch
- [x] @app.js Get an error caused by never called FetchData function
- [x] @app.js Call fetch item
- [x] Clear console errors get rid of Webvitals module
- [x] @app.js set data fetched to cards (setCards)
- [x] Create a new folder called Characters
- [x] Create component inside /Characters GridPersonagens.js
- [x] @CharacterGrid.js use ES7 shortcut to create component rafce
- [x] Call gridPersonagens em @app.js
- [x] @app.js pass data from state of cards and estaCarregando para GridPersonagens.js
- [x] Catch values / data from app.js densconstructive way
- [x] @GridPersonagens.js returns estaCarregando
- [x] @GridPersonagens.js Use a ternary to check if isLoading is true / false
- [x] @GridPersonagens.js create a section with class name of cards (to use pre-style from css)
- [x] @GridPersonagens.js Use map to catch data through items and put that on cards via react list
- [x] @GridPersonagens.js Test card receiving data passing name card.name to element H1
- [x] @GridPersonagens.js add key={card.char_id} to element to get rid of error on react list without index
- [x] Create a file called ItemPersonagem.js inside ui/personagens to deal with specific character item component
- [x] Generate a component with arrow function using Redux
- [x] @ItemPersonagem.js Bring Card value as a prop
- [x] @GridPersonagem Import ItemPersonagem.js 
- [x] Test if card name value pass through via props
- [x] @ItemPersonagem.js create following UI’s in the JSX format: div.card, div.card-inner, div.card-front, div.card-back, 
- [x] @ItemPersonagem.js use h1 for card.name, li for card.portrayed, card.nickname, card.status and card.birthday
- [x] Test if values is applied to all UI elements correctly
- [x] Create a new file on components/ui called search.js
- [x] Use redux to create arrow function component
- [x] Give a section class name of search
- [x] Create a input type text
- [x] Test while @app.js import
- [x] @search.js Create a const for search (arrow function) for text and setTextfunction
- [x] @search.js Add value = value={text} at input
- [x] @search.js add onChange= setText
- [x] Error on useState caused by forgot to import use state in the header of @search.js / correct
- [x] Test if search.js is collecting user value in the input
- [x] @app.js create a const to useState that queries (setQuery) the value of search input and use it on fetch url
- [x] @search.js Change onChange value to function called onChange with e.target.value
- [x] @search.js Create arrow function for onChange (previous assign to onChange at input with two values that get a ‘q’ value
- [x] @app.js set at search module a getQuery parameter with value of (q) on arrow function of setQuery(q)
- [x] @app.js on url of axios promise, change the format to a dynamic format that put {query}
- [x] At fetchData const (arrow function) assign query as dependency (inside brackets at end)
- [x] Test the input and useState render – it’s reacting to letters typed
- [x] Create a new component inside components/ui called spinner
- [x] Use Redux to start a the new component with arrow function
- [x] @spinner.js Import the spinner gif
- [x] @spinner.js Add image with spinner as src 
- [x] @GridPersonagem.js import spinner component
- [x] @GridPersonagem.js change h1 tag for the Spinner Component
- [x] Test it out

* useState: allow use different ‘states’ inside of an component
* UseEffect: fire off when component loads to make HTTP request to get the data
