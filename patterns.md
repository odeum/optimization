# React Optimization - Patterns & Anti-Patterns

Quote: *"Premature optimization is the root of all evil"* 

Translation: *"Don't worry about performance until you have a problem"*


[React Patterns](http://reactpatterns.com/)

## Basic React Patterns:

#### Dataflow - uni-directional

- Data flows **down** from parent to child components
This is the pattern of passing information (state and props) down (as objects, strings, etc.) and passing functionality down to allow child components to pass information back up. Like sending down a box of food (data) and a walkie talkie (callback function) to people trapped underground.

A good pattern is to use a callback function prop to notify the parent that something has happened - the parent can then mutate the data (state) it owns and pass it back into the child through props. Never let the child mutate the props (they are read-only and immutable) they should be kept immutable even though diverting from this immutable pattern is technically achievable.

Example: 

You would often do something like this in a component, right before the render.
```js
const { user } = this.props
user = 10 // will fail
```
You can not reassign a **const**, but if you change the const to a **let** or a **var**, then you have achieved to change the immutability of the prop. So don't do this:
```js
let { user } = this.props
user = 10
```

**[Example dataflow](/src/components/DataFlow.js)**


#### A parent **never** asks its child for its state

#### A child can **only** update parent state by executing a callback function that it was given by its parents.

#### A child can **never** mutate props passed down to it

2. 

## Basis concepts for optimization:

### Purity

#### Use pure functions and pure components. 
A pure function is a function whose return value is solely determined by its input values, without any dependence on global state or causing any side effects. In components, you often have complicated behavior that aids, but is not directly tied to rendering. Use pure helper functions to move this logic outside of the component, resulting in a component with fewer responsibilities and lower complexity.

Pure render optimized React components can be extremely performant but it requires users to treat their data as immutable for it to work properly. The anti-pattern is creating new arrays, objects, functions or any other new identities during render or in Redux connect(mapState).

Use React.PureComponent (which auto implements shouldComponentUpdate) or use shouldComponentUpdate in React.Component classes. 


#### Public Class Fields syntax ([Experimental Stage 2 - TC39](https://github.com/tc39/proposal-class-fields))
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

#### Handling events with arguments and still avoiding arrow functions

Creating arrow function in JSX renders is not a good pattern as mentioned earlier thus it prevents us from ensuring referential identity. 
The normal behaviour is to do like the following code snippet:

```js
render() {
  return(<MyComponent onChange={(e) => this.handleOnChange(e)} />)
}
```

We can avoid this by exercising the usage of the **Public Class Fields syntax** and declare our event handler as a class method:

```js
handleClick = () => {
  console.log('I am handling this event ...')
}

...

render() {
  return(<MyComponent onClick={this.handleClick} />)
}
```

But this pattern turns sour when you need to pass an argument to the event handler. The normal pattern for doing this is like this:

```js
handleClick = (e, argument) => {
  e.preventDefault()
  console.log(argument)
}

...

render() {
  return(<MyComponent onChange={(e) => this.handleChange(e, argument)} />)
}
```

With this we are back to using an arrow function in our React render method. 

To fix this we can use a pattern where we return a function by another function:

```js
handleClick = (argument) => (e) => {
  e.preventDefault()
  console.log(argument)
}

...

render() {
  return(<MyComponent onClick={this.handleClick(argument)} />)
}
```

This is the pattern to go with to **ensure referential identity**.


#### Render Props
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


2. Immutable data representation (Data Comparability)
- Use highly comparable data (Immutability)
- Truly Functional programming means you never attempt to mutate state, so it doesn’t matter if the state is technically mutable.

3. Loose Coupling
- Use for both maintainability and performance

4. Children
- Children are expensive
- Children should excercise independance
- Child Components should be "pure"

5. Keep <li> in their own component

6. Implement ID's in your models and then use ID's for keys in iterations, only use auto generated indexes (from array.map etc.) if an ID isn't a part of your data model


## API for React Components
API: Render, Props, State, Context, Lifecycle Events

- Container (Stateful Component - Controller, Smart, Business Logic, Data (fetching)) - uses render, state, lifecycle events

- Presentation (Stateless Component - View, Dumb, Display) - uses render, props, context


## Different React Components (Michael Chan)
[React Component Patterns by Michael Chan](https://www.youtube.com/watch?v=YaZg8wg39QQ)

1. Stateful Component
A component using state is known as stateful

2. Stateless Component
A component without state

3. Container Component
A component that manages data and. Containers are stateful and is often used for business logic and fetching data from an API. 

4. Higher-order Component (HoC)

5. Render Props



## Separation of concerns
The idea is pretty simple: components can't be concerned with both presentation and data-fetching. 
[](https://gist.github.com/chantastic/fc9e3853464dffdb1e3c)

## Containerization 
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

