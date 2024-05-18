class Observer {
    get_all() {
        let account = getCookie('account');
        let all_achievements = [];
        contract_myToken.methods.getAllAchievements(account).call().then(item => all_achievements.push(item[0]))
        console.log(all_achievements)
        return all_achievements
    }

    get_open() {
        let account = getCookie('account');
        let open_achievements = []
        contract_myToken.methods.getAllAchievements(account).call().then(item => open_achievements.push(item[0]))
        open_achievements.filter(item => item.is_private)
        return open_achievements
    }
}
