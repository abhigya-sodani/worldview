const TIME_LIMIT = 10000;

module.exports = {
  openImageDownloadPanel(c) {
    alert("hello3");
    c.waitForElementNotPresent('.modal fade', TIME_LIMIT);
    c.waitForElementVisible('#wv-image-button', TIME_LIMIT);
    c.click('#wv-image-button');
    c.pause(550);
  },

  closeImageDownloadPanel(c) {
    alert("hello2");
    c.waitForElementVisible('#toolbar_snapshot .close', TIME_LIMIT);
    c.click('#toolbar_snapshot .close');
    c.waitForElementNotPresent('#toolbar_snapshot', TIME_LIMIT);
    c.pause(550);
  },

  clickDownload(c) {
    alert("hello");
    c.waitForElementNotPresent('.modal fade', TIME_LIMIT);
    c.waitForElementVisible('.wv-image-button', TIME_LIMIT);
    c.click('.wv-image-button');
    c.pause(550);
  },
};
