// Versão dos dados para forçar atualização se necessário
const DATA_VERSION = "1.3";

// Dados iniciais em Português (Portugal)
const initialData = [
    { mode: 'image-match', image: 'https://cdn-icons-png.flaticon.com/512/415/415733.png', text: 'Maçã', options: ['Maçã', 'Pêra', 'Uva'], correct_answer: 'Maçã' },
    { mode: 'complete-phrase', image: null, text: 'O ___ gosta de comer peixe.', options: ['gato', 'rato', 'cão'], correct_answer: 'gato' },
    { mode: 'syllable-builder', image: 'https://cdn-icons-png.flaticon.com/512/2909/2909761.png', text: 'Banana', syllables: ['Ba', 'na', 'na'], correct_answer: 'Banana' },
    { mode: 'keyboard-typing', image: 'https://cdn-icons-png.flaticon.com/512/744/744465.png', text: 'Carro', correct_answer: 'Carro' },
    { mode: 'image-match', image: 'https://cdn-icons-png.flaticon.com/512/3069/3069172.png', text: 'Koala', options: ['Koala', 'Panda', 'Urso'], correct_answer: 'Koala' }
];
