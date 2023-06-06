// Import các models liên quan đến trang admin
const Post = require("../models/post");

const adminController = {
  getAllPosts: async (req, res) => {
    try {
      // Lấy tất cả bài viết từ cơ sở dữ liệu
      const posts = await Post.find();

      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createPost: async (req, res) => {
    try {
      // Tạo bài viết mới dựa trên dữ liệu được gửi lên từ client
      const { title, content } = req.body;
      const post = await Post.create({ title, content });

      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updatePost: async (req, res) => {
    try {
      // Cập nhật thông tin bài viết dựa trên ID được truyền vào
      const { id } = req.params;
      const { title, content } = req.body;
      const post = await Post.findByIdAndUpdate(id, { title, content });

      res.json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deletePost: async (req, res) => {
    try {
      // Xóa bài viết dựa trên ID được truyền vào
      const { id } = req.params;
      await Post.findByIdAndDelete(id);

      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Các phương thức khác cho quản lý người dùng, cấu hình, v.v...
};

module.exports = adminController;
