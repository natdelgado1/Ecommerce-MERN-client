import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, talla, cantidad) => {
        const detail = {
            _id: product._id,
            price: product.price,
            talla: talla,
        };
        const existingItem = cart.find(
            (item) => item._id === detail._id && item.talla === detail.talla
        );
        if (existingItem) {
            const updatedCart = cart.map((item) => {
                if (item._id === detail._id && item.talla === detail.talla) {
                    return {
                        ...item,
                        quantity: item.quantity + cantidad, // Modify the quantity if the item already exists in the cart
                    };
                }
                return item;
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...detail, quantity: cantidad }]);
        }
    };

    const removeFromCart = (productId, talla) => {
        setCart(
            cart.filter((item) => item._id !== productId || item.talla !== talla)
        );
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };
    const calculateTotalCount = () => {
        return cart.reduce((totalCount, item) => totalCount + item.quantity, 0);
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, calculateTotal, calculateTotalCount }}
        >
            {children}
        </CartContext.Provider>
    );
};
