import { useSelector } from "react-redux"

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items);

    retrun (
        <>
            <h2>My Cart</h2>
            {
                cartItems.map(item => (
                    <div key={item.id}>{item.name}</div>
                ))
            }
        </>
    )
};
export default Cart;