async function updateCount({commit}, val) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            commit('increment');
            resolve(100);
        }, 3000);
    });
}

async function createCategory({commit}, category) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: 'POST',
            url: '/api/categories',
            contentType: 'application/json',
            data: JSON.stringify(category),
            success: function(result) {
                resolve(result);
            },
            error: function(error) {
                reject(error);
            }
        });
    });
}

export default {
    updateCount,
    createCategory
};
