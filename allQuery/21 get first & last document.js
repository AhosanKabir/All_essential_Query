db.collectionName.aggregate([
  {
    $group: {
      _id: 0,
      first: { $first: { name: "$name", roll: "$roll", city: "$city" } },
    },
  },
]);

db.collectionName.aggregate([
  {
    $group: {
      _id: 0,
      last: { $last: { name: "$name", roll: "$roll", city: "$city" } },
    },
  },
]);
