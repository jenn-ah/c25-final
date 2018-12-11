const bookshelf = require('./bookshelf');
require('./Post');

class PostPriority extends bookshelf.Model {
  get tableName() { return "post_priorities"; }
  get hasTimestamps() { return false; }

  getPosts() {
    return this.belongsToMany('Post', 'post_priority_id');
  }

}

module.exports = bookshelf.model('PostPriority', PostPriority);