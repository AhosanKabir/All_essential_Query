db.collectionName.aggregate([{ $group: { _id: 0, max: { $max: "$salary" } } }]);
