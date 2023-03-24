const express = require("express");
const pool = require("../config");
const router = express.Router();

// Get comment
router.get("/:blogId/comments", async function (req, res, next) {
  try {
    const [rows, fields] = await pool.query(
      `SELECT * FROM comments WHERE blog_id=?`,
      [req.params.blogId]
    );
  } catch (error) {
    return next(error);
  }
});

// Create new comment
router.post("/:blogId/comments", async function (req, res, next) {
  try {
    const { comment, like, comment_by_id } = req.body;
    const [rows, fields] = await pool.query(
      `
        INSERT INTO comments (blog_id, comment, comments.like, comment_by_id) 
        VALUES (?, ?, ?, ?)`,
      [req.params.blogId, comment, like, comment_by_id]
    );
    return res.json({
      message: `A new comment is added (ID: ${rows.insertId})`,
    });
  } catch (error) {
    return next(error);
  }
});

// Update comment
router.put("/comments/:commentId", async function (req, res, next) {
  try {
    const { comment, like, comment_date, comment_by_id, blog_id } = req.body;
    const [rows, fields] = await pool.query(
      `UPDATE comments SET 
            comment=?, 
            comments.like=?, 
            comment_date=?, 
            comment_by_id=?, 
            blog_id=? 
            WHERE id=?`,
      [
        comment,
        like,
        comment_date,
        comment_by_id,
        blog_id,
        req.params.commentId,
      ]
    );
    const [rows2, fields2] = await pool.query(
      `SELECT comment, comments.like, comment_date, comment_by_id, blog_id FROM comments WHERE id=?`,
      [req.params.commentId]
    );
    return res.json({
      message: `Comment ${req.params.commentId} is updated.`,
      comment: rows2[0],
    });
  } catch (error) {
    return next(error);
  }
});

// Delete comment
router.delete("/comments/:commentId", async function (req, res, next) {
  try {
    const [rows, fields] = await pool.query(`DELETE FROM comments WHERE id=?`, [
      req.params.commentId,
    ]);
    return res.json({
      message: `Comment ${req.params.commentId} is deleted.`,
    });
  } catch (error) {
    return next(error);
  }
});

// Delete comment
router.put("/comments/addlike/:commentId", async function (req, res, next) {
  try {
    const [rows, fields] = await pool.query(
      `SELECT * FROM comments WHERE id=?`,
      [req.params.commentId]
    );
    let likeNum = rows[0].like + 1;
    const [rows2, fields2] = await pool.query(
      `UPDATE comments SET comments.like=? WHERE id=?`,
      [likeNum, req.params.commentId]
    );
    const [rows3, fields3] = await pool.query(
      `SELECT * FROM comments WHERE id=?`,
      [req.params.commentId]
    );
    const { blog_id, id, like } = rows3[0];
    return res.json({
      blogId: blog_id,
      commentId: id,
      like: like,
    });
  } catch (error) {
    return next(error);
  }
});

exports.router = router;
