const { controlThemes } = require("./types.js");
const { Utils } = require("./utils.js");

class ThemeManager {
  constructor(view) {
    this.view = view;
    this.controlTheme = undefined;
  }

  setWindowControlTheme(theme) {
    const newTheme = controlThemes[theme];
    if (!newTheme) {
      return;
    }

    if (this.controlTheme) {
      this.view.getElement().classList.remove(this.controlTheme.cssClass);
    }

    this.view.getElement().classList.add(newTheme.cssClass);
    this.controlTheme = newTheme;
  }

  setReverseWindowControls(flag) {
    Utils.setToggleClass(this.view.getElement(), "reverse-controls", flag);
  }
}

module.exports = { ThemeManager };
