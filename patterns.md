# React Optimization - Patterns & Anti-Patterns

Quote: *"Premature optimization is the root of all evil"* 

Translation: *"Don't worry about performance until you have a problem"*


[React Patterns](http://reactpatterns.com/)

## Basis concepts for optimization:

1. Purity
- Use React.PureComponent (which implements shouldComponentUpdate) or use shouldComponentUpdate in React.Component classes. 

2. Data Comparability 
- Use highly comparable data (Immutability)

3. Loose Coupling
- Use for both maintainability and performance

4. Children
- Children are expensive
- Children should excercise independance
- Child Components should should be "pure"

5. Keep <li> in their own component

6. Implement ID's in your models and then use ID's for keys in iterations, only use indexes if an ID isn't a part of your data structure


## API for React Components
API: Render, Props, State, Context, Lifecycle Events

- Container (Stateful Component - Controller, Smart, Business Logic, Data (fetching)) - uses render, state, lifecycle events

- Presentation (Stateless Component - View, Dumb, Display) - uses render, props, context


## 5 different React Components (Michael Chan)
[React Component Patterns by Michael Chan](https://www.youtube.com/watch?v=YaZg8wg39QQ)

1. Stateful Component

2. Stateless Component

3. Container Component

4. Higher-order Component (HoC)

5. Render Callback (Render Props)

## Unidirectional Data Flow
- Data flows **down** from parent to child components
- A parent **never** asks its child for its state
- A child can **only** update state by calling a callback that its parent gave it

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

## Check your JSON
- [jsonlint](https://jsonlint.com/)


