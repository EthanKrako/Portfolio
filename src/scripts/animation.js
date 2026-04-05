const tabsRadio = document.querySelectorAll("input[type='radio'][name='project-tabs']");
const projectLists = document.querySelectorAll(".project-lists .list");
const listContainer = document.querySelector(".project-lists");

function updateActiveProjectTab() {
    projectLists.forEach(list => {
        list.classList.remove("is-active");
    });

    tabsRadio.forEach(radio => {
        if (radio.checked) {
            const referencedList = document.querySelector("." + radio.dataset.list);
            referencedList.classList.add("is-active");
            
            resizeListContainer(referencedList);
        }
    });
}

function resizeListContainer(list) {
    const fontSizePx = parseFloat(getComputedStyle(listContainer).fontSize);
    const listHeightPx = list.getBoundingClientRect().height;
    listContainer.style.height = (listHeightPx / fontSizePx) + "em";
}

export function setupProjectTabs() {
    // Initial load
    updateActiveProjectTab();

    tabsRadio.forEach(radio => {
        radio.addEventListener('change', function () {
            updateActiveProjectTab();
        })
    })

    window.addEventListener('resize', function () {
        resizeListContainer(listContainer.querySelector(".list.is-active"));
    });
}