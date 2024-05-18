let nickname = document.querySelector(".menu__name");

// Function to create a new modal
function createModal(id, title, description, owner, receivedFrom, token_id) {
    // Create modal container
    const modal = document.createElement('div');
    modal.id = '#' + id;
    modal.className = 'modal';

    // Create modal dialog
    const modalDialog = document.createElement('div');
    modalDialog.className = 'modal-dialog';

    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    // Create modal header
    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';

    const modalTitle = document.createElement('h3');
    modalTitle.className = 'modal-title';
    modalTitle.textContent = title;
    modalHeader.appendChild(modalTitle);

    const modalClose = document.createElement('a');
    modalClose.href = '#close';
    modalClose.title = 'Close';
    modalClose.className = 'close';
    modalClose.textContent = '×';
    modalHeader.appendChild(modalClose);

    // Append modal header to modal content
    modalContent.appendChild(modalHeader);

    // Create modal body
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';

    const modalBodyImage = document.createElement('div');
    modalBodyImage.className = 'modal-body__image';
    modalBody.appendChild(modalBodyImage);

    const modalBodyDescription = document.createElement('div');
    modalBodyDescription.className = 'modal-body__description';
    modalBodyDescription.textContent = description;
    modalBody.appendChild(modalBodyDescription);

    const modalBodyInfoOwner = document.createElement('div');
    modalBodyInfoOwner.className = 'modal-body__information';
    modalBodyInfoOwner.textContent = `Владелец: ${owner}`;
    modalBody.appendChild(modalBodyInfoOwner);

    const modalBodyInfoReceivedFrom = document.createElement('div');
    modalBodyInfoReceivedFrom.className = 'modal-body__information';
    modalBodyInfoReceivedFrom.textContent = `Получено от: ${receivedFrom}`;
    modalBody.appendChild(modalBodyInfoReceivedFrom);

    const modalBodyInfoCost = document.createElement('div');
    modalBodyInfoCost.className = 'modal-body__information';
    modalBodyInfoCost.classList.add('modal-body__information_ID');
    modalBodyInfoCost.textContent = `Token_ID: ${token_id}`;
    modalBody.appendChild(modalBodyInfoCost);

    // Create modal actions
    const modalBodyAction = document.createElement('div');
    modalBodyAction.className = 'modal-body__action';

    const actionIcon1 = document.createElement('a');
    actionIcon1.className = 'modal-body__action-icon';
    actionIcon1.classList.add('delete');
    actionIcon1.href = '#';

    const svg1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg1.setAttribute('class', 'modal-body__action-icon');
    svg1.setAttribute('width', '237');
    svg1.setAttribute('height', '227');
    svg1.setAttribute('viewBox', '0 0 237 227');
    svg1.setAttribute('fill', 'none');
    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path1.setAttribute('d', 'M144.422 168.477C148.512 168.477 151.828 165.3 151.828 ' +
        '161.383V90.4453C151.828 86.5281 148.512 83.3516 144.422 83.3516C140.332 83.3516 137.016 86.5281 137.016 ' +
        '90.4453V161.383C137.016 165.3 140.332 168.477 144.422 168.477Z');
    path1.setAttribute('fill', 'black');
    const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path2.setAttribute('d', 'M92.5781 168.477C96.6679 168.477 99.9844 165.3 99.9844 ' +
        '161.383V90.4453C99.9844 86.5281 96.6679 83.3516 92.5781 83.3516C88.4884 83.3516 85.1719 86.5281 85.1719 ' +
        '90.4453V161.383C85.1719 165.3 88.4884 168.477 92.5781 168.477Z');
    path2.setAttribute('fill', 'black');
    const path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path3.setAttribute('d', 'M148.125 30.1484C152.215 30.1484 155.531 26.9719 155.531 23.0547C155.531 ' +
        '19.1375 152.215 15.9609 148.125 15.9609H88.875C84.7853 15.9609 81.4688 19.1375 81.4688 23.0547C81.4688 26.9719 ' +
        '84.7853 30.1484 88.875 30.1484H148.125Z');
    path3.setAttribute('fill', 'black');
    const path4 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path4.setAttribute('d', 'M37.0312 37.2422C32.9415 37.2422 29.625 40.4188 29.625 44.3359C29.625 ' +
        '48.2531 32.9415 51.4297 37.0312 51.4297H44.4375V181.955C44.4375 197.986 58.065 211.039 74.8031 ' +
        '211.039H162.197C178.934 211.039 192.562 197.987 192.562 181.955V51.4297H199.969C204.058 51.4297 207.375 ' +
        '48.2531 207.375 44.3359C207.375 40.4188 204.058 37.2422 199.969 37.2422H185.156H51.8438H37.0312ZM177.75 ' +
        '51.4297V181.955C177.75 190.183 170.788 196.852 162.197 196.852H74.8031C66.2119 196.852 59.25 190.183 59.25 ' +
        '181.955V51.4297H177.75Z');
    path4.setAttribute('fill', 'black');
    svg1.appendChild(path1);
    svg1.appendChild(path2);
    svg1.appendChild(path3);
    svg1.appendChild(path4);
    actionIcon1.appendChild(svg1);
    modalBodyAction.appendChild(actionIcon1);

    const actionIcon2 = document.createElement('a');
    actionIcon2.href = '#openTransfer';
    actionIcon2.className = 'modal-body__action-icon';

    const svg2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg2.setAttribute('class', 'modal-body__action-icon');
    svg2.setAttribute('width', '235');
    svg2.setAttribute('height', '233');
    svg2.setAttribute('viewBox', '0 0 235 233');
    svg2.setAttribute('fill', 'none');
    const path5 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path5.setAttribute('d', 'M205.625 140.771C196.066 140.771 176.25 146.049 166.205 148.91C164.872 134.98 146.87 130.049 128.267 126.303C119.776 124.596 113.455 121.577 107.345 118.652C99.8103 115.049 92.696 111.645 83.2295 111.645C72.3892 111.645 62.51 113.844 56.9352 115.365C55.4614 110.28 51.2805 106.182 45.7263 105.084L5.85205 97.1783C4.42736 96.8939 2.92603 97.2638 1.7882 98.1831C0.66002 99.1074 0 100.482 0 101.937V179.604C0 182.287 2.18981 184.459 4.89599 184.459H35.5713C41.617 184.459 46.7691 180.646 48.9842 175.292C59.9548 180.478 110.652 203.875 132.188 203.875C151.178 203.875 190.278 184.819 216.144 172.209C222.885 168.924 228.459 166.203 232.074 164.634C233.853 163.857 235 162.112 235 160.188C235 148.754 222.923 140.771 205.625 140.771ZM47.6963 120.051L40.4195 170.583C40.0753 172.958 37.9906 174.75 35.5713 174.75H9.79151V107.858L43.8137 114.604C46.3574 115.111 48.069 117.5 47.6963 120.051ZM211.821 163.496C188.289 174.968 148.902 194.167 132.188 194.167C114.383 194.167 67.6139 173.494 51.1001 165.53C51.0817 165.521 51.0611 165.524 51.0427 165.516L56.8034 125.513C60.3707 124.407 71.2697 121.354 83.229 121.354C90.458 121.354 96.0328 124.023 103.099 127.398C109.439 130.432 116.63 133.869 126.316 135.822C147.592 140.098 156.667 144.482 156.667 150.479C156.667 151.664 156.303 152.394 155.375 153.081C152.268 155.39 140.105 159.268 94.4163 145.824C91.8056 145.075 89.0999 146.53 88.3251 149.1C87.56 151.669 89.0329 154.371 91.6243 155.134C114.182 161.761 131.422 165.065 143.642 165.065C151.608 165.065 157.45 163.662 161.227 160.86C161.552 160.619 161.791 160.325 162.086 160.066C162.394 160.032 162.697 160.068 163.006 159.974C171.66 157.334 196.187 150.479 205.625 150.479C213.609 150.479 222.014 152.883 224.481 157.4C221.068 158.993 216.755 161.098 211.821 163.496Z');
    path5.setAttribute('fill', 'black');
    const path6 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path6.setAttribute('d', 'M153.224 115.092C154.171 116.031 155.423 116.5 156.666 116.5C157.909 116.5 159.162 116.031 160.108 115.092L197.019 78.8423C202.564 73.3386 205.625 66.0291 205.625 58.25C205.625 42.1894 192.448 29.125 176.25 29.125C168.906 29.125 162.011 31.8081 156.666 36.6242C151.321 31.8081 144.427 29.125 137.083 29.125C120.885 29.125 107.708 42.1894 107.708 58.25C107.708 66.0291 110.768 73.3386 116.333 78.8564L153.224 115.092ZM137.083 38.8332C143.27 38.8332 148.969 41.7061 152.736 46.7211C154.591 49.1767 158.741 49.1767 160.596 46.7211C164.364 41.7056 170.063 38.8332 176.25 38.8332C187.045 38.8332 195.833 47.5411 195.833 58.25C195.833 63.4361 193.796 68.309 190.115 71.9638L156.666 104.815L123.237 71.9783C119.536 68.3091 117.5 63.4361 117.5 58.25C117.5 47.5416 126.287 38.8332 137.083 38.8332Z');
    path6.setAttribute('fill', 'black');
    svg2.appendChild(path5);
    svg2.appendChild(path6);
    actionIcon2.appendChild(svg2);
    modalBodyAction.appendChild(actionIcon2);

    // Append actions to modal body
    modalBody.appendChild(modalBodyAction);

    // Append modal body to modal content
    modalContent.appendChild(modalBody);

    // Append modal content to modal dialog
    modalDialog.appendChild(modalContent);

    // Append modal dialog to modal container
    modal.appendChild(modalDialog);

    // Append modal to body
    document.body.appendChild(modal);
}

// Function to create a new card
function createCard(title, description, from, link, id) {
    // Create card container
    const card = document.createElement('div');
    card.className = 'card';
    card.id = id;
    // Create card image div
    const cardImage = document.createElement('div');
    cardImage.className = 'card__image';
    card.appendChild(cardImage);

    // Create card information div
    const cardInfo = document.createElement('div');
    cardInfo.className = 'card__information';

    // Create card title
    const cardTitle = document.createElement('div');
    cardTitle.className = 'card__information_title';
    cardTitle.textContent = title;
    cardInfo.appendChild(cardTitle);

    // Create card description
    const cardDescription = document.createElement('div');
    cardDescription.className = 'card__information_description';
    cardDescription.textContent = description;
    cardInfo.appendChild(cardDescription);

    // Create card "from" field
    const cardFrom = document.createElement('div');
    cardFrom.className = 'card__information_from';
    cardFrom.textContent = `Получено от: ${from}`;
    cardInfo.appendChild(cardFrom);

    // Append card information to card
    card.appendChild(cardInfo);

    // Create card icon button
    const cardIconButton = document.createElement('a');
    cardIconButton.href = link;
    cardIconButton.className = 'card__icon-button';

    // Create card icon (SVG)
    const cardIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    cardIcon.setAttribute('class', 'card__icon');
    cardIcon.setAttribute('width', '73');
    cardIcon.setAttribute('height', '69');
    cardIcon.setAttribute('viewBox', '0 0 73 69');
    cardIcon.setAttribute('fill', 'none');
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('clip-path', 'url(#clip0_118_116)');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M27.5305 8.61762C27.5649 3.96562 31.5773 0.22978 36.5007 0.266184C41.4241 ' +
        '0.302589 45.3831 4.09313 45.3487 8.74937C45.3143 13.3929 41.3064 17.133 36.3763 17.0965C31.4529 17.0601 ' +
        '27.4962 13.2611 27.5305 8.61762ZM27.3382 34.6353C27.3725 29.9939 31.3827 26.2475 36.3061 26.2839C41.2295 ' +
        '26.3203 45.1884 30.1214 45.154 34.767C45.1197 39.4127 41.1117 43.1592 36.1816 43.1227C31.2605 43.0821 ' +
        '27.3038 39.281 27.3382 34.6353ZM27.1522 59.7875C27.1866 55.1376 31.199 51.3976 36.1246 51.434C41.0435 ' +
        '51.4704 45.0025 55.263 44.9681 59.9193C44.9337 64.5606 40.9258 68.3008 36.0002 68.2643C31.0745 68.2279' +
        ' 27.1179 64.4289 27.1522 59.7875Z');
    path.setAttribute('fill', '#044334');
    g.appendChild(path);
    cardIcon.appendChild(g);
    cardIconButton.appendChild(cardIcon);

    // Append icon button to card
    card.appendChild(cardIconButton);

    // Return the complete card
    return card;
}

// Function to add a new card to the achievements div
function addCardToAchievements(title, description, from, link, id) {
    const achievements = document.getElementById('achievements');
    const newCard = createCard(title, description, from, link, id);
    achievements.appendChild(newCard);
}


async function updateSiteInfo() {
    const usrnm = new Username();
    const user = new Users();
    nickname.innerHTML = await usrnm.get_username();
    let all_achievements = [];
    all_achievements = (await user.get_all_achievements());

    for (let idx = 0; idx < all_achievements.length; idx++) {
        console.log(all_achievements[idx]);
        addCardToAchievements(all_achievements[idx]["name"], all_achievements[idx]["description"] + ' ' + all_achievements[idx]["baseURI"], all_achievements[idx]["minter"], '#achievement' + all_achievements[idx]["id"], all_achievements[idx]["id"]);
        createModal('achievement' + all_achievements[idx]["id"], all_achievements[idx]["name"], all_achievements[idx]["description"] + ' ' + all_achievements[idx]["baseURI"], await usrnm.get_username(), all_achievements[idx]["minter"], all_achievements[idx]["id"])
    }
    //for tests
    addCardToAchievements('Название2', 'Краткое описание Краткое описание...', 'nickname2', '#achievement2', 2);
    createModal('achievement2', 'New Title', 'New description...', 'New Owner', 'New Sender', '2');
    addCardToAchievements('Название3', 'Краткое описание Краткое описание...', 'nickname3', '#achievement3', 3);
    createModal('achievement3', 'Another Title', 'Another description...', 'Another Owner', 'Another Sender', '3');

    addCardToAchievements('Название4', 'Краткое описание Краткое описание...', 'nickname4', '#achievement4', 4);
    createModal('achievement4', 'New Title', 'New description...', 'New Owner', 'New Sender', '4');
    addCardToAchievements('Название5', 'Краткое описание Краткое описание...', 'nickname5', '#achievement5', 5);
    createModal('achievement5', 'Another Title', 'Another description...', 'Another Owner', 'Another Sender', '5');

}


updateSiteInfo();
