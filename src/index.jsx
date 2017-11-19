import React from 'react';
import request from 'superagent';
import './index.scss';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      newItemInput: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
  }

  componentDidMount() {
    this.getShoppingList();
  }

  getShoppingList() {
    const self = this;
    return request
    .get('/items')
    .end(function(err, res){
        if (res.statusCode == 200) {
          self.setState({
            list: res.body
          });
        }
        else {
          self.setState({
            list: []
          });
        }
      });
  }

  addNewItem() {
    const itemName = this.state.newItemInput;
    const self = this;
    return request
    .post('/items')
    .send({name: itemName})
    .end(function(err, res){
        if (res.statusCode == 200) {
          self.getShoppingList();
          self.setState({
            newItemInput: ''
          });
        }
        else {
          console.log('Error adding new item.');
        }
      });
  }

  handleChange(event) {
    this.setState({
      newItemInput: event.target.value
    });
  }

  displayShoppingList() {
    const shoppingList = this.state.list;
    const shoppingItems = shoppingList.map((item, itemIndex) => {
      return (
        <li key={itemIndex}>{item.name}</li>
      );
    });
    return shoppingItems;
  }

  render() {
    return (
      <div className="wrapper">
        <h1>Shopping List</h1>
        <div className="list-wrapper">
          <ul>
            {this.displayShoppingList()}
            <li>
              <input type="text" placeholder="New item name" value={this.state.newItemInput} onChange={this.handleChange} />
              <input type="submit" value="Add" onClick={this.addNewItem} />
            </li>
          </ul>
        </div>
      </div>
    );
  }
};
