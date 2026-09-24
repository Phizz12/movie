/**
 * CINEMA SMADA - Interactive Features & Animation Controller
 * Fully backwards-compatible with original function signatures & IDs
 */

// ==========================================
// 1. NOTE BANNER CONTROLLER
// ==========================================
function showNote() {
  const noteEl = document.getElementById("note");
  const noteBtn = document.getElementById("note-btn");
  if (noteEl) noteEl.style.display = "block";
  if (noteBtn) noteBtn.style.display = "inline-block";
}

function hideNote() {
  const noteEl = document.getElementById("note");
  const noteBtn = document.getElementById("note-btn");
  if (noteEl) noteEl.style.display = "none";
  if (noteBtn) noteBtn.style.display = "none";
}

// ==========================================
// 2. GENRE SELECTION & SHOWCASE CONTROLLER
// ==========================================
function updateGenreState(activeGenre) {
  const body = document.body;
  const promptEl = document.getElementById("showcase-prompt");
  const comedyBtn = document.getElementById("btn-comedy");
  const hororBtn = document.getElementById("btn-horor");

  // Set ambient theme attribute
  if (activeGenre) {
    body.setAttribute("data-genre", activeGenre);
    if (promptEl) promptEl.style.display = "none";
  } else {
    body.removeAttribute("data-genre");
    if (promptEl) promptEl.style.display = "block";
  }

  // Update active pill button classes
  if (comedyBtn) {
    if (activeGenre === "comedy") {
      comedyBtn.classList.add("active");
    } else {
      comedyBtn.classList.remove("active");
    }
  }

  if (hororBtn) {
    if (activeGenre === "horor") {
      hororBtn.classList.add("active");
    } else {
      hororBtn.classList.remove("active");
    }
  }
}

function comedy() {
  const comedyEl = document.getElementById("comedy");
  const hororEl = document.getElementById("horor");
  const resetBtn = document.getElementById("reset-btn");

  if (comedyEl) comedyEl.style.display = "block";
  if (hororEl) hororEl.style.display = "none";
  if (resetBtn) resetBtn.style.display = "inline-flex";

  updateGenreState("comedy");

  // Smooth scroll to showcase
  if (comedyEl) {
    comedyEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function horor() {
  const hororEl = document.getElementById("horor");
  const comedyEl = document.getElementById("comedy");
  const resetBtn = document.getElementById("reset-btn");

  if (hororEl) hororEl.style.display = "block";
  if (comedyEl) comedyEl.style.display = "none";
  if (resetBtn) resetBtn.style.display = "inline-flex";

  updateGenreState("horor");

  // Smooth scroll to showcase
  if (hororEl) {
    hororEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function reset() {
  const comedyEl = document.getElementById("comedy");
  const hororEl = document.getElementById("horor");
  const resetBtn = document.getElementById("reset-btn");

  if (comedyEl) comedyEl.style.display = "none";
  if (hororEl) hororEl.style.display = "none";
  if (resetBtn) resetBtn.style.display = "none";

  updateGenreState(null);
}

// ==========================================
// 3. INTERACTIVE TRAILER MODAL
// ==========================================
function openTrailer(movieTitle, posterUrl) {
  const modal = document.getElementById("trailer-modal");
  const titleEl = document.getElementById("modal-movie-title");
  const posterEl = document.getElementById("modal-screen-poster");

  if (titleEl) titleEl.textContent = movieTitle + " - Official Teaser Trailer";
  if (posterEl && posterUrl) posterEl.src = posterUrl;
  if (modal) modal.classList.add("active");
}

function closeTrailer() {
  const modal = document.getElementById("trailer-modal");
  if (modal) modal.classList.remove("active");
}

// Close trailer on ESC key or clicking outside
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeTrailer();
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("trailer-modal");
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeTrailer();
    });
  }
});

// ==========================================
// 4. TOAST NOTIFICATION FOR USER ACTIONS
// ==========================================
function showToast(message) {
  let toast = document.getElementById("cinema-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "cinema-toast";
    toast.style.position = "fixed";
    toast.style.bottom = "28px";
    toast.style.right = "28px";
    toast.style.padding = "14px 24px";
    toast.style.borderRadius = "999px";
    toast.style.background = "linear-gradient(135deg, #0e1422, #182239)";
    toast.style.color = "#00e5ff";
    toast.style.border = "1px solid rgba(0, 229, 255, 0.4)";
    toast.style.boxShadow = "0 10px 30px rgba(0,0,0,0.6), 0 0 20px rgba(0,229,255,0.25)";
    toast.style.fontFamily = "'Plus Jakarta Sans', sans-serif";
    toast.style.fontSize = "0.92rem";
    toast.style.fontWeight = "600";
    toast.style.zIndex = "3000";
    toast.style.transition = "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)";
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.opacity = "1";
  toast.style.transform = "translateY(0)";

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
  }, 3200);
}
