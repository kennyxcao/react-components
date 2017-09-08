/* jshint esversion: 6 */

// var Fruits = () => (
//   <li>Fruits</li>
// );

// var Meats = () => (
//   <li>Meats</li>
// );

// var GroceryListItemOld = (props) => (
//   <li>{props.item}</li>
// );

var GroceryList = (props) => (
  <div>
    <h2>My GroceryList</h2>  
    <ul>
      {props.items.map(item => 
        <GroceryListItem item={item} />
      )}
    </ul>
  </div>      
);

// A class component can be defined as an ES6 class
// that extends the base Component class included in the React library
class GroceryListItem extends React.Component {
  // A `constructor` method is expected on all ES6 classes
  // When React instantiates the component,
  // it will pass `props` to the constructor
  constructor(props) {
    super(props);

    this.state = {
      bold: false
    };
  }

  // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onHoverItem() {
    this.setState({
      bold: !this.state.bold
    });
  }

  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {
    // Making the style conditional on our `state` lets us 
    // update it based on user interactions.
    var style = {
      margin: '10px',
      border: '1px solid red',
      fontWeight: this.state.bold ? 'bold' : 'normal'
    };
    // `props` is no longer passed as an argument,
    // but instead accessed with `this.props`
    // You can pass inline styles using React's `style` attribute to any component
    // snake-cased css properties become camelCased this this object    
    return (
      <li style={style} onMouseEnter={this.onHoverItem.bind(this)} onMouseLeave={this.onHoverItem.bind(this)}>{this.props.item}</li>
    );
  }
}

ReactDOM.render(<GroceryList items={['fruits', 'meat']}/>, document.getElementById('app'));


