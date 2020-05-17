const express = require("express");
const app = express();

app.use(express.static(`${__dirname}/build`));

app.get("/descarga/:revision", (req, res) => {
    const { revision } = req.params;
    if(!revision || isNaN(revision)) return res.sendStatus(400);
    const fileName = `IECTMX_RANKING_V${revision}.xlsx`;
    res.download(`${__dirname}/downloads/${fileName}`, fileName);
});

app.get("/metodologia", (req, res) => {
    const fileName = "MetodologíaIECT.docx";
    res.download(`${__dirname}/downloads/${fileName}`, fileName);
});

app.get("/*", (req, res) => {
    res.sendFile(`${__dirname}/build/index.html`);
});

app.listen(3000, () => {
    console.log("running");
});