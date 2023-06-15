class TypeLive {
  constructor(selectedElement) {
    this.selectedElement = document.querySelector(selectedElement);
  }
  
  typing(text, speed, i = 0) {
    i;
    if (i < text.length) {
      this.selectedElement.textContent += text.charAt(i);
      i++;
      setTimeout(() => this.typing(text, speed, i), speed);
    }
  }

  tabTyping(tab, speedTyping, speedRemove, delaiTyping, i = 0) {
    let a = 0;
    this.startTyping(tab[a], speedTyping, (delaiTyping = 1500)).removeAllText(
      speedRemove
    );
    a++;
    setInterval(() => {
      if (a >= tab.length) {
        return 0;
      }
      this.startTyping(tab[a], speedTyping, delaiTyping).removeAllText(
        speedRemove
      );
      a++;
    }, 3000);
  }

  removeAllText(speed, i = 0) {
    let length = this.selectedElement.textContent.length;
    i = length;
    if (length > 0) {
      this.selectedElement.textContent =
        this.selectedElement.textContent.substring(0, length - 1);
      length--;
    } else {
      return 0;
    }
    setTimeout(() => {
      this.removeAllText(speed, i);
    }, speed);
    return this;
  }

  removeText(text, speed) {
    let textLength = typeof text === "string" ? text.length : text;
    let length = this.selectedElement.textContent.length;

    if (textLength > 0) {
      this.selectedElement.textContent =
        this.selectedElement.textContent.substring(0, length - 1);
      textLength--;
    } else if (textLength == 0) {
      return 0;
    }
    setTimeout(() => {
      let newText =
        typeof text === "string" ? text.substring(0, textLength) : textLength;
      this.removeText(newText, speed);
    }, speed);
  }

  //Method with option delai (setTimeout):

  startTyping(text, speed, delai = 0) {
    setTimeout(() => {
      this.typing(text, speed);
    }, delai);
    return this;
  }
  startRemove(text, speed, dalai) {
    setTimeout(() => {
      this.removeText(text, speed);
    }, delai);
    return this;
  }
  startRemoveAllText(speed, dalai) {
    setTimeout(() => {
      this.removeAllText(speed);
    }, delai);
    return this;
  }

  //loops:
  loopTyping(text, speedTyping, speedRemove, interval = 0) {
    interval = 3000 + interval + speedTyping * text.length;

    this.startTyping(text, speedTyping, 500).startRemoveAllText(
      speedRemove,
      500
    );
    setInterval(() => {
      this.startTyping(text, speedTyping, 1000).startRemoveAllText(
        speedRemove,
        0
      );
    }, interval);
  }

  loopTabTyping(
    tab,
    speedTyping,
    speedRemove,
    delaiTyping,
    interval = 0,
    i = 0
  ) {
    interval = 8500 + interval + speedTyping * tab.length;

    this.tabTyping(tab, speedTyping, speedRemove, delaiTyping, (i = 0));

    setInterval(() => {
      this.tabTyping(tab, speedTyping, speedRemove, delaiTyping, (i = 0));
    }, interval);
  }
}