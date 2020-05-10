const express = require("express");
const app = express();

app.use(express.static(`${__dirname}/build`));

app.get("/descarga", (req, res) => {
    const fileName = "IECTMX_RANKING_V1.0_MAYO9.xlsx";
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