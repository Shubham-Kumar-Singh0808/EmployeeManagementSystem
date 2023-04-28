const createTodo = async (todo) => {
    const Shubham = {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }
    const s = await fetch('https://jsonplaceholder.typicode.com/posts', Shubham)
      const response = await s.json()  
      return response
}
const getTodo = async (id) => {
    const h = await fetch('https://jsonplaceholder.typicode.com/posts' + id)
    const response = await h.json()  
    return response
}
const mainFunc = async () => {
    let todo = {
        title : 'Shubham',
        body: 'Singh',
        userId: 8, 
    }
    let todor = await createTodo(todo)
    console.log(todor)
    console.log(await getTodo(8))
}
mainFunc() 
