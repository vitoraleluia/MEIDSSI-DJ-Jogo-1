# Literacy Helper - Educational Game

An interactive, web-based educational game designed to help children learn to read and write through visual association and word-building exercises. This version is entirely client-side, using `localStorage` for data persistence.

## Features

### 1. Game Modes
*   **Image-Word Matching:** Select the word that matches the image.
*   **Complete the Phrase:** Fill in the blank in a sentence with the correct word.
*   **Syllable Builder:** Assemble a word by clicking on its scrambled syllables.
*   **Keyboard Typing Helper:** Type the full name of an object using an on-screen keyboard with highlighted target letters.

### 2. Accessibility
*   **Text-to-Speech (TTS):** Every game mode includes a "Listen" button to read instructions and words aloud, aiding children in phonetic learning.

### 3. Content Management
*   **Add Content:** A simple interface (`admin.html`) to add new questions and images (via URLs or Base64 data) for any game mode.

## Technology Stack
*   **Frontend:** HTML5, CSS3 (Vanilla), JavaScript (Vanilla).
*   **Storage:** Browser `localStorage`.

## Getting Started

### Installation
No installation or server is required. Simply clone the repository and open `index.html` in any modern web browser.

1.  Clone the repository:
    ```bash
    git clone https://github.com/vitoraleluia/MEIDSSI-DJ-Jogo-1.git
    cd MEIDSSI-DJ-Jogo-1
    ```
2.  Open `index.html` in your browser.

## Development
The project follows a simple structure:
*   `index.html`: The main game interface.
*   `script.js`: Core game logic and data management.
*   `admin.html`: Content creation interface.
*   `style.css`: Child-friendly styling.
