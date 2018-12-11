const bookshelf = require('./bookshelf');
require('./Customer');
require('./Category');
require('./Vendor');
require('./PostStatus');
require('./PostPriority');


class Post extends bookshelf.Model {
  get tableName() { return "posts"; }
  get hasTimestamps() { return true; }

  customerId() {
    return this.belongsTo('Customer');
  }

  categoryId() {
    return this.belongsTo('Category');
  }

  postStatusId() {
    return this.belongsTo('PostStatus');
  }

  postPriorityId() {
    return this.belongsTo('PostPriority');
  }

  vendorId() {
    return this.belongsTo('Vendor');
  }
}

module.exports = bookshelf.model('Post', Post);