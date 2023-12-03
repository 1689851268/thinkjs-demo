module.exports = class extends think.Controller {
    // GET: /user/book
    async indexAction() {
        const service = this.service('index', 'user');
        const data = await service.getUserInfo();
        this.success(data);
    }

    // GET: /user/book/get
    async getAction() {
        const data = { name: 'thinkjs' };
        return this.success(data);
    }
};
