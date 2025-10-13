const requiredFields = document.querySelectorAll("[required]");

//VALIDATE FORM
const validateForm = (form) => {
  if (!form) return true;
  const requiredFields = form.querySelectorAll("[required]");

  if (requiredFields.length === 0) return true;

  let errors = 0;

  requiredFields.forEach((input) => {
    const inputEl = input;
    const value = inputEl.value;
    if (!value) {
      inputEl.classList.add("invalid");
      errors += 1;
    } else {
      inputEl.classList.remove("invalid");
    }
  });

  if (errors > 0) return false;

  return true;
};

// SUBMIT MIDDLEWARE
document.addEventListener(
  "submit",
  function (event) {
    const form = event.target;
    if (form.tagName.toLowerCase() !== "form") return;

    const isValid = validateForm(form);
    if (!isValid) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  },
  true
);

// Remove invalid class on focus
if (requiredFields.length > 0) {
  requiredFields.forEach((input) => {
    input.addEventListener("focus", () => input.classList.remove("invalid"));
  });
}
