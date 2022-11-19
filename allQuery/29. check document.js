//Check if a field exists :

db.collectionName.find({ name: { $exists: true } })
