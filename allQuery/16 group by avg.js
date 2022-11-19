db.collectionName.aggregate([
  { $group: { _id: { name: "$name" }, avg: { $avg: "$salary" } } },
]);
