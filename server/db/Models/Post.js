const bookshelf = require('./bookshelf');


class Post extends bookshelf.Model {
  get tableName() { return "posts"; }
  get hasTimestamps() { return true; }

  customerId() {
    return this.belongsTo('Customer', 'customer_id', 'id')
  }

  categoryId() {
    return this.belongsTo('Category', 'category_id', 'id');
  }

  postStatusId() {
    return this.belongsTo('PostStatus', 'post_status-id', 'id');
  }

  postPriorityId() {
    return this.belongsTo('PostPriority', 'post_priority_id', 'id');
  }

  vendorId() {
    return this.belongsTo('Vendor', 'vendor_id', 'id')
  }
}

module.exports = bookshelf.model('Post', Post);