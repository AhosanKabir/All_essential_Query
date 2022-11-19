db.collectionName.find({ name: { $regex: /Ra/ } });

db.collectionName.aggregate([{ $match: { name: { $regex: /Ra/ } } }]);
