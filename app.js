const app = require('./config/server')

const porta = 3000
app.listen(porta, () => {
    console.log(`Node sendo executado na porta ${porta}...`)
})