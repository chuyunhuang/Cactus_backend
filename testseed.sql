DROP DATABASE IF EXISTS cactus;
CREATE DATABASE cactus;

\c cactus;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  avatar VARCHAR,  
  created_at TIMESTAMP DEFAULT NOW()

);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  author_id INT NOT NULL
  REFERENCES users(id) 
  ON UPDATE CASCADE 
  ON DELETE CASCADE,
  image_url VARCHAR NOT NULL, 
  caption VARCHAR,
  number_of_comments INT,
  number_of_likes INT,
  created_at TIMESTAMP DEFAULT NOW()
  
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    post_id INT NOT NULL 
    REFERENCES posts(id) 
    ON UPDATE CASCADE
    ON DELETE CASCADE,
    author_id INT NOT NULL
    REFERENCES users(id) 
    ON UPDATE CASCADE
    ON DELETE CASCADE,
    comment_text VARCHAR NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
    
);

CREATE TABLE likes (
    id SERIAL PRIMARY KEY,
    post_id INT NOT NULL
    REFERENCES posts(id) 
    ON UPDATE CASCADE
    ON DELETE CASCADE,
    like_author_id INT NOT NULL
    REFERENCES users (id)
    ON UPDATE CASCADE 
    ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT NOW()

  );

  CREATE UNIQUE INDEX single_like
    ON likes (post_id,like_author_id);


CREATE TABLE followers (
    id SERIAL PRIMARY KEY,
    follower_id INT NOT NULL
    REFERENCES users (id) 
    ON UPDATE CASCADE
    ON DELETE CASCADE,
    following_id INT NOT NULL
    REFERENCES users (id) 
    ON UPDATE CASCADE
    ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT NOW()
   
);

 CREATE UNIQUE INDEX single_follow
    ON followers(follower_id,following_id);


    

INSERT INTO users (username, email, avatar) VALUES 
('Yun625', 'yun@gmail.com', 'prfoile.png'), 
('MieMie', 'mie@gmail.com', 'miepicture.png'),
('QQ', 'q@gmail.com', NULL),
('Michelle', 'michelle@gmail.com', NULL),
('Anne', 'lolo@gmail.com', NULL);

INSERT INTO posts (author_id, image_url, caption, number_of_comments, number_of_likes) VALUES 
(1, 'yuncuteplant.jpg', 'So cute!!!', 2, 15),
(2, 'miebeautifulplant.jpg', 'lovely!!', 5, 25),
(3, 'qqplant.jpg', 'I just bought this today.', 2, 55);

INSERT INTO comments (post_id, author_id, comment_text) VALUES 
(1, 2, 'exmaple comment from Mie'),
(1, 3, 'exmaple comment from Q '),
(2, 1, 'exmaple comment from Yun');

INSERT INTO likes (post_id, like_author_id) VALUES
(1, 3),
(1, 2),
(3, 2);

INSERT INTO followers ( follower_id, following_id) VALUES
(1, 2),
(3, 2);

