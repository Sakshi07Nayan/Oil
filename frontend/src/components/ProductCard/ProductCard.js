import { useDispatch } from "react-redux"


const ProductCard = ({product}) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return(
        <>
            <h3>{product.name}</h3>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </>
    )
};

export default ProductCard;