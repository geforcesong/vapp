function addProduct(state, products) {
    if (products) {
        if (Array.isArray(products)) {
            state.products.push(...products);
        } else {
            state.products.push(products);
        }
    }
}

function clearProducts(state) {
    state.products = [];
}

export default {
    addProduct,
    clearProducts
};