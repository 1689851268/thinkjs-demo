module.exports = class extends think.Service {
    async getUserInfo() {
        const result = await this.fetch(
            `https://api.juejin.cn/growth_api/v1/lottery_config/get`
        );
        const data = await result.json();
        return data;
    }
};
