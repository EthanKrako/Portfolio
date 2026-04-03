const tabsRadio = document.querySelectorAll("input[type='radio'][name='project-tabs']");

function updateActiveProjectTab() {
    const lists = document.querySelectorAll(".project-lists .list");

    lists.forEach(list => {
        list.classList.remove("is-active");
    });

    tabsRadio.forEach(radio => {
        if (radio.checked) {
            const referrencedLists = document.querySelectorAll("." + radio.dataset.list);
            referrencedLists.forEach(list => {
                list.classList.add("is-active");
            });
        }
    });
}

export function setupRadioEventListeners() {
    tabsRadio.forEach(radio => {
        radio.addEventListener('change', function () {
            updateActiveProjectTab();
        })
    })
}