db.collectionName.aggregate([{ $group: { _id: "$salary" } }]);
