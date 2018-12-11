const bookshelf = require('./bookshelf');
require('./Post');

class PostStatus extends bookshelf.Model {
  get tableName() { return "post_statuses"; }
  get hasTimestamps() { return false; }
}

module.exports = bookshelf.model('PostStatus', PostStatus);