db.collectionName.find({}, { name: 1, roll: 1, class: 1, _id: 0 });

db.collectionName.aggregate([
  { $project: { name: 1, roll: 1, class: 1, _id: 0 } },
]);
