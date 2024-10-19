const questions = [
    { 
        question: "Meu habitat é na Mata Atlântica no Rio de Janeiro", 
        options: ["Golfinho", "Mico Leão", "Girafa", "Capivara"], 
        correctAnswer: 1,
        hints: [
            "Somos ativos durante o dia. Gostamos de pular de galho em galho.",
            "Gosto de Uva do mato, mamão, melancia, melão.",
            "Sou pequeno, meu rosto é castanho claro e meus pelos são dourados.",
        ]
    },
    { 
        question: "Conseguem imitar sons de algumas aves e roedores", 
        options: ["Mico Leão", "Lobo-guará", "Lontra", "Gato Maracajá", "Leão"], 
        correctAnswer: 3,
        hints: [
            "É um animal mamífero",
            "Tem a cauda bastante comprida",
            "Animal solitário e de hábitos noturnos",
        ]
    },
    { 
        question: "Eu sou um canídeo com as maiores pernas das Américas.", 
        options: ["Mico Leão", "Lobo-guará", "Lontra", "Gato Maracajá", "Leão"], 
        correctAnswer: 1,
        hints: [
            "Eu não sou agressivo com os humanos, na verdade costumo fugir de vocês.",
            "Eu sou um animal solitário e costumo ficar sozinho. Eu não ando em martilha.",
            "Eu sou um onívoro, que significa, que eu me alimento de carne e vegetais. E também moro no cerrado.",
            "Eu estou ilustrado em uma das notas de dinheiro.",
        ]
    },
    { 
        question: "Eu vivo e estou nas águas que pertencem ao rio amazônico do Brasil, da Venezuela, da Bolívia e em uma parte da Colômbia também!", 
        options: ["Mico Leão", "Boto-Cor-de-Rosa", "Lontra", "Gato Maracajá", "Leão"], 
        correctAnswer: 1,
        hints: [
            "Estou em extinção devido ao conflito pelo uso das águas doces e de pesca, como mineração ilegal e captura das espécies.",
            "Sou um animal carnívoro e adoro os peixes de água doce!",
            "E lá vem mais uma dica sobre mim: sou mamífero!",
            "Com essa vai ficar fácil: Faço parte do folclore brasileiro!"
        ]
    },
    { 
        question: "Sou uma árvore alta e posso atingir até 50 mtros de altura", 
        options: ["Araucaria", "Pau Brasil", "Castanha-do-pará", "Peroba-rosa", "Coqueiro"], 
        correctAnswer: 0,
        hints: [
            "Minhas folhas são verde-escuras e não caem no inverno",
            "A minha semente é comestível",
            "Consigo viver em média de 400 anos e posso chegar aos 700",
            "Minha semente é um prato típico na festa junina"
        ]
    },
    { 
        question: "Me alimento de vários tipos de animais, entre eles, as esponjas, cnidários, moluscos e crustáceos, que são retirados das fendas dos recifes de corais.", 
        options: ["Mico Leão", "Boto-Cor-de-Rosa", "Tartaruga de pente", "Gato Maracajá", "Leão"], 
        correctAnswer: 2,
        hints: [
            "Meu casco é cor marrom-amarelado e é formada por quatro placas laterais, que se dispõem como telhas.",
            "Posso chegar a atingir 114 cm de comprimento de carapaça e o peso é de até a50kg",
            "Vivo em recifes de corais em águas mais rasas, e sou raramente encontrada em grandes profundidades, estou presente principalmente em áreas tropicais, mas, algumas vezes, sou encontrada em águas subtropicais.",
            "A cada mil filhotes nascidos, apenas um atinge a maturidade! Isso ocorre pela dificuldade de sobrevivência em virtude da grande quantidade de predadores, do ciclo de vida longo e, principalmente, da ação humana, que polui o ambiente em que esses animais vivem, além de causar a caça indiscriminada."
        ]
    },
    { 
        question: "Amo comer animais silvestres, como capivaras e veados.", 
        options: ["Mico Leão", "Boto-Cor-de-Rosa", "Tartaruga de pente", "Onça pintada", "Leão"], 
        correctAnswer: 3,
        hints: [
            "Posso ser encontrado na Amazônia, Mata Atlântica, Pantanal e Cerrado.",
            "Posso chegar a  um metro e 90cm, e pesar 135kg.",
            "Sou o maior carnivoro da América do Sul",
            "Tenho pelagem da cor amarelo-dourado, e pintas pelo corpo inteiro"
        ]
    },
    { 
        question: "Sou emcontrada no Oceano do Hemisfério Sul, e no Brasil fico no Rio Grande Do Sul", 
        options: ["Mico Leão", "Boto-Cor-de-Rosa", "Baleia Franca", "Onça pintada", "Leão"], 
        correctAnswer: 3,
        hints: [
            "Minha maior característica é a presença de calosiedade no rosto, que são como manchas brancas.",
            "Sou conhecida pelas minhas belas canções aquáticas.",
            "Minha nadadeira peitoral é curta e larga, e tem o formato de um trapézio.",
            "Sou uma das maiores espécies de baleias, podendo chagar a 18 metros."
        ]
    },
    { 
        question: "Somos encontrados no Bioma Pantanal", 
        options: ["Mico Leão", "Boto-Cor-de-Rosa", "Baleia Franca", "Onça pintada", "Arara Azul"], 
        correctAnswer: 4,
        hints: [
            "Somos caçadas por conta do mercado clandestino",
            "Sou conhecida pela a beleza de minhas pernas",
            "Sou uma ave azul",
            "Sou protaginista do filme Rio"
        ]
    },
    { 
        question: "Eu me alimento preferencialmente de peixes", 
        options: ["Mico Leão", "Boto-Cor-de-Rosa", "Ariranha", "Onça pintada", "Arara Azul"], 
        correctAnswer: 2,
        hints: [
            "Somos um dos maiores mamíferos carnivora",
            "Temos um corpo alongado",
            "Habitamos ambientes de ádua doce e suas margens",
            "Vivemos em grupos familiares de até 15 membros"
        ]
    },
    { 
        question: "É uma planta que ocorre principalmente em terrenos mais secos da Mata Atlântica", 
        options: ["Pau Brasil", "Caesalpinia", "Sibipiruna", "Dracena", "Guapuruvu"], 
        correctAnswer: 0,
        hints: [
            "Suas flores amarelas desabrocham a partir dos últimos dias de setembro",
            "Os frutos, de características leguminosas e pequena, estão maduros entre novembro e janeiro",
            "Sua madeira é muito pesada, dura e muito resistente ao que de fungos e insetos",
            "A sua madeira é considerada a primeira atividade econômica do Brasil"
        ]
    },
    { 
        question: "Eu sou uma ave que vive em florestas tropicais", 
        options: ["Mico Leão", "Boto-Cor-de-Rosa", "Baleia Franca", "Tucano", "Leão"], 
        correctAnswer: 2,
        hints: [
            "Eu me alimento principalmente de frutas, mas posso me alimentar também de insetos e pequenos répteis",
            "Meu bico ajuda a equilibrar e regular a temperatura do meu corpo também",
            "Em volta do meu olho é na maioria das vezes azul",
            "Eu tenho um bico muito leve, colorido e oco"
        ]
    },
    { 
        question: "São considerados insetos de longa vida, podendo viver até onze meses", 
        options: ["Borboleta Azul", "Boto-Cor-de-Rosa", "Baleia Franca", "Tucano", "Leão"], 
        correctAnswer: 0,
        hints: [
            "E uma espécie conhecida por sua coloração azul intensa, que não é comum entre a sua especie",
            "Ela é frequentemente encontrada em areas tropicais e subtropicais, aproveitando o calor e a vegetação exuberante desse ambientes",
            "Alimenta-se de frutas maduras caídas no chão da mata",
            "Voa rapidamente a uma altura mediana a baixa, próxima ao solo"
        ]
    },
    { 
        question: "Eu vivo de 5 a 10 anos na natureza", 
        options: ["Borboleta Azul", "Boto-Cor-de-Rosa", "Baleia Franca", "Surucucu", "Leão"], 
        correctAnswer: 3,
        hints: [
            "Eu tenho barriga vermelha",
            "Eu tenho de 2 a 5cm",
            "Eu sou um anfíbio",
            "Eu me alimento de invertebrado como aranhas e insetos"
        ]
    },
    { 
        question: "Vivo em florestas tropicais densas", 
        options: ["Sapinho da barriga vermelha", "Boto-Cor-de-Rosa", "Baleia Franca", "Surucucu", "Leão"], 
        correctAnswer: 0,
        hints: [
            "Eu vivo de 15 a 30 anos",
            "Eu me pareço com a cascavel",
            "Sou peçonheta",
            "Eu posso alcançar 3 metros de comprimento"
        ]
    },
];

let currentQuestionIndex = 0;
let score = 0;
let attemptCount = 0;

document.addEventListener('DOMContentLoaded', function () {
    showQuestion();
});

function showQuestion() {
    let question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    let optionsElement = document.getElementById('options');
    optionsElement.innerHTML = '';
    question.options.forEach((option, index) => {
        let li = document.createElement('li');
        li.textContent = option;
        li.onclick = () => chooseOption(index);
        optionsElement.appendChild(li);
    });
    document.getElementById('hint-text').innerHTML = ''; // Reset hints
    document.getElementById('hint').style.display = 'none'; // Hide hints initially
    attemptCount = 0; // Reset attempt count for the new question
}

function chooseOption(index) {
    let question = questions[currentQuestionIndex];
    let resultElement = document.getElementById('result');
    let answerResultElement = document.getElementById('answer-result');
    let optionsElement = document.getElementById('options');
    
    if (index === question.correctAnswer) {
        score += 2;
        answerResultElement.textContent = "Correto!";
        answerResultElement.style.color = "green";
        optionsElement.childNodes.forEach((child, i) => {
            if (i === index) {
                child.style.backgroundColor = "green"; // Cor correta
            }
        });
        setTimeout(showNextQuestion, 2000); // Chama a próxima questão após 2 segundos
    } else {
        attemptCount++;
        answerResultElement.textContent = "Incorreto! Tente novamente.";
        answerResultElement.style.color = "red";
        optionsElement.childNodes[index].style.backgroundColor = "red"; // Cor incorreta
        if (attemptCount <= question.hints.length) {
            let hintTextElement = document.getElementById('hint-text');
            hintTextElement.innerHTML += `<p>${question.hints[attemptCount - 1]}</p>`; // Adiciona dica adicional
            document.getElementById('hint').style.display = 'block'; // Mostrar as dicas
        }
    }
    
    document.getElementById('score-value').textContent = score; // Atualiza a pontuação exibida
    resultElement.style.display = 'block'; // Exibe o resultado da resposta
}

function showNextQuestion() {
    currentQuestionIndex++;
    let resultElement = document.getElementById('result');
    let scoreElement = document.getElementById('score');
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        resultElement.style.display = 'none'; // Oculta o resultado da resposta anterior
    } else {
        scoreElement.textContent = `Quiz finalizado, Pontuação final: ${score} pontos`; // Exibe o resultado final
        resultElement.style.display = 'none'; // Oculta o resultado da última resposta
        scoreElement.style.display = 'block'; // Exibe a pontuação final
    }
}
