db.collectionName.aggregate([{ $group: { _id: 0, sum: { $sum: "$salary" } } }]);
