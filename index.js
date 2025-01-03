const express = require("express");
const app = express();
const genres = [
  { id: 1, name: "action" },
  { id: 2, name: "mystery" },
  { id: 3, name: "sci-fi" },
];
app.get("/movie/api/genres", (req, res) => {
  let categories = [];
  for (const x in genres) {
    categories.push(genres[x].name);
  }
  res.send(categories);
});

app.get("/movie/api/genres/:id", (req, res) => {
  const index = parseInt(req.params.id);
  const genre = genres.find((x) => x.id === index);
  if (!genre)
    return res.status(404).send("The specified resource could not be found");

  res.send(genre);
});

const port = process.env.port || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
