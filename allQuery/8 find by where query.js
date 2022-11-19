db.collectionName.find({ propertyArea: { $gt: 4000 } });

db.collectionName.aggregate([{ $match: { propertyArea: { $gt: 4000 } } }]);
