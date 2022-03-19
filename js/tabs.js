const tabButtons = document.querySelectorAll(".design-list__item ");
const tabDescription = document.querySelectorAll(".design__descr");
const tabImages= document.querySelectorAll(".design-images");
const tabTitles = document.querySelectorAll(".design__title");

const changeClassSomeEl = (elem, dataValue) => {
  elem.forEach((item) => {
    if (dataValue === item.dataset.tabsField) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }

    if (
      item.classList.contains("design__title") &&
      !item.classList.contains("hidden")
    ) {
      document.title = item.innerText;
    }
  });
};

tabButtons.forEach((item) => {
  item.addEventListener("click", (e) => {
    const dataAttr = e.target.dataset.tabsHandler;

    changeClassSomeEl(tabDescription, dataAttr);
    changeClassSomeEl(tabImages, dataAttr);
    changeClassSomeEl(tabTitles, dataAttr);

    tabButtons.forEach((btn) => {
      if (btn == e.target) {
        btn.classList.add("design-list__item_active");
      } else {
        btn.classList.remove("design-list__item_active");
      }

    });

  });

});
