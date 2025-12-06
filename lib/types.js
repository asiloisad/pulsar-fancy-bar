const MenuEvent = Object.freeze({
  MOUSE_CLICK: Symbol(),
  MOUSE_ENTER: Symbol(),
});

class Config {
  constructor() {
    this.displayTitleBar = false;
    this.displayMenuBar = false;
    this.openAdjacent = false;
    this.autoHide = false;
    this.hideFullscreenTitle = false;
    this.altGivesFocus = false;
    this.menuBarMnemonics = false;
    this.windowControlTheme = "";
    this.reverseWindowControls = false;
  }
}

const controlThemes = {
  "Windows 11": {
    cssClass: "control-theme-windows-11",
  },
  Yosemite: {
    cssClass: "control-theme-yosemite",
  },
};

const exceptionCommands = new Set([
  "application:open-terms-of-use",
  "application:open-documentation",
  "application:open-faq",
  "application:open-discussions",
  "application:report-issue",
  "application:search-issues",
]);

module.exports = {
  MenuEvent,
  Config,
  controlThemes,
  exceptionCommands,
};
