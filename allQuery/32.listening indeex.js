//Listing All Indexes:

db.collectionname.getIndexes();
db.collectionname.getIndexKeys();

// hide , un-hide :
db.collectionname.hideIndex("indexname");
db.collectionname.unhideIndex("indexname");
db.collectionname.getIndexes();
db.collectionname.getIndexKeys();
