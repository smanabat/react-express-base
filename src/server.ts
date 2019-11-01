const express = require('express')
const app = express()
const path = require('path')

app.get('/api', async (req: any, res: { json: (arg0: { text: string; }) => void; }) => res.json({text: 'Hello World!'}) )

app.use(express.static(path.join(__dirname, '../client/build')))
app.get('*', (req: any, res: { sendFile: (arg0: any) => void; }) => {
    res.sendFile(path.join(__dirname + '../client/build/index.html'))
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})