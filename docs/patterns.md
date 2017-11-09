# React Patterns & Anti-Patterns

This guide is mainly written for personal learning purposes, and as a simple tutorial or quick-guide for other junior developers working with React. This guide will be updated frequently with new best-practices and explorations of new "hipster" React patterns.

My company [WebHouse](http://www.webhouse.dk) is working on a lightweight React framework aimed at making design and development of Web Apps faster and easier and more reusable ... from our point of view. New collegues and interns working with [ODEUM Code](http://odeumcode.com) at WebHouse are also targeted with this guide. 

Main goals are:
- A quick guide to the most common best practices and patterns when working with React
- Patterns for optimizing React
- What to do and what not to do
- Personal React coding patterns 
- Tips & tricks

Quote: *"Premature optimization is the root of all evil"* 

Translation: *"Don't worry about performance until you have a problem"*

With these true words in mind I will try not to overemphasize my need to optimize, perfectionate, structure, minify, clearify, design and architect the way I work and the way I prefer others to work. All is written and "architected" with true passion for well functioning and beautiful React code. 

## Contents:
This is what's on the menu:

- [Basic React Patterns](#basic-react-patterns)
	- [Unidirectional Dataflow](#unidirectional-dataflow)
	- [Stateless function](#stateless-function)
	- [JSX spread attributes](#jsx-spread-attributes)
	- [Conditional rendering with ternary operator](#conditional-rendering-with-ternary-operator)
	- [Conditional rendering without ternary operator](#conditional-rendering-without-ternary-operator)
	- [Using state to manage conditional rendering](#using-state-to-manage-conditional-rendering)
	- [Destructuring arguments](#destructuring-arguments)
	- [Children types]
	- [Array as children]
	- [Function as children]
	- [Children pass-through]
	- [Proxy component]
	- [Style component]
	- [Event switch]
	- [Layout component]
- [API for React Components](#api-for-react-components)
- [Component types in React](#component-types-in-react)
	- [Stateless Component](#stateless-component)
	- [Stateful Component](#stateful-component)
	- [Container component](#container-component)
	- [Render Props](#render-props)
	- [Higher-order component](#higher-order-component)

- [State hoisting]
- [Controlled input]
- [Portals] - https://reactjs.org/docs/portals.html 


## Basic React Patterns:

### Unidirectional Dataflow
##### [:: Contents](#contents)

In React data flows in one direction - uni-directional. 
Data flows **down** from parent to child components
This is the pattern of passing information (state and props) down (as objects, strings, etc.) and passing functionality down to allow child components to pass information back up. Like sending down a **box of food (data)** and a **walkie talkie** (handler / callback function) to people trapped underground.

- A parent **never** asks its child for its state
- A child can **only** update parent state by executing a callback function that it was given by its parents.
- A child can **never** mutate props passed down to it

The best practices pattern is for the child to use a callback function prop to notify the parent that something has happened - the parent can then mutate its own data (state) and pass it back into the child through props. Never let the child mutate the props (they are read-only and immutable) they should be kept immutable even though diverting from this immutable pattern is technically achievable.


**[Example dataflow](/src/components/DataFlow.js)**

Best practices for data flows are hence:

- From parent to child: via props
- From child to parent: via handlers (callback function)

```js
// The child is passed down data and a handler:
<Child data={food} onEvent={this.handleEvent}>
```
```js
// The parent has:
class Parent extends React.Component {  
  handleEvent = (dataFromChild) => {
  }
}
```

### Stateless function
##### [:: Contents](#contents)

**Stateless functions** are as the name suggests ... stateless. They don't hold "state", they are simply JavaScript functions. A simple way to define highly reusable **presentational components**.

In React, a stateless function is usually a **Stateless Component** which is described elsewhere in this document. 

Through this terminology we could also call the declaration **React Stateless Functional Components**.

#### Definition examples

```js
// Definition of a stateless function using the function keyword
function Welcome(props) {
  return (
	<h1>Welcome, {props.name}</h1>
  )
}

// Definition of a stateless arrow function 
const WarmWelcome = (props) => {
  return <h1>Warm welcome, {props.name}</h1>
}

// Arrow functions can ommit the parens when only on argument is passed, and ommit return statement when only one expression is returned
const HotWelcome = props => <h1>Hot welcome, {props.name}</h1>

// Arrow function without props and the simplest stateless component you can create
const Greeting = () => <div>Hi there!</div>

// Destructuring of passed props
const HotGreeting = ({ name, age }) => <div>Hi there {name} you {age < 30 ? ' youngster' : ' oldie' }</div>
...
// And the execution
<HotGreeting name={'Christian'} age={49} />
```

#### Facilities and usage
Stateless functions get **"props"** passed as arguments.

```js
const Greeting = (props) =>
  <Text>Greetings {props.name}! Happy to see you {props.hasVisited ? ' again' : ' for the first time'}</Text>
```

Stateless functions can define local scoped variables, when a function block is used.

```js
const Greeting = (props) => {
  const style = {
    fontSize: props.fontSize,
    color: props.color,
  }

  return <div style={style}>{props.name}</div>
}
```

You can get the same result by using a helper functions.

```js
// Helper function defining and returning a partial style object
const getStyle = props => ({
  fontSize: '28px',
  color: props.color,
})

const Greeting = (props) =>
  <div style={getStyle(props)}>Hello {props.name}</div>
...
<Greeting name='Christian' color='magenta'/>
```

Stateless functions can define its own **"propTypes"** and **"defaultProps"** which is always a good pattern to describe its interface and types.

```js
Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string
}
Greeting.defaultProps = {
  name: 'Homie',
  color: 'palevioletred'
}
```

## JSX spread attributes
##### [:: Contents](#contents)

**JSX spread attributes** is a feature for passing all of an object's properties (props) as JSX attributes.

The following two components are equivalent:
```js
// Props written as attributes
const App1 = () => {
  return <Greeting firstName="Luke" lastName="Skywalker" />
}

// Props "spread" from object with the spread operator "...props"
const App2 = () => {
  const props = {firstName: 'Luke', lastName: 'Skywalker'}
  return <Greeting {...props} />
}
```

Using the spread operator to forward passed down props to underlying components.
```js
const HotGreeting = props =>
  <Greeting {...props} />
```

### Conditional rendering with ternary operator
##### [:: Contents](#contents)

You might want to render a part of your UI if a specific condition is met. For conditional rendering, **we can't use regular if/else conditions inside a JSX** component definition. 
We have to use the **Conditional (ternary) Operator** with logical operators, &&, || and !.

#### if (example 1)
The list item block is rendered if condition === true.

```js
{condition && (
  <li>Rendered when condition = true</li> 
  <li>Rendered when condition = true</li> 
  <li>Rendered when condition = true</li> 
  <li>Rendered when condition = true</li> 
)
}
```

#### if (example 2)
We store the value of the checkbox in state (isChecked: true/false) and the **ternary operator** renders the Button component if the condition is true (if isChecked === true).

```js
<Checkbox checked={isChecked} onChange={this.handleChange} />

{isChecked && <Button label={'Rendered when isChecked = true'} /> }
```

#### unless
The Text component is rendered if cindition === false.

```js
{condition || <Text>Rendered when condition = false</Text> }
```

#### if - else

```js
{condition ? <Text>Rendered when true</Text> : <Text>Rendered when false</Text> }
```
#### if-else (blocks)

```js
{condition ? (
  <div>
    Rendered when true
  </div>
) : (
  <div>
    Rendered when false
  </div>
)}
```

### Conditional rendering without ternary operator
##### [:: Contents](#contents)

As mentioned earlier we can not use if/else statements in JSX component definitions for conditional rendering. 
If you dislike using the ternary operator you have to lift the conditional expression up to a higher level, and either decompose your problem further and/or use state or props to manage conditional rendering.   

You can use props for conditional rendering and create a **stateless function component** like this:

```js
const conditionalRendering = (shouldRender) => {
  if (shouldRender) {
    return (
	  <div>
	  	<p>This is rendered</p>
	  </div>
	)
  }
}
```

### Using state to manage conditional rendering


## Destructuring arguments
##### [:: Contents](#contents)
...

## Basis concepts for optimization:

### Purity

### Use pure functions and pure components. 
##### [:: Contents](#contents)

A pure function is a function whose return value is solely determined by its input values, without any dependence on global state or causing any side effects. In components, you often have complicated behavior that aids, but is not directly tied to rendering. Use pure helper functions to move this logic outside of the component, resulting in a component with fewer responsibilities and lower complexity.

Pure render optimized React components can be extremely performant but it requires users to treat their data as immutable for it to work properly. The anti-pattern is creating new arrays, objects, functions or any other new identities during render or in Redux connect(mapState).

Use React.PureComponent (which auto implements shouldComponentUpdate) or use shouldComponentUpdate in React.Component classes. 


### Public Class Fields syntax ([Experimental Stage 2 - TC39](https://github.com/tc39/proposal-class-fields))
##### [:: Contents](#contents)

You might often use an inline arrow function as a prop for controlling events or rendering. If that prop wants to control the render in a child component (commonly called **Render Props** or Render Callbacks) you will have a hard time **ensuring referential identity** which is your top priority when you want to avoid **PureComponent** or **shouldComponentUpdate** to re-render your component when your state or props aren't mutated. 

The potential problem and anti-pattern with inline arrow functions is that, the callback function is reallocated (with a different **referential identity**) each time the component renders. In many cases, this isn’t a big deal. But if you have child components, they will re-render even when data hasn’t mutated because each render allocates a new function.
To avoid this use the **experimental public class fields syntax**. 

Applying the **experimental public class fields syntax** (enabled by default in Create React App), you can use **class fields** to correctly bind callbacks, and at the same time **ensure referential identity** for your callback functions without having to declare all your methods in the constructor which is a complete mess:

```js
class ReferentialIdentity extends React.Component {  

// This class fields syntax ensures `this` is bound within handleClick.
handleClick = () => {
  console.log('this is:', this)
}

createRef = (input) => {
  this.textInput = input
}

render() {
  return (
// Avoiding an inline arrow function as the click handler and the innerRef functions ensures referential identity.
    <button onClick={this.handleClick}>Click me</button>
    <Input type="text" innerRef={this.createRef} />
  )
}
```

### Handling events with arguments in React and avoiding arrow functions
##### [:: Contents](#contents)

Creating arrow function in JSX renders is not a good pattern as mentioned earlier thus it prevents us from ensuring referential identity. 

The normal behaviour is to do like the following code snippet:

```js
render() {
  return(<MyComponent onChange={(e) => this.handleOnChange(e)} />)
}
```

We can avoid this by exercising the usage of the **Public Class Fields syntax** and declare our event handler as a **class method**:

```js
handleClick = () => {
  console.log('I am handling this event ...')
}

...

render() {
  return(<MyComponent onClick={this.handleClick} />)
}
```

But the above pattern turns sour when you need to pass an argument to the event handler. The normal pattern for doing so is like this:

```js
// Click handler with argument
handleClick = (e, argument) => {
  e.preventDefault()
  console.log(argument)
}

...
// Arrow function needed to pass the event and the argument
render() {
  return(<MyComponent onChange={(e) => this.handleChange(e, argument)} />)
}
```

With the above we are back to square one using an arrow function in our React render method. 

To fix this we can use a pattern where we return a function by another function:

```js
// Click handler with an argument which returns a function by a function
handleClick = (argument) => (e) => {
  e.preventDefault()
  console.log(argument)
}

...
// Arrow function is now omitted 
render() {
  return(<MyComponent onClick={this.handleClick(argument)} />)
}
```

And yet another brilliant example for passing arguments to an event handler:
```js
// Now without preventDefault which is already included in copyToClipboard
  handleClick = (message) => {
    return (e) => {
  	  copyToClipboard(e, message, true)
	}
  }
```

This is the pattern to go with to **ensure referential identity**.


## Immutable data representation (Data Comparability)
##### [:: Contents](#contents)

- Use highly comparable data (Immutability)
- Truly Functional programming means you never attempt to mutate state, so it doesn’t matter if the state is technically mutable.

#### Example of unwanted mutation: 

You would often do something like this in a component, right before the render through destructuring.
```js
const { user } = this.props
user = 10 // will fail
```
You can not and should not reassign a **const**, but if you change the const to a **let** or a **var**, then you have achieved to change the immutability of the prop. So **DON'T DO THIS:**
```js
let { user } = this.props
user = 10
```

3. Loose Coupling
- Use for both maintainability and performance

4. Children
- Children are expensive
- Children should excercise independance
- Child Components should be "pure"

5. Keep <li> in their own component

6. Implement ID's in your models and then use ID's for keys in iterations, only use auto generated indexes (from array.map etc.) if an ID isn't a part of your data model

## API for React Components
##### [:: Contents](#contents)

API: Render, Props, State, Context, Lifecycle Events

- Container (Stateful Component - Controller, Smart, Business Logic, Data (fetching)) - uses render, state, lifecycle events

- Presentation (Stateless Component - View, Dumb, Display) - uses render, props, context


## Component types in React 
##### [:: Contents](#contents)

[React Component Patterns by Michael Chan](https://www.youtube.com/watch?v=YaZg8wg39QQ)

## Stateless Component
##### [:: Contents](#contents)

A component without state
A stateless component can be declared as both a function and a class.
As the React team states, *"The simplest way to define a component is to write a JavaScript function:"*

## Stateful Component
##### [:: Contents](#contents)

A component using state is known as stateful

## Container Component
##### [:: Contents](#contents)

A component that manages data and. Containers are stateful and is often used for business logic and fetching data from an API. 

## Higher-order Component
##### [:: Contents](#contents)

HoC ... 

## Render Props
##### [:: Contents](#contents)

**Render Props** are a pattern that goes by different names:

- Render Props
- Render Callback
- Function as a Child

Render Props are used to create a component that exists to compose and manage shared state. [(You can read more about them here.)](https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce)

Main concepts:
- The **"sender component"** passes down a prop, which has a function as its value. That function allows the two components to share data (state) in a decoupled way, allowing the passed down function to control what to render.
- The **"receiving component"** that declares the prop type for the render prop function, can essentially expose its data (state) to the **"sender component"** by calling its render prop. Therefore the **"sender component"** can render whatever it wants with that state.

Render Props can be a colocated and easily readable pattern. Render Props uses dynamic composition which is key to React's model for rendering views. Everything happens inside of render, so we can take advantage of the full React lifecycle and the natural uni-directional flow of props and state.

If you want to use Render Props make sure you append it with the **public class fields syntax** explained earlier to **ensure referential identity**. 

## Separation of concerns
##### [:: Contents](#contents)

The idea is pretty simple: components can't be concerned with both presentation and data-fetching. 
[](https://gist.github.com/chantastic/fc9e3853464dffdb1e3c)

## Containerization
##### [:: Contents](#contents)

https://medium.com/@learnreact/container-components-c0e67432e005

Use containers to manage data and try to avoid children as much as possible. 

## Best Practices (Enforcing Best Practices)

## Pure Components
Pure Components are deterministic - render only depends on props & state

Use either React.PureComponent or shouldComponentUpdate where ever possible. 

**Example**:
```js
render() {
  return (
    <div style={{width: this.props.width}}>
	  {this.state.rows}
	</div>
  )
}
```

```js
shouldComponentUpdate() {
  return false
}

```

## Event handler naming conventions
##### [:: Contents](#contents)

You would often be inclined to name your event handlers after what kind of action the event do, in below example the button click could delete a user or close a modal. It seems even seductive to name the handler callback **"handleDeleteUser"** or **"onDeleteUser"**. When you pass a lot of functions as props in React components, you can quickly loose oversight and create errors when you name your event handlers all kinds of different action based names. 

This has nothing to do with React optimization, but a naming pattern that is commonly used. It is easy to remember and when you get used to it, your code gets easier to read when you consult it later.

The pattern is truly simple. An event like **"onClick"** should have an event handler callback named **"handleClick"** and so forth, and always use camelCase:

```js
handleClick = () => {
  console.log('This is easy to handle ...')
  }

handleMouseEnter = () => {
  console.log('You entered the mouse on the hotspot!')
  }

...

<input 
  type="button" 
  value="Delete" 
  onClick={this.handleClick} 
/>

...

<Hotspot onMouseEnter={} />
```

## Check your JSON
- [jsonlint](https://jsonlint.com/)

## Event Handler Arguments:
https://stackoverflow.com/questions/43186777/hand-over-function-to-onclick-on-props-with-parameters
https://stackoverflow.com/questions/42608209/pass-event-args-and-event-object-to-event-handler-without-arrow-function-in-reac
https://reactjs.org/docs/handling-events.html#passing-arguments-to-event-handlers

