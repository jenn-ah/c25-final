const bookshelf = require('./bookshelf');

class PostPriority extends bookshelf.Model {
  get tableName() { return "post_priorities"; }
  get hasTimestamps() { return false; }

  post_priority_id() {
    return this.belongsTo('Post', 'post_priority_id');
  }

}

module.exports = bookshelf.model('PostPriority', PostPriority);