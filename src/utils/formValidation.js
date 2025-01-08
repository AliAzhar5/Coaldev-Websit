export const validateContactForm = (formData) => {
  const errors = {};

  // Name validation
  const nameRegex = /^[A-Za-z\s-']+$/;
  if (!formData.name?.trim()) {
    errors.name = "Name is required";
  } else if (!nameRegex.test(formData.name.trim())) {
    errors.name =
      "Name should only contain letters, spaces, hyphens, and apostrophes";
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{1,5}$/;
  if (!formData.email?.trim()) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  // Phone validation
  const phoneRegex = /^\+?[\d\s-()]{8,}$/;
  if (!formData.phone?.trim()) {
    errors.phone = "Phone number is required";
  } else if (!phoneRegex.test(formData.phone)) {
    errors.phone = "Please enter a valid phone number";
  }

  // Industry validation
  if (
    formData.industry &&
    !store.industries.some((i) => i.name === formData.industry)
  ) {
    errors.industry = "Please select a valid industry";
  }

  // Category validation
  if (formData.category && formData.industry) {
    const selectedIndustry = store.industries.find(
      (i) => i.name === formData.industry
    );
    if (
      !selectedIndustry?.subcategories.some((s) => s.name === formData.category)
    ) {
      errors.category = "Please select a valid category";
    }
  }

  // Project name validation
  if (!formData.projectName?.trim()) {
    errors.projectName = "Project name is required";
  }

  // Budget validation
  if (!formData.budget) {
    errors.budget = "Please select a budget range";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
