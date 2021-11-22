import express from "express";

const app = express();
app.use(express.static('./dist/prueba-frontend'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/prueba-frontend/'}),
);

const port = process.env.PORT || 8080;
app.listen(port || 8080, () => {
  return console.log(`server is listening on ${port}`);
});
