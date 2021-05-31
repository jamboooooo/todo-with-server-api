const ul = document.querySelector('.menu')
const btn = document.querySelector('.add-toDo')
const inp = document.querySelector('input')

const data = fetch('https://jsonplaceholder.typicode.com/todos')

data.then((res) => {
    const result = res.json()
    result.then((txt) => {
        const update = () => {
            txt.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.title
                ul.prepend(li)
            });
        }
        update();
        btn.addEventListener('click', () => {
            if (inp.value === '') return
            txt.push({
                title: inp.value,
                completed: false,
                id: txt.length + 1
            })
            inp.value = ''
            update()
        })
    })
})