db.collectionName.find({}).sort({ quantity: -1 }); // Descending
db.collectionName.find({}).sort({ quantity: 1 }); // Asending

db.collectionName.aggregate([{ $sort: { quantity: 1 } }]); //Asending
db.collectionName.aggregate([{ $sort: { quantity: -1 } }]); // Descending
