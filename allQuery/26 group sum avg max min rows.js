db.collectionName.aggregate([
  {
    $group: {
      _id: 0,
      sum: { $sum: "$salary" },
      avg: { $avg: "$salary" },
      max: { $max: "$salary" },
      min: { $min: "$salary" },
      rows: { $sum: 1 },
    },
  },
]);
