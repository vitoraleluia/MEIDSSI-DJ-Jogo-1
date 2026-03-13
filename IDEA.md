# Ideia do Jogo: Ajudante de Alfabetização

Um jogo educativo desenhado para ajudar crianças nas fases iniciais de aprendizagem da leitura e escrita. O jogo foca-se na associação visual, construção de vocabulário e sintaxe através do brincar interativo.

## Objetivo Principal
Proporcionar um ambiente divertido e sem pressão para as crianças praticarem competências de leitura e escrita usando imagens familiares e exercícios estruturados de construção de palavras.

## Modos de Jogo

### 1. Correspondência Imagem-Palavra
*   **Jogabilidade:** É exibida uma imagem (ex: uma maçã, um cão, um carro).
*   **Objetivo:** A criança deve identificar a palavra correta que corresponde à imagem.
*   **Opções:** Botões de escolha múltipla com etiquetas de texto.

### 2. Completar a Frase
*   **Jogabilidade:** É mostrada uma frase com uma palavra em falta (redigida).
*   **Objetivo:** A criança deve selecionar a palavra correta para completar a frase de um conjunto de 3 opções.
*   **Restrição:** Apenas uma opção é correta; as outras podem ser foneticamente semelhantes ou contextualmente incorretas.

### 3. Construtor de Sílabas
*   **Jogabilidade:** Uma palavra é apresentada como um conjunto de sílabas baralhadas.
*   **Objetivo:** A criança deve clicar nas sílabas na sequência correta para formar a palavra-alvo.
*   **Ajuda Visual:** A imagem da palavra-alvo pode ser mostrada como uma pista.

### 4. Ajudante de Escrita com Teclado
*   **Jogabilidade:** Uma imagem é mostrada e um teclado virtual no ecrã é apresentado.
*   **Objetivo:** A criança deve escrever o nome completo do objeto representado.
*   **Ajuda Visual:** Para ajudar o utilizador, as letras que pertencem à palavra-alvo são destacadas com uma cor de fundo distinta no teclado virtual.

## Gestão de Conteúdo
*   **Contribuição:** Os utilizadores podem contribuir com novos conteúdos adicionando perguntas, respostas e imagens (via URLs ou Base64) para qualquer um dos modos de jogo. Os dados são guardados localmente no navegador.

## Objetivos Técnicos
*   **Frontend:** Construído usando tecnologias web simples e padrão: HTML, CSS e JavaScript puro.
*   **Armazenamento:** `localStorage` para armazenamento leve de dados do lado do cliente.
*   **Acessibilidade:** 
    *   **Sintetizador de Voz (TTS):** Todos os modos de jogo que exibem texto no ecrã devem ter a opção de ouvir esse texto.
    *   **Alternador de Passar-para-Ouvir:** Uma definição de "Ouvir" que pode ser ligada/desligada. Quando ativa, passar o rato sobre imagens, opções de palavras ou frases ativará o TTS para ler o conteúdo em voz alta. No modo "Completar a Frase", passar o rato sobre a frase lerá a mesma com a palavra correta preenchida.
*   UI visualmente apelativa e amigável para crianças.
*   Níveis de dificuldade progressivos.
*   Reforço positivo imediato para respostas corretas.
*   **Feedback Sonoro:** O jogo usa efeitos sonoros (`correct.mp3`, `wrong.mp3`, `finish.mp3`) para fornecer feedback auditivo imediato para as ações do utilizador e conclusão do jogo.
*   **Opção de Tentar Novamente:** Um botão "Tentar Novamente" deve estar disponível para permitir que as crianças tentem a mesma pergunta outra vez se cometerem um erro.
*   **Fluxo de Jogo Aleatório:** O ecrã principal apresenta um botão "Iniciar Jogo" que lança uma sequência aleatória de perguntas de todos os modos disponíveis, garantindo uma experiência nova de cada vez.
*   **Transições Fluidas:** O jogo deve transitar entre o menu principal e as perguntas dentro do mesmo cartão centrado, evitando qualquer deslocamento (scroll) ou mudanças de layout.
*   **Ecrã de Vitória:** Ao completar todas as perguntas, um ecrã vibrante de "Vitória" exibe a pontuação total da criança e fornece um botão para voltar ao menu principal.
