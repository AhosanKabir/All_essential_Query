//Get all documents
//Get all users
db.products.find({});

//find(<filterObject>)
db.users.find({ name: "Someone name" });
db.users.find({ "address.street": "Address gone here" });

db.products.aggregate([]);
