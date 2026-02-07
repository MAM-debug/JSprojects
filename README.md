# Tic Tac Toe Game

A classic Tic Tac Toe game built with vanilla HTML, CSS, and JavaScript. Play against another player in this interactive web-based implementation.

## Features

✨ **Interactive Gameplay**
- Two-player game (O vs X)
- Click-based turns with visual feedback
- Automatic winner detection
- Game state management

🎨 **Modern UI/UX**
- Responsive design with vmin units for all screen sizes
- Smooth hover effects and transitions
- Clear visual feedback on button interactions
- Professional color scheme

🎮 **Game Controls**
- **Reset Game**: Clear the board and start a new game
- **New Game**: Start fresh after someone wins
- Disabled state prevents invalid moves

## How to Play

1. Open `index.html` in your web browser
2. Players take turns clicking on empty boxes
3. First player is **O**, second player is **X**
4. Get three of your marks in a row (horizontally, vertically, or diagonally) to win
5. Click **Reset Game** to clear the board anytime
6. After a win, click **New Game** to play again

## Winning Patterns

```
[0][1][2]     [0][3][6]     [0][4][8]
[3][4][5]  +  [1][4][7]  +  [2][4][6]
[6][7][8]     [2][5][8]     [3][4][5]
              [6][7][8]
```

## Project Structure

```
JSprojects/
├── index.html      # Main HTML file with game board structure
├── app.js          # Game logic and event handlers
├── style.css       # Styling and layout
└── README.md       # Project documentation
```

## File Descriptions

### index.html
- Game container and 3x3 grid of buttons
- Winner announcement modal
- Reset and New Game buttons
- Linked to app.js for functionality

### app.js
- Box click event listeners
- Winner detection algorithm (8 winning patterns)
- Game state management (turn tracking, game active flag)
- Reset and new game functionality
- Disable/enable game controls

### style.css
- Responsive grid layout (60vmin size)
- Button styling with hover effects
- Message container with semi-transparent overlay
- Smooth transitions and scale effects

## Technologies Used

- **HTML5** - Semantic structure and form elements
- **CSS3** - Flexbox, Grid, Transitions, and Transforms
- **JavaScript (Vanilla)** - Game logic and DOM manipulation
- **Git** - Version control

## Installation

1. Clone the repository:
```bash
git clone https://github.com/MAM-debug/JSprojects.git
cd JSprojects
```

2. Open the game in your browser:
```bash
# Simply open index.html in your preferred web browser
```

No dependencies or build tools required!

## Browser Compatibility

- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

## Game Rules

1. Players alternate turns, starting with O
2. Each player can only place their mark in empty boxes
3. A player wins by getting three of their marks in a row
4. The game ends when someone wins or all boxes are filled (tie)
5. Click Reset Game to play again without closing the browser

## Code Highlights

### Winner Detection
```javascript
const checkWinner = () => {
    for (let pattern of winpatterns) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        
        if (val1 !== "" && val1 === val2 && val2 === val3) {
            showWinner(val1);
            gameActive = false;
            return;
        }
    }
};
```

### Winning Patterns Array
```javascript
const winpatterns = [
    [0,1,2], [0,3,6], [0,4,8],  // rows & diagonals
    [1,4,7], [2,5,8], [2,4,6],  // columns
    [3,4,5], [6,7,8]             // remaining
];
```

## Future Enhancements

- 🤖 AI opponent (single-player mode)
- 📊 Score tracking across multiple games
- 🎵 Sound effects and animations
- 🌙 Dark mode toggle
- 📱 Mobile app version
- 🔄 Undo/Redo functionality

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest improvements
- Submit pull requests

## License

This project is open source and available under the MIT License.

## Author

**MAM-debug**

[GitHub Profile](https://github.com/MAM-debug)

---

**Enjoy the game! 🎮**
