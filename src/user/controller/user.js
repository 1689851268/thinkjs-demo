const BaseRest = require('./base.js');

module.exports = class extends BaseRest {
    // GET: /user/user or /user/user/:id
    async getAction() {
        return super.getAction();
    }

    // POST: /user/user
    async postAction() {
        return super.postAction();
    }

    // PUT: /user/user/:id
    async putAction() {
        return super.putAction();
    }

    // DELETE: /user/user/:id
    async deleteAction() {
        return super.deleteAction();
    }
};
