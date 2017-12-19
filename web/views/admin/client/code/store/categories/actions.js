import Ajaxer from '../../util/ajaxer';

async function updateCount({commit}, val) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            commit('increment');
            resolve(100);
        }, 3000);
    });
}

async function createCategory({commit}, category) {
    return Ajaxer.ajax('/api/categories', category, {type: 'POST'}).then((ret) => {
        commit('addCategory', ret);
        return ret;
    });
}


async function loadCategory({commit}, category) {
    return Ajaxer.ajax('/api/categories').then(ret =>{
        commit('addCategory', ret);
        return ret;
    });
}

async function updateCategory({commit}, category) {
    return Ajaxer.ajax(`/api/categories/${category._id}`, category, {type: 'PUT'}).then((ret) => {
        commit('updateCategory', ret);
        return ret;
    });
}

async function deleteCategory({commit}, category) {
    return Ajaxer.ajax(`/api/categories/${category._id}`, category, {type: 'DELETE'}).then((ret) => {
        commit('deleteCategory', ret);
        return ret;
    });
}


export default {
    updateCount,
    createCategory,
    loadCategory,
    deleteCategory,
    updateCategory
};
