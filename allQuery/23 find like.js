db.collectionName.find({ name: /Ra/ });

db.collectionName.aggregate([{ $match: { name: /Ra/ } }]);
