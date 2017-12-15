function increment(state, status) {
    state.count++;
}

function addCategory(state, category) {
    if (category) {
        state.cagegories.push(category);
    }
}

export default {
    increment,
    addCategory
};
