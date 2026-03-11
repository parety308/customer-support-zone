### ✅ Readme: 
1. What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax that lets you write HTML-like code inside JavaScript. It makes React components easier to read and write.
Instead of using React.createElement(), you can just write:

<h1>Hello World</h1>


JSX helps you clearly describe what the UI should look like, and React turns it into actual JavaScript under the hood.

2. What is the difference between State and Props?

State is data that belongs to a component — it can change over time (like a counter value).

Props are like function arguments — they’re passed from parent to child components and can’t be changed by the child.

Props = data given to a component.
State = data managed inside a component.

3. What is the useState hook, and how does it work?

useState is a React Hook that lets you add state to a functional component.
You give it an initial value, and it returns two things: the current value and a function to update it.

Example:

const [count, setCount] = useState(0);


Here, count is the current state, and setCount updates it.
Whenever you call setCount, React re-renders the component with the new value.

4. How can you share state between components in React?

You can share state by lifting it up to a common parent component and then passing it down as props.
If components are far apart, you can also use Context API, Redux, or other state management tools.

5. How is event handling done in React?

React uses camelCase for event names and passes a function as the event handler.
For example:

<button onClick={handleClick}>Click Me</button>


Event handling in React feels like regular HTML, but it’s actually handled using JavaScript functions — and you don’t need to manually add event listeners like in vanilla JS.