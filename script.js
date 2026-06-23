const videos = [
  "Learn HTML in 20 Minutes",
  "CSS Layout Tutorial",
  "JavaScript Basics for Beginners",
  "Build a Modern Website",
  "UX Design Tips for Developers",
  "How YouTube Recommendations Work",
  "Frontend Developer Roadmap",
  "Figma to HTML CSS",
  "Responsive Design Tutorial",
  "Sticky Position Explained",
  "Web App Project Ideas",
  "Portfolio Projects for Beginners"
];

const videoList = document.getElementById("videoList");

videos.forEach((title, index) => {
  const card = document.createElement("div");
  card.className = "video-card";

  card.innerHTML = `
    <div class="thumbnail"></div>
    <div class="video-info">
      <h4>${title}</h4>
      <p>Channel Name</p>
      <p>${(index + 1) * 120}K views • ${index + 1} days ago</p>
    </div>
  `;

  card.addEventListener("click", () => {
    alert("You selected: " + title);
  });

  videoList.appendChild(card);
});
