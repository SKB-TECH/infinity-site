import prisma from "../utils/prisma.js";
import { ApiError } from "../utils/errors.js";

// FAQs CRUD
export const getAllFAQs = async (req, res) => {
  try {
    const { category, skip = 0, take = 10 } = req.query;
    const where = category ? { category } : {};

    const faqs = await prisma.fAQ.findMany({
      where,
      skip: parseInt(skip),
      take: parseInt(take),
      orderBy: { order: "asc" },
    });

    const total = await prisma.fAQ.count({ where });

    res.json({ faqs, total });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createFAQ = async (req, res) => {
  try {
    const { question, answer, category, order } = req.body;

    if (!question || !answer) {
      throw new ApiError(400, "Question and answer are required");
    }

    const faq = await prisma.fAQ.create({
      data: {
        question,
        answer,
        category,
        order: order || 0,
      },
    });

    res.status(201).json(faq);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

export const updateFAQ = async (req, res) => {
  try {
    const { id } = req.params;

    const faq = await prisma.fAQ.update({
      where: { id },
      data: req.body,
    });

    res.json(faq);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

export const deleteFAQ = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.fAQ.delete({ where: { id } });

    res.json({ message: "FAQ deleted successfully" });
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

// Contact Messages
export const getAllContactMessages = async (req, res) => {
  try {
    const { read, skip = 0, take = 10 } = req.query;
    const where = read !== undefined ? { read: read === "true" } : {};

    const messages = await prisma.contactMessage.findMany({
      where,
      skip: parseInt(skip),
      take: parseInt(take),
      orderBy: { createdAt: "desc" },
    });

    const total = await prisma.contactMessage.count({ where });

    res.json({ messages, total });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getContactMessage = async (req, res) => {
  try {
    const { id } = req.params;

    const message = await prisma.contactMessage.findUnique({
      where: { id },
    });

    if (!message) {
      throw new ApiError(404, "Message not found");
    }

    // Mark as read
    await prisma.contactMessage.update({
      where: { id },
      data: { read: true },
    });

    res.json(message);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

export const createContactMessage = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      throw new ApiError(400, "Name, email, subject, and message are required");
    }

    const contactMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        phone,
        subject,
        message,
      },
    });

    res.status(201).json(contactMessage);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

export const markMessageAsRead = async (req, res) => {
  try {
    const { id } = req.params;

    const message = await prisma.contactMessage.update({
      where: { id },
      data: { read: true },
    });

    res.json(message);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

export const deleteContactMessage = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.contactMessage.delete({ where: { id } });

    res.json({ message: "Message deleted successfully" });
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

// Comment Management
export const approveBlogComment = async (req, res) => {
  try {
    const { id } = req.params;

    const comment = await prisma.comment.update({
      where: { id },
      data: { approved: true },
    });

    res.json(comment);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

export const deleteBlogComment = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.comment.delete({ where: { id } });

    res.json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};
