db.collectionName
  .find({})
  .skip(0 * 3)
  .limit(3);

db.collectionName.aggregate([{ $skip: 0 }, { $limit: 3 }]);
