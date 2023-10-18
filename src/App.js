import React from 'react';
import { Cart } from './Cart';
import { Navbar } from './Navbar';
import { db } from './config/firebase'
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

class App extends React.Component {
  db = db; // Define db as a property of your class so now we can use this db method

  constructor() {
    super(); // super funtion will call the contructor of the Component class of the React
    this.state = {
      products: []
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this); // we use bind to get the value of this 
  }
  componentDidMount() {

    const Snapshot = onSnapshot(collection(this.db, "products"), (item) => {
      console.log(Snapshot);
      const data = item.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });
      this.setState({
        products: data
      });
    });
  };

  addProduct = async () => {
    // Create a new product object
    const newProduct = {
      title: "Sony Bravia 4k",
      price: 59999,
      qty: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVU58NjKY4FK5ccpdLFUtFB6Zjk60aH_hWkVceCQYtFYLiNL9dRqGWlqFxp8gfZDJrvRg&usqp=CAU"
    };

    this.setState((prevState) => ({
      products: [...prevState.products, newProduct],
    }));

    try {
      // Add the new product to Firestore
      const docRef = await addDoc(collection(db, "products"), newProduct);
      console.log("Document written with ID: ", docRef.id);
      console.log("Product has been added to Firestore successfully");

      // Add the new product to the local state after Firestore operation is completed

      console.log("Product has been added to the state successfully");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }


  handelIncreaseQuantity = async (product) => {
    console.log('product', product.id)
    const { products } = this.state;
    const index = products.indexOf(product);
    console.log(index);
    const washingtonRef = doc(db, "products", product.id);

    console.log('worked', washingtonRef)
    await updateDoc(washingtonRef, {
      qty: product.qty + 1
    });
  };

  handelDecreaseQuantity = async (product) => {
    //console.log('product', product.id)
    const { products } = this.state;
    const index = products.indexOf(product);
    console.log(index);
    const washingtonRef = doc(db, "products", product.id);

    if (products[index].qty === 0) {
      return;
    }
    console.log('worked', washingtonRef)
    await updateDoc(washingtonRef, {
      qty: product.qty - 1
    });
  }

  handelDeleteProduct = async (id) => {
    // console.log('hey please increase the quantity of', product)
    const { products } = this.state;

    const items = products.filter((items) => items.id !== id); // creates a new array called items that contains all the products except the one with the id we want to remove.
    // const items = products.filter(item)

    // function item(value){
    //   return value.id !== id;
    // }

    await deleteDoc(doc(db, "products", id));

    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.map((product) => (
      count += product.qty
    ))
    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;

    let totalCount = 0;

    products.map((product) => {
      totalCount += product.price * product.qty;
      return null;
    })

    return totalCount;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <button style={buttonStyle} onClick={this.addProduct}>Add a product</button>
        <Cart
          key={products.id} // Add a unique key here for the map
          products={products}
          onIncreaseQuantity={this.handelIncreaseQuantity}
          onDecreaseQuantity={this.handelDecreaseQuantity}
          onDeleteProduct={this.handelDeleteProduct} />
        <div style={totalStyle}> Total: ₹{this.getCartTotal()}
        </div>
      </div>
    );
  }
}

const buttonStyle = {
  background: 'linear-gradient(45deg, #FF5733, #FFC300)',
  color: '#fff',
  border: 'none',
  height: '35px',
  margin: '10px 0 0 0',
  borderRadius: '5px',
  padding: '0px 10px',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background 0.3s, transform 0.3s',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  float: 'right', // Move the button to the right
  '&:hover': {
    background: 'linear-gradient(45deg, #FF5733, #FF5733)',
    transform: 'scale(1.05)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
};


const totalStyle = {
  background: 'linear-gradient(to bottom, #3498db, #2980b9)',
  height: '23px',
  color: 'white',
  padding: '10px',
  borderRadius: '15px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
  fontSize: '24px',
}

export default App;
