const answerContainer = document.querySelector(".answer-container1")
const answerContainer2 = document.querySelector(".answer-container2")
const answerContainer3 = document.querySelector(".answer-container3")
const answerContainer4 = document.querySelector(".answer-container4")
const questionContainer = document.querySelector(".q-container1")
const questionContainer2 = document.querySelector(".q-container2")
const questionContainer3 = document.querySelector(".q-container3")
const questionContainer4 = document.querySelector(".q-container4")
const plusImg = document.querySelector(".svg-1")
const plusImg2 = document.querySelector(".svg-2")
const plusImg3 = document.querySelector(".svg-3")
const plusImg4 = document.querySelector(".svg-4")
const minus = document.querySelector(".minus-1")
const minus2 = document.querySelector(".minus-2")
const minus3 = document.querySelector(".minus-3")
const minus4 = document.querySelector(".minus-4")

answerContainer.classList.add("hide")
answerContainer2.classList.add("hide")
answerContainer3.classList.add("hide")
answerContainer4.classList.add("hide")


function displayQuestion(){
    questionContainer.addEventListener("click", () => {
        answerContainer.classList.toggle("hide")
        plusImg.classList.toggle("hide")
        minus.classList.toggle("hide")
        questionContainer.classList.toggle("color")
    })

    questionContainer2.addEventListener("click", () => {
        answerContainer2.classList.toggle("hide")
        plusImg2.classList.toggle("hide")
        minus2.classList.toggle("hide")
        questionContainer2.classList.toggle("color")
    })

    questionContainer3.addEventListener("click", () => {
        answerContainer3.classList.toggle("hide")
        plusImg3.classList.toggle("hide")
        minus3.classList.toggle("hide")
        questionContainer3.classList.toggle("color")
    })

    questionContainer4.addEventListener("click", () => {
        answerContainer4.classList.toggle("hide")
        plusImg4.classList.toggle("hide")
        minus4.classList.toggle("hide")
        questionContainer4.classList.toggle("color")
    })
}

displayQuestion()