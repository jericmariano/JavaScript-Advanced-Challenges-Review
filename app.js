async function firstSixIncomplete(todos) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
  const result = (await promise.json())

  const incompleteTasks = result.filter(element => !element.completed).slice(0, todos)

  console.log(incompleteTasks)
}

firstSixIncomplete(6);
