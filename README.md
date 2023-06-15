# TypeLive

TypeLive is a JavaScript class that provides a live typing effect on selected HTML elements. It allows you to simulate the process of typing text in real-time.

## Installation

To use TypeLive, you need to include the JavaScript file in your HTML document:

```html
<script src="https://saithiyan.github.io/TypeLive/TypeLive.js"></script>
```
## Download

You have two options to install TypeLive:

Option 1: Download the JavaScript file
Download the typelive.js file from the TypeLive repository on GitHub.

Place the downloaded typelive.js file in your project directory.

Include the following script tag in your HTML file:

html
Copy code
<script src="path/to/typelive.js"></script>
Make sure to replace "path/to/typelive.js" with the actual path to the typelive.js file within your project.

Option 2: Copy and paste the code
Open the typelive.js file from the TypeLive repository on GitHub.

Copy the entire code from the file.

Create a new JavaScript file in your project directory and paste the copied code into it.

Include the following script tag in your HTML file:

html
Copy code
<script src="path/to/your-js-file.js"></script>
Make sure to replace "path/to/your-js-file.js" with the actual path to your JavaScript file within your project.

```html
<script src="https://saithiyan.github.io/TypeLive/TypeLive.js"></script>
```
## Usage

### Creating an instance

To create an instance of TypeLive, you need to pass a CSS selector for the HTML element you want to apply the typing effect to:

```js
const typewriter = new TypeLive('.element-selector');
```

### Typing Text

To start typing text, use the typing method. It takes three parameters: the text to be typed, the speed of typing (in milliseconds), and an optional parameter i that keeps track of the current index. It recursively appends characters to the selected element until the entire text is typed.

```js
typewriter.typing('Hello, World!', 100);
```

### Removing Text

TypeLive provides two methods for removing text: removeAllText and removeText.

The removeAllText method removes all the text from the selected element. It takes two parameters: the speed of removal (in milliseconds) and an optional parameter i that keeps track of the current index. It recursively removes characters from the selected element until there is no text remaining.

```js
typewriter.removeAllText(50);
```

The removeText method removes a specific number of characters from the end of the text in the selected element. It takes two parameters: the number of characters to remove and the speed of removal (in milliseconds).

```js
typewriter.removeText(5, 50);
```

### Starting with Delay

TypeLive also provides methods to start the typing or removal process with a delay. These methods are useful when you want to control the timing of the effect.

The startTyping method starts the typing process with a delay. It takes three parameters: the text to be typed, the speed of typing (in milliseconds), and an optional delay before starting (in milliseconds).


```js
typewriter.startTyping('Hello, World!', 100, 2000);
```

The startRemove method starts the removal process with a delay. It takes three parameters: the number of characters to remove, the speed of removal (in milliseconds), and an optional delay before starting (in milliseconds).

```js
typewriter.startRemove(5, 50, 3000);
```

The startRemoveAllText method starts removing all the text with a delay. It takes two parameters: the speed of removal (in milliseconds) and an optional delay before starting (in milliseconds).

```js
typewriter.startRemoveAllText(50, 5000);
```

## Example

Here's an example of how you can use TypeLive:
```html
<!DOCTYPE html>
<html>
<head>
  <script src="[typelive.js](https://saithiyan.github.io/TypeLive/TypeLive.js)"></script>
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

## License

TypeLive is released under the MIT License. See [LICENSE](LICENSE) for more information.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or improvements, please open an issue or submit a pull request.

## Acknowledgements

TypeLive was inspired by similar typing effect libraries and tutorials available online. Special thanks to the open-source community for their valuable contributions.

## Contact

For any questions or inquiries, feel free to reach out to me at [saiketheeswaran@gmail.com](mailto:saiketheeswaran@gamil.com).




