# 1. React Optimization - Patterns & Anti-Patterns

Quote: *"Premature optimization is the root of all evil"* 

Translation: *"Don't worry about performance until you have a problem"*


[React Patterns](http://reactpatterns.com/)

## Basic React Patterns:

#### Dataflow - unidirectional

- Data flows **down** from parent to child components
This is the pattern of passing information down (as objects, strings, etc.) and passing methods down to allow child components to pass information back up. Like sending down a box of food (data) and a walkie talkie (callback) to people trapped underground.

**[Example dataflow](/src/components/DataFlow.js)**

[![Edit jnowr0ww7v](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/jnowr0ww7v)

#### A parent **never** asks its child for its state

#### A child can **only** update state by calling a callback method that it was given by its parents.

2. 

## Basis concepts for optimization:

### Purity

#### Use pure components

Use React.PureComponent (which auto implements shouldComponentUpdate) or use shouldComponentUpdate in React.Component classes. 

#### Use pure functions. 
A pure function is a function whose return value is solely determined by its input values, without dependence on global state or causing any side effects. In components, we often have complicated behavior that aids but is not directly tied to our rendering. Use pure helper functions to move this logic outside of the component, so that the component has fewer responsibilities and lower complexity.

2. Immutable data representation (Data Comparability)
- Use highly comparable data (Immutability)

3. Loose Coupling
- Use for both maintainability and performance

4. Children
- Children are expensive
- Children should excercise independance
- Child Components should be "pure"

5. Keep <li> in their own component

6. Implement ID's in your models and then use ID's for keys in iterations, only use indexes if an ID isn't a part of your data structure


## 1.3. API for React Components
API: Render, Props, State, Context, Lifecycle Events

- Container (Stateful Component - Controller, Smart, Business Logic, Data (fetching)) - uses render, state, lifecycle events

- Presentation (Stateless Component - View, Dumb, Display) - uses render, props, context


## 1.4. different React Components (Michael Chan)
[React Component Patterns by Michael Chan](https://www.youtube.com/watch?v=YaZg8wg39QQ)

1. Stateful Component

2. Stateless Component

3. Container Component

4. Higher-order Component (HoC)

5. Render Callback (Render Props)



## 1.5. Separation of concerns
The idea is pretty simple: components can't be concerned with both presentation and data-fetching. 
[](https://gist.github.com/chantastic/fc9e3853464dffdb1e3c)

## 1.6. Containerization 
https://medium.com/@learnreact/container-components-c0e67432e005

Use containers to manage data and try to avoid children as much as possible. 

## 1.7. Best Practices (Enforcing Best Practices)

## 1.8. Pure Components
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

## 1.9. Check your JSON
- [jsonlint](https://jsonlint.com/)


