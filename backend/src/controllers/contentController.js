import prisma from "../utils/prisma.js";
import { ApiError } from "../utils/errors.js";

// Team Members CRUD
export const getAllTeamMembers = async (req, res) => {
  try {
    const { skip = 0, take = 10 } = req.query;

    const members = await prisma.teamMember.findMany({
      skip: parseInt(skip),
      take: parseInt(take),
      orderBy: { order: "asc" },
    });

    const total = await prisma.teamMember.count();

    res.json({ members, total });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTeamMember = async (req, res) => {
  try {
    const { name, position, image, bio, email, phone, socials, order } =
      req.body;

    if (!name || !position) {
      throw new ApiError(400, "Name and position are required");
    }

    const member = await prisma.teamMember.create({
      data: {
        name,
        position,
        image,
        bio,
        email,
        phone,
        socials,
        order: order || 0,
      },
    });

    res.status(201).json(member);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

export const updateTeamMember = async (req, res) => {
  try {
    const { id } = req.params;

    const member = await prisma.teamMember.update({
      where: { id },
      data: req.body,
    });

    res.json(member);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

export const deleteTeamMember = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.teamMember.delete({ where: { id } });

    res.json({ message: "Team member deleted successfully" });
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

// Testimonials CRUD
export const getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await prisma.testimonial.findMany({
      orderBy: { order: "asc" },
    });

    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTestimonial = async (req, res) => {
  try {
    const { name, company, title, image, content, rating, order } = req.body;

    if (!name || !content) {
      throw new ApiError(400, "Name and content are required");
    }

    const testimonial = await prisma.testimonial.create({
      data: {
        name,
        company,
        title,
        image,
        content,
        rating: rating || 5,
        order: order || 0,
      },
    });

    res.status(201).json(testimonial);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

export const updateTestimonial = async (req, res) => {
  try {
    const { id } = req.params;

    const testimonial = await prisma.testimonial.update({
      where: { id },
      data: req.body,
    });

    res.json(testimonial);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

export const deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.testimonial.delete({ where: { id } });

    res.json({ message: "Testimonial deleted successfully" });
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

// Pricing Plans CRUD
export const getAllPricingPlans = async (req, res) => {
  try {
    const plans = await prisma.pricingPlan.findMany({
      orderBy: { order: "asc" },
    });

    res.json(plans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createPricingPlan = async (req, res) => {
  try {
    const { name, price, description, features, highlighted, order } = req.body;

    if (!name || price === undefined) {
      throw new ApiError(400, "Name and price are required");
    }

    const plan = await prisma.pricingPlan.create({
      data: {
        name,
        price: parseFloat(price),
        description,
        features: features || [],
        highlighted: highlighted || false,
        order: order || 0,
      },
    });

    res.status(201).json(plan);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

export const updatePricingPlan = async (req, res) => {
  try {
    const { id } = req.params;

    const plan = await prisma.pricingPlan.update({
      where: { id },
      data: req.body,
    });

    res.json(plan);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

export const deletePricingPlan = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.pricingPlan.delete({ where: { id } });

    res.json({ message: "Pricing plan deleted successfully" });
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};
