db.collectionName.aggregate([
  {
    $group: { _id: { name: "$name", roll: "$roll" }, sum: { $sum: "$salary" } },
  },
]);
