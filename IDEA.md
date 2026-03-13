# Game Idea: Literacy Helper

An educational game designed to assist children in the early stages of learning to read and write. The game focuses on visual association, vocabulary building, and syntax through interactive play.

## Core Objective
To provide a fun, low-pressure environment for children to practice reading and writing skills using familiar images and structured word-building exercises.

## Game Modes

### 1. Image-Word Matching
*   **Gameplay:** An image is displayed (e.g., an apple, a dog, a car).
*   **Objective:** The child must identify the correct word that matches the image.
*   **Options:** Multiple choice buttons with text labels.

### 2. Complete the Phrase
*   **Gameplay:** A sentence is shown with one word missing (redacted).
*   **Objective:** The child must select the correct word to complete the sentence from a pool of 3 options.
*   **Constraint:** Only one option is correct; others may be phonetically similar or contextually incorrect to challenge the user.

### 3. Syllable Builder
*   **Gameplay:** A word is presented as a set of scrambled syllables.
*   **Objective:** The child must drag and drop or click the syllables in the correct sequence to form the target word.
*   **Visual Aid:** The target word's image may be shown as a hint.

### 4. Keyboard Typing Helper
*   **Gameplay:** An image is shown, and an on-screen virtual keyboard is presented.
*   **Objective:** The child must type the full name of the object depicted.
*   **Visual Aid:** To assist the user, letters that belong to the target word are highlighted with a distinct background color on the virtual keyboard.

## Content Management
*   **Contribution:** Users can contribute new content by adding questions, answers, and images (via URLs or Base64) for any of the game modes. Data is stored locally in the browser.

## Technical Goals
*   **Frontend:** Built using simple, standard web technologies: HTML, CSS, and vanilla JavaScript.
*   **Storage:** `localStorage` for lightweight, client-side data storage of game content.
*   **Accessibility:** 
    *   **Text-to-Speech (TTS):** Every game mode that displays text on screen must have an option to listen to that text.
    *   **Hover-to-Speak Toggle:** A toggleable "Listen" setting. When active, hovering over images, word options, or sentences will trigger TTS to read the content aloud. For "Complete the Phrase" mode, hovering over the sentence will read it with the correct word filled in.
*   Visually engaging and child-friendly UI.
*   Progressive difficulty levels.
*   Immediate positive reinforcement for correct answers.
*   **Audio Feedback:** The game uses sound effects (`correct.mp3`, `wrong.mp3`, `finish.mp3`) to provide immediate auditory feedback for user actions and game completion, replacing some verbal TTS cues.
*   **Retry Option:** A "Retry" button must be available to allow children to attempt the same question again if they make a mistake.
*   **Randomized Game Flow:** The main screen features a "Start Game" button that launches a randomized sequence of questions from all available modes, ensuring a fresh experience every time.
*   **Seamless Transitions:** The game must transition between the main menu and game questions within the same centered card, avoiding any scrolling or layout shifts.
*   **Victory Screen:** Upon completing all questions, a vibrant "Victory" screen displays the child's total score and provides a button to return to the main menu, replacing standard browser alerts.
