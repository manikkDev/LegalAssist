// for the dark and light theme
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// for checking if its alr saved or not
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  body.setAttribute("data-theme", currentTheme);
  updateThemeIcon();
}

themeToggle.addEventListener("click", () => {
  if (body.getAttribute("data-theme") === "dark") {
    body.setAttribute("data-theme", "light");
  } else {
    body.setAttribute("data-theme", "dark");
  }
  localStorage.setItem("theme", body.getAttribute("data-theme"));
  updateThemeIcon();
});

function updateThemeIcon() {
  const icon = themeToggle.querySelector("i");
  if (body.getAttribute("data-theme") === "dark") {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}

// file upld display
const fileUpload = document.getElementById("file-upload");
const fileName = document.getElementById("file-name");

fileUpload.addEventListener("change", (e) => {
  if (e.target.files.length > 0) {
    fileName.textContent = e.target.files[0].name;
  } else {
    fileName.textContent = "No file chosen";
  }
});

// for the process anim button
const processBtn = document.getElementById("process-btn");
const processingAnimation = document.getElementById("processing-animation");

processBtn.addEventListener("click", () => {
  if (fileUpload.files.length === 0) {
    alert("Please upload a file first!");
    return;
  }

  // to show the processing animation
  processingAnimation.style.display = "block";

  // Simulate processing ( to replace with actual API call)
  setTimeout(() => {
    processingAnimation.style.display = "none";
    alert(
      "Analysis complete! Results would appear here in a real implementation."
    );
  }, 3000);
});

// Search Functionality
const searchBtn = document.getElementById("search-btn");
const lawSearch = document.getElementById("law-search");

searchBtn.addEventListener("click", () => {
  if (lawSearch.value.trim() === "") {
    alert("Please enter a search term");
    return;
  }
  alert(
    `Searching for: "${lawSearch.value}" (This would call your LLM API in a real implementation)`
  );
});

lawSearch.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});
// task for vikas
// google Auth callback (mock for now replace with actual backend later)
function handleCredentialResponse(response) {
  console.log("Google Auth Response:", response);
  // In a real app, you would send this to your backend for verification
  alert("Google login successful! (Mock)");
}
