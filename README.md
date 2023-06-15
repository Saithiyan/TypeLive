# TypeLive

TypeLive is a JavaScript class that provides a live typing effect on selected HTML elements. It allows you to simulate the process of typing text in real-time.

---

## Installation

You have three options to install TypeLive:

### Option 3: Use the [CDN link](https://saithiyan.github.io/TypeLive/TypeLive.js) : https://saithiyan.github.io/TypeLive/TypeLive.js

Include the following script tag in your HTML file:

```html
<script src="https://saithiyan.github.io/TypeLive/TypeLive.js"></script>
```

Using a CDN link has the advantage of not requiring you to download or host the JavaScript file yourself. It allows for easy integration and ensures that you're always using the latest version of TypeLive.

### Option 2: Download the JavaScript file


1. Download the typelive.js file from the TypeLive repository on GitHub.
2. Place the downloaded typelive.js file in your project directory.
3. Include the following script tag in your HTML file:

To use TypeLive, you need to include the JavaScript file in your HTML document:

```js
<script src="path/to/typelive.js"></script>
```

Make sure to replace "path/to/typelive.js" with the actual path to the typelive.js file within your project.

### Option 3: Copy and paste the code

1. Open the typelive.js file from the TypeLive repository on GitHub.
2. Copy the entire code from the file.
3. Create a new JavaScript file in your project directory and paste the copied code into it.

To use TypeLive, you need to include the JavaScript file in your HTML document:

```js
<script src="path/to/your-js-file.js"></script>
```

Make sure to replace "path/to/your-js-file.js" with the actual path to your JavaScript file within your project.

---

## Usage

After installing TypeLive, you can start using it in your JavaScript code. Follow the instructions provided in the previous sections to create an instance of TypeLive, type text, remove text, or start with a delay.

### Creating an instance

To create an instance of TypeLive, you need to pass a CSS selector for the HTML element you want to apply the typing effect to:

```js
const typewriter = new TypeLive('.element-selector');
```

### Typing Text

To start typing text, use the `typing` method. It takes three parameters: the text to be typed, the speed of typing (in milliseconds), and an optional parameter i that keeps track of the current index. It recursively appends characters to the selected element until the entire text is typed.


```js
typing(text, speed, i = 0)

typewriter.typing('Hello, World!', 100);
```
### Tab Typing

The `tabTyping` method allows you to type and remove multiple texts from an array with specified delays. It takes five parameters: the array of texts to be typed, the speed of typing (in milliseconds), the speed of text removal (in milliseconds), the delay before typing each text (in milliseconds), and an optional index parameter (default is 0) to keep track of the current index.

```js
typewriter.tabTyping(tab, speedTyping, speedRemove, delaiTyping, i = 0);

typewriter.tabTyping(['Hello', 'World', 'TypeLive'], 50, 50, 1500);

```

### Removing Text

TypeLive provides two methods for removing text: removeAllText and removeText.

The `removeAllText` method removes all the text from the selected element. It takes two parameters: the speed of removal (in milliseconds) and an optional parameter i that keeps track of the current index. It recursively removes characters from the selected element until there is no text remaining.

```js
typewriter.removeAllText(speed, i = 0);

typewriter.removeAllText(50);
```

The `removeText` method removes a specific number of characters from the end of the text in the selected element. It takes two parameters: the number of characters to remove and the speed of removal (in milliseconds).

```js
typewriter.removeText(text, speed);

typewriter.removeText(5, 50);
```

### Starting with Delay

TypeLive also provides methods to start the typing or removal process with a delay. These methods are useful when you want to control the timing of the effect.

The `startTyping` method starts the typing process with a delay. It takes three parameters: the text to be typed, the speed of typing (in milliseconds), and an optional delay before starting (in milliseconds).


```js
typewriter.startTyping(text, speed, delai = 0);

typewriter.startTyping('Hello, World!', 100, 2000);
```

The `startRemove` method starts the removal process with a delay. It takes three parameters: the number of characters to remove, the speed of removal (in milliseconds), and an optional delay before starting (in milliseconds).

```js
typewriter.startRemove(text, speed, delai)

typewriter.startRemove(5, 50, 3000);
```

The `startRemoveAllText` method starts removing all the text with a delay. It takes two parameters: the speed of removal (in milliseconds) and an optional delay before starting (in milliseconds).

```js
typewriter.startRemoveAllText(speed, delai)

typewriter.startRemoveAllText(50, 5000);
```

## Example

Here's an example of how you can use TypeLive:
```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://saithiyan.github.io/TypeLive/TypeLive.js"></script>
</head>
<body>
  <h1 class="element-selector"></h1>

  <script>
    const typewriter = new TypeLive('.element-selector');

    typewriter.startTyping('Hello, World!', 100)
      .startRemoveAllText(50, 2000)
      .startTyping('Welcome!', 100, 3000);
  </script>
</body>
</html>
```

In the example above, the text "Hello, World!" will be typed in the selected element, followed by the removal of all the text. After a delay of 2 seconds, the text "Welcome!" will be typed.

---

## Available Methods : Loops

TypeLive provides several methods that allow you to create different typing effects. Here are the new methods you have added:

### Loop Typing

The `loopTyping` method allows you to create a loop that repeatedly types and removes text at specified intervals. It takes four parameters: the text to be typed, the speed of typing (in milliseconds), the speed of text removal (in milliseconds), and an optional interval (in milliseconds) between each loop.

```js
loopTyping(text, speedTyping, speedRemove, interval = 0);

typewriter.loopTyping('Hello, World!', 50, 50, 3000);
```

### Loop Tab Typing

The `loopTabTyping` method allows you to create a loop that iterates through an array of texts and types and removes each text at specified intervals. It takes five parameters: the array of texts to be typed, the speed of typing (in milliseconds), the speed of text removal (in milliseconds), the delay before typing each text (in milliseconds), and an optional interval (in milliseconds) between each loop.

```js
loopTabTyping(tab, speedTyping, speedRemove, delaiTyping, interval = 0, i = 0);

typewriter.loopTabTyping(['Hello', 'World', 'TypeLive'], 50, 50, 1500, 5000);
```

---

## License

TypeLive is released under the MIT License. See [LICENSE](LICENSE) for more information.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or improvements, please open an issue or submit a pull request.

Feel free to modify the parameters and experiment with different typing effects.

If you'd like to contribute to TypeLive, please follow these guidelines:

1. Fork the TypeLive repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Submit a pull request to the main TypeLive repository.

We appreciate your contributions!

## Acknowledgements

TypeLive was inspired by similar typing effect libraries and tutorials available online. Special thanks to the open-source community for their valuable contributions.

## Contact

For any questions or inquiries, feel free to reach out to me at [saiketheeswaran@gmail.com](mailto:saiketheeswaran@gamil.com).




