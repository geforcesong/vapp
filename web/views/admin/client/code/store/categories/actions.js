
async function updateCount({ commit }, val) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            commit('increment');
            resolve(100);
        }, 3000);
    })
}
export default {
    updateCount
};
