db.collectionName.aggregate([
  { $match: { name: { $in: ["Ahosan", "kabir"] } } },
]);

db.collectionName.find({ name: { $in: ["Ahosan", "Kabir"] } });
