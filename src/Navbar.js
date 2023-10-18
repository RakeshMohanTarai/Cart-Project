import React from "react";

export const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <div style={styles.cartTitle}>
        My Cart
      </div>
      <div style={styles.cartIconContainer}>
        <img
          style={styles.cartIcon}
          src="https://cdn-icons-png.flaticon.com/128/172/172080.png"
          alt="cart-icon"
        />
        <span style={styles.cartCount}>{props.count}</span>
      </div>
    </div>
  );
}

const styles = {
  cartIcon: {
    height: '32px',
    marginRight: '20px',
    filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))',
  },
  nav: {
    height: '70px',
    background: 'linear-gradient(135deg, #3498db, #e74c3c)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'background 0.5s',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    padding: '0 20px',
  },
  cartIconContainer: {
    position: 'relative',
    ':hover': {
      transform: 'scale(1.1)',
    },
  },
  cartCount: {
    background: 'linear-gradient(45deg, #f1c40f, #27ae60)',
    borderRadius: '50%',
    padding: '4px 8px',
    position: 'absolute',
    right: 0,
    top: '-9px',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
    ':hover': {
      transform: 'scale(1.2)',
    },
  },
  cartTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    textTransform: 'uppercase', // Convert text to uppercase
    color: 'white', // Set text color to white
    letterSpacing: '2px', // Add letter-spacing
    userSelect: 'none', // Prevent text from being selected
  },
};
