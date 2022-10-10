import { createContext, useContext, useState } from "react"

const cartContext = createContext();

export const {Provider} = cartContext;

export const useCartContext = () => useContext(cartContext);



const CustomProvider = ({children}) => {

const [cart, setCart] = useState([]);
const [totalQty, setTotalQty] = useState(0)
const [totalPrice, setTotalPrice] = useState(0)  


const addToCart = (item, quantity) => {

    setTotalQty(totalQty + quantity);
    setTotalPrice(totalPrice + item.precio * quantity)

    if (isInCart(item.id)) {
        const newCart = cart.map((producto) => {
            if (producto.id === item.id) {
                return {...producto, quantity: producto.quantity + quantity}
            } else{
                return producto;
            }
        });
        setCart(newCart)
    } else {
        setCart([...cart, {...item, quantity: quantity }])
    }

};

    const isInCart = (id) => {
        return cart.find((item) => item.id === id)
    }    

    const valorDelContexto = {cart, addToCart, totalQty, totalPrice}   
    
    return <Provider value ={valorDelContexto}>{children}</Provider>
};




export default CustomProvider