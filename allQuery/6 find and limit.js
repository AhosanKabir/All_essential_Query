db.collectionName.aggregate([{ $limit: 3 }]);
db.collectionName.find({}).limit(2);
