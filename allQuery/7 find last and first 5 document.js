db.collectionName.find({}).sort({ _id: -1 }).limit(5);
db.collectionName.find({}).sort({ _id: 1 }).limit(5);

db.collectionName.aggregate([{ $sort: { _id: -1 } }, { $limit: 5 }]);
db.collectionName.aggregate([{ $sort: { _id: 1 } }, { $limit: 5 }]);
