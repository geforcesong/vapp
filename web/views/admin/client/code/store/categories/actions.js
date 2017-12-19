import Ajaxer from '../../util/ajaxer';

async function updateCount({ commit }, val) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            commit('increment');
            resolve(100);
        }, 3000);
    });
}

async function createCategory({ commit }, category) {
    // return new Promise((resolve, reject) => {
    //     $.ajax({
    //         type: 'POST',
    //         url: '/api/categories',
    //         contentType: 'application/json',
    //         data: JSON.stringify(category),
    //         success: function (res) {
    //             if (res) {
    //                 if (res.status === 0) {
    //                     commit('addCategory', res.result);
    //                     return resolve(res.result);
    //                 }
    //                 return reject(res.error);
    //             }
    //         }
    //     });
    // });
    return Ajaxer.ajax('/api/categories', category, { type: 'POST' }).then((ret) => {
        commit('addCategory', ret);
    });
}


async function loadCategory({ commit }, category) {
    return new Promise((resolve, reject) => {
        $.get('/api/categories').done((res) => {
            if (res && res.status === 0) {
                commit('addCategory', res.result);
                return resolve(res.result);
            }
            return reject(res.error);
        });
    });
}

async function updateCategory({ commit }, category) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: 'PUT',
            url: `/api/categories/${category._id}`,
            contentType: 'application/json',
            data: JSON.stringify(category),
            success: function (res) {
                if (res) {
                    if (res.status === 0) {
                        commit('updateCategory', res.result);
                        return resolve(res.result);
                    }
                    return reject(res.error);
                }
            }
        });
    });
}

async function deleteCategory({ commit }, category) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: 'DELETE',
            url: `/api/categories/${category._id}`,
            contentType: 'application/json',
            data: JSON.stringify(category),
            success: function (res) {
                if (res) {
                    if (res.status === 0) {
                        commit('deleteCategory', res.result);
                        return resolve(res.result);
                    }
                    return reject(res.error);
                }
            }
        });
    });
}



export default {
    updateCount,
    createCategory,
    loadCategory,
    deleteCategory,
    updateCategory
};
