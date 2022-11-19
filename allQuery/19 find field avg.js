db.collectionName.aggregate([{ $group: { _id: 0, avg: { $avg: "$salary" } } }]);
