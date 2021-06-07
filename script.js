const divBlock = document.querySelector('.menu')
const btn = document.querySelector('.add-toDo')
const inp = document.querySelector('input')

const data = fetch('https://jsonplaceholder.typicode.com/todos')

data.then((res) => {
    const result = res.json()
    result.then((txt) => {
        const update = () => {
            const ol = document.createElement('ol')
            divBlock.append(ol)
            txt.forEach((item, i) => {
                const li = document.createElement('li')
                li.textContent = item.title

                const check = document.createElement('input')
                check.type = 'checkbox'
                if (item.completed === true) {
                    check.checked = true
                }

                const del = document.createElement('button')
                del.textContent = 'X'
                del.style.marginLeft = '10px'
                del.addEventListener('click', () => {
                    txt.splice(i, 1)
                    ol.remove()
                    update();
                })
                check.addEventListener('click', () => {
                    item.completed = !item.completed
                })
                li.style.marginBottom = '15px'
                li.prepend(check)
                li.append(del)
                ol.prepend(li)
            });
            btn.addEventListener('click', () => {
                if (inp.value === '') return
                txt.push({
                    title: inp.value,
                    completed: false,
                    id: txt.length + 1
                })
                inp.value = '';
                ol.remove()
                update()
            })
        }
        update();

    })
})