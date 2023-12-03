const Base = require('./base.js');

module.exports = class extends Base {
    indexAction() {
        this.assign({ title: 'ThinkJS', time: Date.now() }); // 给模板赋值
        return this.display();
    }
};
