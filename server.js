const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const axios = require("axios");

// Serve the public directory
app.use(express.static("public"));

// Serve the src directory
app.use("/src", express.static("src"));

app.listen(process.env.PORT || 3003);

const fs = require("fs");

app.get("/games", (req, res) => {
  const filename = ".env";

  var file_content = fs.readFileSync(filename);
  const content = JSON.parse(file_content);

  axios({
    url: "https://api.igdb.com/v4/games",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": content.client_id,
      Authorization: "Bearer " + content.access_token,
    },
    data:
      "fields name, url, cover.image_id, genres.name, rating; where platforms = (6) & cover != null & rating >= 80 & rating_count >= 500 & first_release_date <= " +
      Date.now() +
      "; sort first_release_date desc; limit 30;",
  })
    .then((response) => {
      var gamesInfo = [];

      for (const iterator of response.data) {
        gamesInfo.push({
          name: iterator.name,
          igdb_url: iterator.url,
          cover_url:
            "https://images.igdb.com/igdb/image/upload/t_cover_big/" +
            iterator.cover.image_id +
            ".jpg",
          genres: iterator.genres,
          rating: Math.floor(iterator.rating),
        });
      }

      res.send(JSON.stringify(gamesInfo));
    })
    .catch((err) => {
      // Generate a new token
      axios({
        url: "https://id.twitch.tv/oauth2/validate",
        method: "GET",
        headers: {
          Authorization: "Bearer " + content.access_token,
        },
      }).catch((err) => {
        axios({
          url: "https://id.twitch.tv/oauth2/token",
          method: "POST",
          params: {
            client_id: content.client_id,
            client_secret: content.client_secret,
            grant_type: content.grant_type,
          },
        }).then((response) => {
          // Replace the token
          content.access_token = response.data.access_token;
          fs.writeFileSync(filename, JSON.stringify(content));
          res.redirect("/games");
        });
      });
    });
});
