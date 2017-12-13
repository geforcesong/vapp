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
            data: JSON.stringify(category),
            contentType: 'application/json; charset=utf-8',
            success: function(msg) {
                console.log(msg);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.log('err...');
                console.log(errorThrown);
            }
        });
    });
}

export default {
    updateCount,
    createCategory
};
