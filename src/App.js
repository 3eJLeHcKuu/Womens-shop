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
          desc: "Evening mauve dress Seam",
          category: "dress",
          price: "2000",
        },
        {
          id: 3,
          img: "girl-3.png",
          desc: "Mustard casual dress Carica",
          category: "dress",
          price: "1800",
        },
        {
          id: 4,
          img: "girl-4.png",
          desc: "Burgundy casual dress The J. Peterman Company",
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

    this.addTo0rder = this.addTo0rder.bind(this);
    this.delete0rder = this.delete0rder.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <Header orders={this.state.orders} onDelete={this.delete0rder} />
          <Section />
          <Items
            onShowItem={this.onShowItem}
            items={this.state.items}
            onAdd={this.addTo0rder}
          />
          {this.state.showFullItem && (
            <ShowFullItem
              onAdd={this.addTo0rder}
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

  delete0rder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addTo0rder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
