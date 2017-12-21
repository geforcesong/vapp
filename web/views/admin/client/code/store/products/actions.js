import Ajaxer from '../../util/ajaxer';

async function createProduct({commit}, category) {
    return Ajaxer.ajax('/api/products', category, {type: 'POST'}).then((ret) => {
        commit('addProduct', ret);
        return ret;
    });
}

export default {
    createProduct
};
