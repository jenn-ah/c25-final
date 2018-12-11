const bookshelf = require('./bookshelf');

class PostPriority extends bookshelf.Model {
  get tableName() { return "post_priorities"; }
  get hasTimestamps() { return false; }
}

module.exports = bookshelf.model('PostPriority', PostPriority);