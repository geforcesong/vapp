function increment(state, status) {
    state.count++;
}

function addCategory(state, categories) {
    if (categories) {
        if (Array.isArray(categories)) {
            state.cagegories.push(...categories);
        } else {
            state.cagegories.push(categories);
        }
    }
}

export default {
    increment,
    addCategory
};
