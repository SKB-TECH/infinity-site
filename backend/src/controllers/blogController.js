import prisma from "../utils/prisma.js";
import { ApiError } from "../utils/errors.js";

// GET all blogs
export const getAllBlogs = async (req, res) => {
  try {
    const { published, skip = 0, take = 10 } = req.query;

    const where =
      published !== undefined ? { published: published === "true" } : {};

    const blogs = await prisma.blog.findMany({
      where,
      skip: parseInt(skip),
      take: parseInt(take),
      orderBy: { createdAt: "desc" },
    });

    const total = await prisma.blog.count({ where });

    res.json({
      blogs,
      total,
      page: Math.ceil(parseInt(skip) / parseInt(take)) + 1,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET blog by ID
export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await prisma.blog.findUnique({
      where: { id },
      include: { comments: { where: { approved: true } } },
    });

    if (!blog) {
      throw new ApiError(404, "Blog not found");
    }

    res.json(blog);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

// CREATE blog
export const createBlog = async (req, res) => {
  try {
    const {
      title,
      content,
      excerpt,
      featuredImage,
      author,
      category,
      tags,
      published,
    } = req.body;

    if (!title || !content || !author) {
      throw new ApiError(400, "Title, content, and author are required");
    }

    const slug = title.toLowerCase().replace(/\s+/g, "-");

    const blog = await prisma.blog.create({
      data: {
        title,
        slug,
        content,
        excerpt,
        featuredImage,
        author,
        category,
        tags: tags || [],
        published: published || false,
      },
    });

    res.status(201).json(blog);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

// UPDATE blog
export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      content,
      excerpt,
      featuredImage,
      author,
      category,
      tags,
      published,
    } = req.body;

    const blog = await prisma.blog.update({
      where: { id },
      data: {
        title,
        slug: title ? title.toLowerCase().replace(/\s+/g, "-") : undefined,
        content,
        excerpt,
        featuredImage,
        author,
        category,
        tags,
        published,
      },
    });

    res.json(blog);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

// DELETE blog
export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.blog.delete({ where: { id } });

    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

// Increment blog views
export const incrementBlogViews = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await prisma.blog.update({
      where: { id },
      data: { views: { increment: 1 } },
    });

    res.json({ views: blog.views });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
