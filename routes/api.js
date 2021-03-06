const router = require("express").Router();
const Transaction = require("../models/transaction.js")

router.post("/api/transaction", ({ body }, res) => {
  Transaction.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      console.log(err);
      res.status(404).json(err);
    });
});

router.post("/api/transaction/bulk", ({ body }, res) => {
  Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      console.log(err);
      res.status(404).json(err);
    });
});

router.get("/api/transaction", (req, res) => {
  console.log('xxxxx');
  console.log(Transaction);
  // console.log(req);
  //console.log(res);
  Transaction.find({}).sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      console.log(err);
      res.status(404).json(err);
    });
});

module.exports = router;