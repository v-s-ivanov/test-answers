let answers = []
let stringArrays = [["Контактуване с извънземни...", "Превземане на Русия... (неуспешно)",
    "Глория е на телефона..."], ["Пътуване назад във времето...", "Вечеря с Хитлер и Сталин",
    "Възстановяване на германските колонии..."], ["Провеждане на мирен китайски спор (1 млрд. загинали)...",
    "Превземане на Гърция без помощта на Хитлер... (неуспешно)", "Колонизиране на Индия..."]]
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function onSubmit(){
    for(let i = 1; i <= 4; i++){
        let answer = document.getElementById("answer" + i).value
        if(answer != ""){
            answers[i - 1] = answer
        }
    }
    let stringSequence = getRandomInt(stringArrays.length)
    let randomQuote = stringArrays[stringSequence][getRandomInt(stringArrays[stringSequence].length)]
    let correctAnswer = answers[getRandomInt(answers.length)]
    document.getElementById("answerField").innerHTML = "Верният отговор е: " + correctAnswer + "<br>" + randomQuote
}