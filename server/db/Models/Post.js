const bookshelf = require('./bookshelf');


class Post extends bookshelf.Model {
  get tableName() { return "posts"; }
  get hasTimestamps() { return true; }

  customerId() {
    return this.belongsTo('Customer', 'customer_id', 'id')
  }

  categoryId() {
    return this.hasOne('Category', 'id');
  }

  postStatusId() {
    return this.belongsTo('PostStatus', 'post_status-id', 'id');
  }

  postPriorityId() {
    return this.hasOne('PostPriority', 'id');
  }

  vendorId() {
    return this.hasOne('Vendor', 'id')
  }
}

module.exports = bookshelf.model('Post', Post);