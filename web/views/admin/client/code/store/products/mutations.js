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

function updateProduct(state, product) {
    if (product) {
        let ctFound = state.products.find((c) => {
            return c._id === product._id;
        });
        if (ctFound) {
            ctFound.name = product.name;
            ctFound.isActive = product.isActive;
            ctFound.sortOrder = product.sortOrder;
        }
    }
}

function deleteProduct(state, product) {
    if (product) {
        let ctFound = state.products.findIndex((c) => {
            return c._id === product._id;
        });
        state.products.splice(ctFound, 1);
    }
}


export default {
    addProduct,
    clearProducts,
    updateProduct,
    deleteProduct
};
