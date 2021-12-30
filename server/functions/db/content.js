const _ = require('lodash');
const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

// 전체 컨텐츠 가져오기
const getAllContent = async (client) => {
  const { rows } = await client.query(
    `
        SELECT *
        FROM content c
        WHERE c.is_deleted = FALSE
    `,
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

// soft 삭제된 컨텐츠 가져오기
const getDeletedContent = async (client) => {
  const { rows } = await client.query(
    `
        SELECT *
        FROM content c
        WHERE c.is_deleted = TRUE
    `,
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

// 컨텐츠 저장
const postContent = async (client, postImg, postTitle, postDescription, url) => {
  const { rows } = await client.query(
    `
        INSERT INTO content
        (image_url, title, description, url)
        VALUES
        ($1, $2, $3, $4)
        RETURNING id, image_url, title, description, url
    `,
    [postImg, postTitle, postDescription, url],
  );
  return convertSnakeToCamel.keysToCamel(rows[0]);
};

// 컨텐츠 soft 삭제
const softDeleteContent = async (client, id) => {
  const { rows } = await client.query(
    `
        UPDATE content
        SET is_deleted = TRUE, updated_at = now()
        WHERE id = $1
        RETURNING id
    `,
    [id],
  );
  return convertSnakeToCamel.keysToCamel(rows[0]);
};

// 컨텐츠 복구
const restoreContent = async (client, id) => {
  const { rows } = await client.query(
    `
        UPDATE content
        SET is_deleted = FALSE, updated_at = now()
        WHERE id = $1
        RETURNING id
      `,
    [id],
  );
  return convertSnakeToCamel.keysToCamel(rows[0]);
};

// 영구 삭제
const hardDeleteContent = async (client, id) => {
  const { rows } = await client.query(
    `
        DELETE 
        FROM content
        WHERE id = $1
        RETURNING id
    `,
    [id],
  );
  return convertSnakeToCamel.keysToCamel(rows[0]);
};

module.exports = { getAllContent, getDeletedContent, postContent, softDeleteContent, restoreContent, hardDeleteContent };
