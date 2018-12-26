const bookshelf = require('./bookshelf');

class PostStatus extends bookshelf.Model {
  get tableName() { return "post_statuses"; }
  get hasTimestamps() { return false; }

  post_id() {
    return this.hasMany('Post', 'id')
  }
}

module.exports = bookshelf.model('PostStatus', PostStatus);