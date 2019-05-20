const db = require("./dbConnect");

const postService = {};

postService.create = body => {
  const { author_id, image_url, caption } = body;
  return db.none(
    "INSERT INTO posts (author_id, image_url, caption) VALUES ( ${author_id}, ${image_url}, ${caption})",
    { author_id, image_url, caption }
  );
};

postService.readNewsfeed = () => {
  return db.any("SELECT * FROM users INNER JOIN posts ON useruid = author_id");
};

postService.readbyuid = useruid => {
  return db.any(
    "SELECT image_url, caption FROM posts JOIN users ON useruid = author_id WHERE useruid = ${useruid}",
    { useruid }
  );
};

postService.update = (id, image_url, caption) => {
  return db.none(
    "UPDATE posts SET image_url = ${image_url}, caption = ${caption} WHERE id = ${id}",
    { id, image_url, caption }
  );
};

postService.delete = id => {
  return db.none("DELETE FROM posts WHERE id = ${id}", { id });
};

module.exports = postService;
