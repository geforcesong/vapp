import Ajaxer from '../../util/ajaxer';

async function createProduct({commit}, category) {
    return Ajaxer.ajax('/api/products', category, {type: 'POST'}).then((ret) => {
        commit('addProduct', ret);
        return ret;
    });
}

async function loadProduct({commit}) {
    commit('clearProducts');
    return Ajaxer.ajax('/api/products').then(ret =>{
        commit('addProduct', ret);
        return ret;
    });
}
export default {
    createProduct,
    loadProduct
};
