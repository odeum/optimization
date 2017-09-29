# React Optimization - Do's and Dont's - Patterns & Anti-Patterns => Best Practices
[React Patterns](http://reactpatterns.com/)

## Basis concepts for optimization:

1. Purity
- Use either React.PureComponent or shouldComponentUpdate where ever possible. 

2. Data Comparability 
- Use highly comparable data (Immutability)

3. Loose Coupling
- Use for both maintainability and performance

4. Children
- Children are expensive
- Children should excercise independance

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



## Separation of concerns
The idea is pretty simple: components can't be concerned with both presentation and data-fetching. 
[](https://gist.github.com/chantastic/fc9e3853464dffdb1e3c)

## Containerization 
https://medium.com/@learnreact/container-components-c0e67432e005

Use containers to manage data and try to avoid children as much as possible. 

## Best Practices (Enforcing)

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


