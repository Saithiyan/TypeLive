class TypeLive {
  constructor(selectedElement) {
    this.selectedElement = document.querySelector(selectedElement);
  }

  typing(text, speed, i = 0) {
    i;
    // let text = text;
    if (i < text.length) {
      this.selectedElement.textContent += text.charAt(i);

      //   console.log(this.selectedElement.textContent,text.charAt(i),i)

      i++;

      setTimeout(() => this.typing(text, speed, i), speed);
    }
  }
  removeAllText(speed, i = 0) {
    let length = this.selectedElement.textContent.length;
    console.log(length);
    i = length;
    if (length > 0) {
      this.selectedElement.textContent =
        this.selectedElement.textContent.substring(0, length - 1);
      console.log(this.selectedElement.textContent, length);
      length--;
    }
    setTimeout(() => {
      this.removeText(speed, i);
    }, speed);
    return this;
  }
  removeText(text, speed) {
    let textLength = typeof text === "string" ? text.length : text;

    // let textLength;
    // if (text === "All") {
    //   textLength = this.selectedElement.textContent.length;
    // } else if (typeof text === "string") {
    //   textLength = text.length;
    // } else if ( typeof text === "number") {
    //   textLength = text;
    // }

    // let textLength = text.length;
    let length = this.selectedElement.textContent.length;
    // console.log(text, textLength, length);

    if (textLength > 0) {
      this.selectedElement.textContent =
        this.selectedElement.textContent.substring(0, length - 1);

      textLength--;
      // console.log(this.selectedElement.textContent, textLength);
    } else if (textLength == 0) {
      console.log("tl=0 donc return 0");
      return 0;
    }


    setTimeout(() => {
      let newText =
        typeof text === "string" ? text.substring(0, textLength) : textLength;

      // let newText
      // if (text === "All") {
      //   newText = this.selectedElement.textContent.length;
      // } else if (typeof text === "string") {
      //   newText = text.substring(0, textLength);
      // } else {
      //   newText = text;
      // }
      // let newText = text.substring(0, textLength);
      // console.log(newText, "dansSetTimeout", textLength);
      this.removeText(newText, speed);
    }, speed);
  }

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
  
  // loop( delai){
  //   setInterval(()=>{},delai)
  // }
  startRemoveAllText(speed, dalai) {
    setTimeout(() => {
      this.removeAllText(speed);
    }, delai);
    return this;
  }
}
