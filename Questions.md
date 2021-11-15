1. PureComponent is exactly the same as Component except that it handles the shouldComponentUpdate method for you. When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on the other hand won’t compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called.

2. Context is used to communicate with deeply contained components. For example, a root component defines a theme, and any component in the component tree might (or might not) be interested in this information. Like in the official context example.
   shouldComponentUpdate (SCU) on the other hand short circuits the re-rendering of a part of the component tree (including children), for example if the props or state of a component are not modified in a meaningful way. As far as the component can tell. But this might accidentally block context propagation.

3. Way -1
   ```javascript
   import React from "react";
   ```

class Parent extends React.Component{
constructor(props){
super(props);
this.state = {
data: null
}
}

    handleCallback = (childData) =>{
        this.setState({data: childData})
    }

    render(){
        const {data} = this.state;
        return(
            <div>
                <Child parentCallback = {this.handleCallback}/>
                {data}
            </div>
        )
    }

}

class Child extends React.Component{

    onTrigger = (event) => {
        this.props.parentCallback("Data from child");
        event.preventDefault();
    }

    render(){
        return(
        <div>
            <form onSubmit = {this.onTrigger}>
                <input type = "submit" value = "Submit"/>
            </form>
        </div>
        )
    }

}

export default Parent
```

Way-2 -> Using context Api we can pass data from child to parents.
Way-3 -> Using state management library like redux

4. Use React.memo() to prevent re-rendering on React function components.
   shouldComponentUpdate() for the class component

5. Fragments are a modern syntax for adding multiple elements to a React Component without
   wrapping them in an extra DOM node.

React Fragments do not produce any extra elements in the DOM, which means that a Fragment’s
child components will be rendered without any wrapping DOM node. React Fragments enable you
to group multiple sibling components without introducing any unnecessary markup in the rendered HTML.

6.

```javascript
// This function takes a component...
function withSubscription(WrappedComponent, selectData) {
  // ...and returns another component...
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props),
      };
    }

    componentDidMount() {
      // ... that takes care of the subscription...
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props),
      });
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}
```

7.  they wait for each other. Await eliminates the use of callbacks in . ...
    In using async and await, async is prepended when returning a promise, await is
    prepended when calling a promise. try and catch are also used to get the rejection
    value of an async function.

8.  setState's Asynchronous Nature
    setState doesn't immediately mutate the state but creates a pending state
    transaction. This means that accessing the state immediately after call setState
    can possibly return the old value. The setState method takes up to 2 arguments.
    We usually pass in only one.

9.      1) change

    class NameOfComponent extends Component
    to
    function NameOfComponent(props){}

        2. remove the constructor
        3. remove the render() method, keep the return
        4. add const before all methods
        5. remove this.state throughout the component
        6. remove all references to ‘this’ throughout the component
        7. Set initial state with useState(). ie…
        8. change this.setState() … instead, call the function that you

    named in the previous step to update the state… 9. replace compentDidMount with useEffect

```javascript
useEffect(() => {
 fetch(‘url’)
 .then(res => res.json())
 .then(items => setItems(items)
 .catch(console.log(err))
}, [])
```

    10. replace componentDidUpdate with useEffect

```javascript
const [items, setItems] = useState([])
const [id, setId] = useState(1)
useEffect(() => {
 if(id === '' || id === null){
  return
 }
fetch(`url/${id}`)
 .then(res => res.json())
 .then(items => setItems(items)
 .catch(console.log(err))
}, [id])
<button onclick={e => setId(id + 1)} />
```

10.     1, CSS Stylesheet

    Simply import css file import './DottedBox.css' so you can have a separate css file for each component.

        2. Inline styling

    In React, inline styles are not specified as a string. Instead they are specified with an object whose
    key is the camelCased version of the style name, and whose value is the style’s value, usually a string.

-> We can create a variable that stores style properties and then pass it to the element like style={nameOfvariable}
-> We can also pass the styling directly style={{color: 'pink'}}

    3. CSS Modules

A CSS Module is a CSS file in which all class names and animation names are scoped locally by default.
Great article about css modules

-> Similar to css we import css file import styles './DashedBox.css'
-> then we access to className as we access to object

    4. Styled-components

Styled-components is a library for React and React Native that allows you to use component-level styles in
your application that are written with a mixture of JavaScript and CSS.

-> First we need to install styled-components library
-> npm install styled-components --save
-> Now we can create a variable by selecting a particular html element where we store our style keys const Div = styled.htmlElemnet`color: pink`
-> Then we use the name of our variable as a wrapper <Div></Div> kind of react component:)
-> Tips to use emoji icons key shortcut CTRL+CMD+SPACE

11. react's goal is in many ways to render HTML in a web page.
    React renders HTML to the web page by using a function called ReactDOM.render().

The Render Function
The ReactDOM.render() function takes two arguments, HTML code and an HTML element.
The purpose of the function is to display the specified HTML code inside the specified HTML element.
There is another folder in the root directory of your React project, named "public". In this folder, there is an index.html file.
You'll notice a single <div> in the body of this file. This is where our React application will be rendered.
