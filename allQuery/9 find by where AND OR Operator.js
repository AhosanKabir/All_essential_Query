db.collectionName.find({
  $and: [{ money: { $gt: 4000 } }, { age: { $gt: 125 } }],
});

db.collectionName.find({
  $or: [{ money: { $gt: 4000 } }, { age: { $gt: 125 } }],
});

db.collectionName.aggregate([
  {
    $match: {
      $and: [{ money: { $gt: 4000 } }, { age: { $gt: 125 } }],
    },
  },
]);

db.collectionName.aggregate([
  {
    $match: {
      $or: [{ money: { $gt: 4000 } }, { age: { $gt: 125 } }],
    },
  },
]);
