class Observer {
    async get_all_achievements() {
        let account = await getCookie('account');
        let all_achievements = [];
        all_achievements = await my_token_contract.methods.getAllAchievements(account).call()
        return all_achievements
    }

    async get_open_achievements() {
        let account = await getCookie('account');
        let open_achievements = []
        open_achievements = await my_token_contract.methods.getAllAchievements(account).call()
        open_achievements.filter(item => item.is_private)
        return open_achievements
    }
}
