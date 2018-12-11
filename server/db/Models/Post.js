const bookshelf = require('./bookshelf');


class Post extends bookshelf.Model {
  get tableName() { return "posts"; }
  get hasTimestamps() { return true; }

  customerId() {
    return this.belongsTo('Customer', 'id');
  }

  categoryId() {
    return this.hasOne('Category', 'category_id');
  }

  postStatusId() {
    return this.hasOne('PostStatus', 'post_status_id');
  }

  postPriorityId() {
    return this.hasOne('PostPriority', 'post_priority_id');
  }
}

module.exports = bookshelf.model('Post', Post);