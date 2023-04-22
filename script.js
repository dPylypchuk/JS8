let username = prompt ("Напишіть своє ім'я")
let nameEl = document.querySelector(`#name`)
nameEl.innerHTML = `Ласкаво просимо, ${username}`
let noteStore = [
    {
        title: "order",
        text1: "product: phone",
        rext: "praice: 200$"
    },
    {
        title: "order",
        text1: "product: Laptop",
        rext: "praice: 400$"
    },
    {
        title: "order",
        text1: "product: TV",
        rext: "praice: 800$"
    },

]

let notesList = document.querySelector(`#notesList`)

noteStore.forEach((note) => {
    notesList.innerHTML +=
    <div class="note">
        <h2>${note.title}</h2>
        <p>${note.text1}</p>
        <p>${note.text}</p>
    </div>
})


let inputText = document.querySelector(`inputText`)
let inputTitle = document.querySelector(`inputTitle`)
let btnCreate = document.querySelector(`btnCreate`)
const clackToCrate = () => {
    notesList.innerHTML +=
    <div class="note">
        <h2>${inputTitle.value}</h2>
        <p>${inputText1.value}</p>
        <p>${inputText.value}</p>
    </div>

    inputTitle.value = ""
    inputText.value = ""
}
btnCreate.onclick = clackToCrate