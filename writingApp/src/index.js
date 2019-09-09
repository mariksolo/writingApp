import express from 'express';
import path from 'path';


const app = express()
const port = 8080

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../../writingAppFrontend/dist/index.html')));
app.use(express.static(path.join(__dirname, ('../../writingAppFrontend/dist'))))

app.listen(port, () => console.log(`App listening on port ${port}!`))
