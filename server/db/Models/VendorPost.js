const bookshelf = require('./bookshelf');

class VendorPost extends bookshelf.Model {
  get tableName() { return "vendorPosts"; }
  get hasTimestamps() { return true; }

  vendorId() {
    return this.belongsTo('Vendor', 'vendor_id', 'id');
  }

  postId() {
    return this.hasOne('Post', 'id');
  }

}

module.exports = bookshelf.model('VendorPost', VendorPost);