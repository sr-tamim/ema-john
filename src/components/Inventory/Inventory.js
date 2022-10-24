import Products from "../Products/Products";

const Inventory = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', color: 'var(--theme-color)' }}>INVENTORY</h1>
            <Products />
        </div>
    );
};

export default Inventory;