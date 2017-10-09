# 1. React Optimization - Patterns & Anti-Patterns

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

#### Use pure components

Use React.PureComponent (which auto implements shouldComponentUpdate) or use shouldComponentUpdate in React.Component classes. 

#### Use pure functions. 
A pure function is a function whose return value is solely determined by its input values, without any dependence on global state or causing any side effects. In components, we often have complicated behavior that aids, but is not directly tied to our rendering. Use pure helper functions to move this logic outside of the component, resulting in a component with fewer responsibilities and lower complexity.

#### Public Class Fields syntax (Experimental Stage 3 - TC39)
You might often want to use an inline function (typically an arrow function) as a prop for controlling events or rendering. If that prop wants to control the render in a child component (commonly called **Render Props** or Render Callbacks) you will have a hard time **ensuring referential identity** which is your top priority when you want to avoid **PureComponent** or **shouldComponentUpdate** to re-render your component when your state or props aren't mutated. 

The problem with inline functions, is that a new and different callback (with a different identity) is created each time the component renders. To avoid this use the **experimental public class fields syntax**.

Applying the **experimental public class fields syntax** (enabled by default in Create React App), you can use **class fields** to correctly bind callbacks, and at the same time ensure referential identity for your callback functions without having to declare all your methods in the constructor which is a complete mess:

```js
class MyComponent extends React.Component {  

// This syntax ensures `this` is bound within handleClick.
    handleClick = () => {
    console.log('this is:', this)
  }

  render() {
    return (
// Avoiding an inline arrow function as the click handler callback ensures referential identity for handleClick.
      <button onClick={this.handleClick}>
        Click me
      </button>
    )
  }
}
```

#### Render Props
Render props are a pattern used to create a component that exists to compose and manage shared state. [(You can read more about them here.)](https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce)

Render Props ("render callback" or "children as a function") can be a colocated and easily readable pattern. Render props uses dynamic composition which is key to React's model for rendering views. A render prop is a function prop that a component uses to control what to render.

If you want to use render props make sure you append it with the **public class fields syntax** explained earlier to **ensure referential identity**. 


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

6. Implement ID's in your models and then use ID's for keys in iterations, only use indexes if an ID isn't a part of your data structure


## API for React Components
API: Render, Props, State, Context, Lifecycle Events

- Container (Stateful Component - Controller, Smart, Business Logic, Data (fetching)) - uses render, state, lifecycle events

- Presentation (Stateless Component - View, Dumb, Display) - uses render, props, context


## Different React Components (Michael Chan)
[React Component Patterns by Michael Chan](https://www.youtube.com/watch?v=YaZg8wg39QQ)

1. Stateful Component

2. Stateless Component

3. Container Component

4. Higher-order Component (HoC)

5. Render Callback (Render Props)



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

