class Users {
    async is_super_user(...args) {
        if (args.length === 0) {
            return await super_users_contract.methods.isSuperUser(await getCookie("account")).call();
        } else if (args.length === 1) {
            return await super_users_contract.methods.isSuperUser(args[0]).call();
        }
        throw new Error("Incorrectly overloaded function");
    }

    async get_subscribers_count(...args) {
        if (args.length === 0) {
            return await subscribers_contract.methods.getSubscribersAmount(await getCookie("account")).call();
        } else if (args.length === 1) {
            return await subscribers_contract.methods.getSubscribersAmount(args[0]).call();
        }
        throw new Error("Incorrectly overloaded function");
    }

    async get_achievements_count(...args) {
        if (args.length === 0) {
            return (await my_token_contract.methods.getAllAchievements(await getCookie("account")).call()).length;
        } else if (args.length === 1) {
            return (await my_token_contract.methods.getAllAchievements(args[0]).call()).length;
        }
        throw new Error("Incorrectly overloaded function");
    }

    async get_all_achievements(...args) {
        if (args.length === 0) {
            return (await my_token_contract.methods.getAllAchievements(await getCookie("account")).call());
        } else if (args.length === 1) {
            return (await my_token_contract.methods.getAllAchievements(args[0]).call());
        }
        throw new Error("Incorrectly overloaded function");
    }
}