const express = require("express");
const paises = require("./data/dataPaises.json");
const app = express();

app.use("/paises", (req, res) => {
    res.status(200).json(
        paises.filter(p => p.subregion === "South America")
        .map((p) => {
            return {
                nombre: p.name.common, poblacion: p.population
            }
        } )
    )
})
 
app.listen(3001, ()=> {
    console.log('La app esta activa...')
})  