import express from "express";
import {
  getAllTeamMembers,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
  getAllTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
  getAllPricingPlans,
  createPricingPlan,
  updatePricingPlan,
  deletePricingPlan,
} from "../controllers/contentController.js";
import {
  getAllFAQs,
  createFAQ,
  updateFAQ,
  deleteFAQ,
  getAllContactMessages,
  getContactMessage,
  createContactMessage,
  markMessageAsRead,
  deleteContactMessage,
  approveBlogComment,
  deleteBlogComment,
} from "../controllers/miscController.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

// Team Members
router.get("/team", getAllTeamMembers);
router.post("/team", authMiddleware, createTeamMember);
router.put("/team/:id", authMiddleware, updateTeamMember);
router.delete("/team/:id", authMiddleware, deleteTeamMember);

// Testimonials
router.get("/testimonials", getAllTestimonials);
router.post("/testimonials", authMiddleware, createTestimonial);
router.put("/testimonials/:id", authMiddleware, updateTestimonial);
router.delete("/testimonials/:id", authMiddleware, deleteTestimonial);

// Pricing Plans
router.get("/pricing", getAllPricingPlans);
router.post("/pricing", authMiddleware, createPricingPlan);
router.put("/pricing/:id", authMiddleware, updatePricingPlan);
router.delete("/pricing/:id", authMiddleware, deletePricingPlan);

// FAQs
router.get("/faqs", getAllFAQs);
router.post("/faqs", authMiddleware, createFAQ);
router.put("/faqs/:id", authMiddleware, updateFAQ);
router.delete("/faqs/:id", authMiddleware, deleteFAQ);

// Contact Messages
router.get("/contact", authMiddleware, getAllContactMessages);
router.get("/contact/:id", authMiddleware, getContactMessage);
router.post("/contact", createContactMessage);
router.put("/contact/:id/read", authMiddleware, markMessageAsRead);
router.delete("/contact/:id", authMiddleware, deleteContactMessage);

// Blog Comments
router.put("/comments/:id/approve", authMiddleware, approveBlogComment);
router.delete("/comments/:id", authMiddleware, deleteBlogComment);

export default router;
