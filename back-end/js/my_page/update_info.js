let nickname = document.querySelector('.header__name');
let account = document.querySelector('.header__account');
let role = document.querySelector('.header__role');
let subscription = document.querySelector('.header__subscribers_count');
let achievements = document.querySelector('.header__achievements_count');

async function updateSiteInfo() {
    const usrnm = new Username();
    const user = new Users();
    nickname.innerHTML = await usrnm.get_username();
    account.innerHTML = await getCookie("account");
    if(await user.is_super_user()) {
        role.innerHTML = "Super User";
    } else {
        role.innerHTML = "Common User";
    }
    subscription.innerHTML = await user.get_subscribers_count();
    console.log( await user.get_achievements_count())
    achievements.innerHTML = await user.get_achievements_count();
}


updateSiteInfo();
