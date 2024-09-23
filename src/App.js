import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Items from "./components/Items";
import Footer from "./components/Footer";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          img: "girl-1.png",
          desc: "Blue casual slip dress Jessica Wright ",
          category: "dress",
          price: "2300",
        },
        {
          id: 2,
          img: "girl-2.png",
          desc: "Evening mauve dress The Seam",
          category: "dress",
          price: "2000",
        },
        {
          id: 3,
          img: "girl-3.png",
          desc: "Mustard casual dress The Carica",
          category: "dress",
          price: "1800",
        },
        {
          id: 4,
          img: "girl-4.png",
          desc: "Burgundy casual dress The Peterman",
          category: "dress",
          price: "2500",
        },
      ],
      pictures: [
        {
          id: 5,
          img: "girl.png",
        },
        {
          id: 6,
          img: "girl1.png",
        },
        {
          id: 7,
          img: "girl2.png",
        },
        {
          id: 8,
          img: "girl3.png",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };

    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  // Load cart from localStorage when the component mounts
  componentDidMount() {
    const savedOrders = localStorage.getItem("orders");
    if (savedOrders) {
      this.setState({ orders: JSON.parse(savedOrders) });
    }
  }

  // Proper componentDidUpdate signature
  componentDidUpdate(prevProps, prevState, snapshot) {
    // Check if the orders state has changed
    if (prevState.orders !== this.state.orders) {
      localStorage.setItem("orders", JSON.stringify(this.state.orders));
    }
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <Header orders={this.state.orders} onDelete={this.deleteOrder} />
          <Section />
          <Items
            onShowItem={this.onShowItem}
            items={this.state.items}
            onAdd={this.addToOrder}
          />
          {this.state.showFullItem && (
            <ShowFullItem
              onAdd={this.addToOrder}
              onShowItem={this.onShowItem}
              item={this.state.fullItem}
            />
          )}
        </div>
        <Footer />
      </>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  deleteOrder(id) {
    this.setState(
      { orders: this.state.orders.filter((el) => el.id !== id) },
      () => {
        // Save updated orders to localStorage
        localStorage.setItem("orders", JSON.stringify(this.state.orders));
      },
    );
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] }, () => {
        // Save updated orders to localStorage
        localStorage.setItem("orders", JSON.stringify(this.state.orders));
      });
    }
  }
}

export default App;
