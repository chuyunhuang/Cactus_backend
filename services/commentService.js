const db = require("./dbConnect");

const commentService = {};

commentService.create = (post_id, author_id, comment_text) => {
  return db.none(
    "INSERT INTO comments ( post_id, author_id, comment_text) VALUES (${post_id}, ${author_id}, ${comment_text})",
    { post_id, author_id, comment_text }
  );
};

commentService.read = post_id => {
  return db.any(
    `SELECT * 
	FROM comments JOIN users 
		ON comments.author_id = users.useruid 
			WHERE post_id = $[post_id]`,
    { post_id }
  );
};

commentService.update = (id, comment_text) => {
  return db.none(
    "UPDATE comments SET comment_text = ${comment_text} WHERE id = ${id}",
    { id, comment_text }
  );
};

commentService.delete = id => {
  return db.none("DELETE FROM comments WHERE id = ${id}", { id });
};

module.exports = commentService;
