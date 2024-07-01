const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Você prefere A ou B? ", (answer) => {
  if (answer === "A") {
    console.log(`Sua resposta foi: ${answer}`)
  } else if (answer === "B") {
    console.log(`Sua resposta foi: ${answer}`)
  }
})