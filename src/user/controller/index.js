module.exports = class extends think.Controller {
    // GET: /user
    async indexAction() {
        const service = this.service('index', 'user');
        const data = await service.getUserInfo();
        this.success(data);
    }
};
