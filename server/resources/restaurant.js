const { ManipulateDatabase } = require("../utils/db");

const restaurants = new ManipulateDatabase("restaurants");

exports.getRestaurants = async (req, res) => {
  try {
    const arr = restaurants.getArray();
    if (req.query.query) {
      // histórico de pedidos
      res.status(200).send(JSON.stringify(arr));
    } else {
      const rand = Math.floor(Math.random() * (arr.length - 3)) % arr.length;
      res
        .status(200)
        .send(JSON.stringify(arr.slice(rand, (rand + 3) % arr.length)));
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.putRestaurants = async (req, res) => {
  try {
    const changes = req.body.changes;
    let arr = restaurants.getArray();
    arr[changes.index].rates.push({
      user_id: 0,
      stars: changes.rate.stars,
      feedback_text: changes.rate.feedback_text,
    });

    restaurants.write({ restaurants: arr });
    arr = restaurants.getArray();
    res.status(200).send(JSON.stringify(arr));
  } catch (err) {
    res.status(500).send(err);
  }
};
