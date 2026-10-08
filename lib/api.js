const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const apiClient = {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const headers = {
      "Content-Type": "application/json",
      ...options.headers,
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "API request failed");
    }

    return response.json();
  },

  get(endpoint, options) {
    return this.request(endpoint, { ...options, method: "GET" });
  },

  post(endpoint, data, options) {
    return this.request(endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  put(endpoint, data, options) {
    return this.request(endpoint, {
      ...options,
      method: "PUT",
      body: JSON.stringify(data),
    });
  },

  delete(endpoint, options) {
    return this.request(endpoint, { ...options, method: "DELETE" });
  },
};

// Auth API
export const authAPI = {
  register: (data) => apiClient.post("/auth/register", data),
  login: (data) => apiClient.post("/auth/login", data),
  getProfile: () => apiClient.get("/auth/profile"),
};

// Blogs API
export const blogsAPI = {
  getAll: (params) => apiClient.get(`/blogs?${new URLSearchParams(params)}`),
  getById: (id) => apiClient.get(`/blogs/${id}`),
  create: (data) => apiClient.post("/blogs", data),
  update: (id, data) => apiClient.put(`/blogs/${id}`, data),
  delete: (id) => apiClient.delete(`/blogs/${id}`),
};

// Services API
export const servicesAPI = {
  getAll: (params) => apiClient.get(`/services?${new URLSearchParams(params)}`),
  create: (data) => apiClient.post("/services", data),
  update: (id, data) => apiClient.put(`/services/${id}`, data),
  delete: (id) => apiClient.delete(`/services/${id}`),
};

// Projects API
export const projectsAPI = {
  getAll: (params) => apiClient.get(`/projects?${new URLSearchParams(params)}`),
  create: (data) => apiClient.post("/projects", data),
  update: (id, data) => apiClient.put(`/projects/${id}`, data),
  delete: (id) => apiClient.delete(`/projects/${id}`),
};

// Team API
export const teamAPI = {
  getAll: (params) =>
    apiClient.get(`/manage/team?${new URLSearchParams(params)}`),
  create: (data) => apiClient.post("/manage/team", data),
  update: (id, data) => apiClient.put(`/manage/team/${id}`, data),
  delete: (id) => apiClient.delete(`/manage/team/${id}`),
};

// Testimonials API
export const testimonialsAPI = {
  getAll: () => apiClient.get("/manage/testimonials"),
  create: (data) => apiClient.post("/manage/testimonials", data),
  update: (id, data) => apiClient.put(`/manage/testimonials/${id}`, data),
  delete: (id) => apiClient.delete(`/manage/testimonials/${id}`),
};

// Pricing API
export const pricingAPI = {
  getAll: () => apiClient.get("/manage/pricing"),
  create: (data) => apiClient.post("/manage/pricing", data),
  update: (id, data) => apiClient.put(`/manage/pricing/${id}`, data),
  delete: (id) => apiClient.delete(`/manage/pricing/${id}`),
};

// FAQs API
export const faqsAPI = {
  getAll: (params) =>
    apiClient.get(`/manage/faqs?${new URLSearchParams(params)}`),
  create: (data) => apiClient.post("/manage/faqs", data),
  update: (id, data) => apiClient.put(`/manage/faqs/${id}`, data),
  delete: (id) => apiClient.delete(`/manage/faqs/${id}`),
};

// Contact API
export const contactAPI = {
  getAll: (params) =>
    apiClient.get(`/manage/contact?${new URLSearchParams(params)}`),
  getById: (id) => apiClient.get(`/manage/contact/${id}`),
  create: (data) => apiClient.post("/manage/contact", data),
  markAsRead: (id) => apiClient.put(`/manage/contact/${id}/read`),
  delete: (id) => apiClient.delete(`/manage/contact/${id}`),
};
