import express from "express"

const app = express()

app.get("/ads", (req, res) => {
  return res.json([
    { id: 1, name: "Anúncio 01" },
    { id: 2, name: "Anúncio 02" },
    { id: 3, name: "Anúncio 03" },
    { id: 4, name: "Anúncio 04" },
    { id: 5, name: "Anúncio 05" }
  ])
})

app.listen(3333)