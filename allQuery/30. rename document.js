//Rename a field
db.collectionName.updateMany({}, { $rename: { age: "years" } })