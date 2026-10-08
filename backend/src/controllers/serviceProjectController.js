import prisma from "../utils/prisma.js";
import { ApiError } from "../utils/errors.js";

// Services CRUD
export const getAllServices = async (req, res) => {
  try {
    const { published, skip = 0, take = 10 } = req.query;
    const where =
      published !== undefined ? { published: published === "true" } : {};

    const services = await prisma.service.findMany({
      where,
      skip: parseInt(skip),
      take: parseInt(take),
      orderBy: { order: "asc" },
    });

    const total = await prisma.service.count({ where });

    res.json({ services, total });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createService = async (req, res) => {
  try {
    const { title, description, icon, image, features, order, published } =
      req.body;

    if (!title || !description) {
      throw new ApiError(400, "Title and description are required");
    }

    const slug = title.toLowerCase().replace(/\s+/g, "-");

    const service = await prisma.service.create({
      data: {
        title,
        slug,
        description,
        icon,
        image,
        features: features || [],
        order: order || 0,
        published: published || false,
      },
    });

    res.status(201).json(service);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

export const updateService = async (req, res) => {
  try {
    const { id } = req.params;

    const service = await prisma.service.update({
      where: { id },
      data: req.body,
    });

    res.json(service);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.service.delete({ where: { id } });

    res.json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

// Projects CRUD
export const getAllProjects = async (req, res) => {
  try {
    const { published, skip = 0, take = 10 } = req.query;
    const where =
      published !== undefined ? { published: published === "true" } : {};

    const projects = await prisma.project.findMany({
      where,
      skip: parseInt(skip),
      take: parseInt(take),
      orderBy: { createdAt: "desc" },
    });

    const total = await prisma.project.count({ where });

    res.json({ projects, total });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createProject = async (req, res) => {
  try {
    const {
      title,
      description,
      shortDesc,
      image,
      category,
      technologies,
      link,
      published,
    } = req.body;

    if (!title || !description) {
      throw new ApiError(400, "Title and description are required");
    }

    const slug = title.toLowerCase().replace(/\s+/g, "-");

    const project = await prisma.project.create({
      data: {
        title,
        slug,
        description,
        shortDesc,
        image,
        category,
        technologies: technologies || [],
        link,
        published: published || false,
      },
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await prisma.project.update({
      where: { id },
      data: req.body,
    });

    res.json(project);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.project.delete({ where: { id } });

    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};
