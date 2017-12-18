function increment(state, status) {
    state.count++;
}

function addCategory(state, categories) {
    if (categories) {
        if (Array.isArray(categories)) {
            state.categories.push(...categories);
        } else {
            state.categories.push(categories);
        }
    }
}

function updateCategory(state, category) {
    if (category) {
        let ctFound = state.categories.find((c) => {
            return c._id === category._id;
        });
        if (ctFound) {
            ctFound.name = category.name;
            ctFound.isActive = category.isActive;
            ctFound.sortOrder = category.sortOrder;
        }
    }
}


export default {
    increment,
    addCategory,
    updateCategory
};
