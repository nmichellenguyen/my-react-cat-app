My-meow-app | Created by Michelle Nguyen | https://my-meow-app-react.netlify.com

//Cat App
Let's get started meow.

Step 1: Create a new base app.
Fork a copy of this JSFiddle: https://jsfiddle.net/chug2k/Lfkhgb6o/

Yes, yet another code playground tool in addition to CodePen, Repl.it, and Jsbin. At least you're getting a good intro!

I like arranging my window in "right results" and making HTML and CSS super small (we won't use those windows today, as we're JavaScript gurus):



Now, we're going to create a new app. I call it Cat App. We will show pictures of cats. Why? Because cats are cool.

So, in step 1: Change the text in the <h1> block to reflect that this is going to be YOURNAME's CAT APP! In fact, let's change it to look like this screenshot:



Step 2: Create and Insert a Cat Component
Now, just above the line that starts ReactDOM.render, let's insert a new Component. We shall call it ... Cat.

class Cat extends React.Component {
    render() {
    return <div>
      <strong>Meow</strong>
    </div>
  }
}
Now, go back to your method and below where you wrote "I wrote this all in React"...insert some code until you have the following:

HINT: You can add a cat by using <Cat/>.


Step 3: Give our Cat some attributes.
Now, we are going to use props. Mad props, yo.



We have a few attributes on our cat. Let's start with:
* Name
* Color
* Special Ability

So here's a list of three cats:

| Name | Color | Special Ability |
| -------- | -------- | -------- |
| Missy | Tabby | Catching Mice |
| Snowball | White | Jumping |
| Mr. Snuggles | Black | Time Travel |

Now, change the code where you inserted a <Cat/> and pass the properties.

      <Cat name="Missy" color="tabby" special_ability="Catching Mice"/>
You won't notice any changes in the output yet, because we haven't shown them. Change the render function on the Cat component until we get the following:



Now it's time to show all three cats. Do that now.

Step 4: Array and Map
Now, let's imagine we have an array of objects about cats. Take the earlier table, and make it into code. Here's what I mean:

const CATS = [
    { name: "Missy", color: "Tabby", special_ability: "Catching Mice"},
    { name : ...} // finish this. 
]
Take that code, and place it on line 1, outside of everything.

Now, where we have our cats, we can write code like this:

      {CATS.map( cat => 
        <Cat name={cat.name} color={cat.color} special_ability={cat.special_ability} />
      )}
Double check to see that works. Now, while I'm here, I can show you some shortcuts. We can use destructuring and do the following syntax to skip thecat:

      {CATS.map( ({name, color, special_ability}) => 
        <Cat name={name} color={color} special_ability={special_ability} />
      )}
Now to do one better, we can even do this syntax (exactly equivalent):

      {CATS.map(cat => 
        <Cat {...cat} />
      )}
It's your choice on which one to use. The first shortcut is called destructuring; the second shortcut is called the Object Spread syntax.

Step 5: Add an image to each cat
Now, add an attribute to each cat called image_url. Gaze upon this cat below.

image alt

Change the const CATS = declaration to include some pictures, and then show them.

Rocket 6: Adopt a Cat
Add a button or link for each cat saying "Adopt"
Clicking the button should mark the cat "Adopted". Add some visual indication (graying out the image) and changing the button text to "Abandon".
HINT: To do this, add one more attribute to cat: adopted, that's a boolean value.

Rocket 7: Add a Cat
Create a small form with the appropriate fields to add to the global CATS array. (Similar to your Todo list)

Rocket 8: Search for cats
Create a second input field. On change, filter the list of cats by the value of the textfield.//

//This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).//

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
