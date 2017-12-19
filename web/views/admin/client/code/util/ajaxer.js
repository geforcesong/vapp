class Ajaxer {
    static ajax(url, obj, options) {
        let opts = options || {};
        return new Promise((resolve, reject) => {
            $.ajax({
                type: opts.type || 'GET',
                url: url,
                contentType: 'application/json',
                data: obj ? JSON.stringify(obj) : undefined,
                success: function (res) {
                    if (res) {
                        if (res.status === 0) {
                            return resolve(res.result);
                        }
                        return reject(res.error);
                    }
                }
            });
        });
    }
}

export default Ajaxer;