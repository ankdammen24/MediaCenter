const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Spara API:erna i en array (du kan också använda en databas för beständighet)
let apiList = [
  { name: "Sveriges Radio", url: "https://api.sr.se/api/v2/news?format=json" },
];

// Hämta nyheter från dynamiska API-anrop
app.get("/api/news", async (req, res) => {
  try {
    let allNews = [];

    for (const api of apiList) {
      const response = await axios.get(api.url);
      allNews.push({ source: api.name, articles: response.data });
    }

    res.json(allNews);
  } catch (error) {
    res.status(500).send("Något gick fel när nyheterna hämtades");
  }
});

// Lägg till ett nytt API
app.post("/api/add", (req, res) => {
  const { name, url } = req.body;
  if (name && url) {
    apiList.push({ name, url });
    res.send("API tillagt!");
  } else {
    res.status(400).send("Namn och URL krävs");
  }
});

// Ta bort ett API
app.delete("/api/remove", (req, res) => {
  const { name } = req.body;
  apiList = apiList.filter((api) => api.name !== name);
  res.send("API borttaget!");
});

app.listen(port, () => {
  console.log(`Servern kör på http://localhost:${port}`);
});
