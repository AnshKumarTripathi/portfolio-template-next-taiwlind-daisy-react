const https = require("https");
const fs = require("fs");
const path = require("path");

const PLACEHOLDER_IMAGES = {
  profile: "https://placehold.co/400x400",
  skills: {
    html: "https://placehold.co/24x24/ff5733/ffffff?text=HTML",
    css: "https://placehold.co/24x24/2965f1/ffffff?text=CSS",
    javascript: "https://placehold.co/24x24/f7df1e/000000?text=JS",
    react: "https://placehold.co/24x24/61dafb/000000?text=React",
    node: "https://placehold.co/24x24/339933/ffffff?text=Node",
    aws: "https://placehold.co/24x24/ff9900/ffffff?text=AWS",
  },
  projects: {
    ecommerce: "https://placehold.co/600x400/2a2a2a/ffffff?text=E-Commerce",
    aiGenerator: "https://placehold.co/600x400/2a2a2a/ffffff?text=AI+Generator",
    taskManager: "https://placehold.co/600x400/2a2a2a/ffffff?text=Task+Manager",
  },
  certifications: {
    aws: "https://placehold.co/600x400/ff9900/ffffff?text=AWS+Cert",
    gcp: "https://placehold.co/600x400/4285f4/ffffff?text=GCP+Cert",
    azure: "https://placehold.co/600x400/0078d4/ffffff?text=Azure+Cert",
  },
  blogs: {
    scalableWeb: "https://placehold.co/600x400/2a2a2a/ffffff?text=Scalable+Web",
    aiWebDev: "https://placehold.co/600x400/2a2a2a/ffffff?text=AI+Web+Dev",
  },
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        if (response.statusCode === 200) {
          const writeStream = fs.createWriteStream(filepath);
          response.pipe(writeStream);
          writeStream.on("finish", () => {
            writeStream.close();
            resolve();
          });
        } else {
          reject(new Error(`Failed to download ${url}`));
        }
      })
      .on("error", reject);
  });
}

async function downloadAllImages() {
  // Create directories if they don't exist
  const dirs = [
    "public/skills",
    "public/projects",
    "public/certifications",
    "public/blogs",
  ];
  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });

  // Download profile image
  await downloadImage(
    PLACEHOLDER_IMAGES.profile,
    "public/placeholder-profile.jpg"
  );

  // Download skill images
  for (const [skill, url] of Object.entries(PLACEHOLDER_IMAGES.skills)) {
    await downloadImage(url, `public/skills/${skill}.png`);
  }

  // Download project images
  for (const [project, url] of Object.entries(PLACEHOLDER_IMAGES.projects)) {
    await downloadImage(url, `public/projects/${project}.jpg`);
  }

  // Download certification images
  for (const [cert, url] of Object.entries(PLACEHOLDER_IMAGES.certifications)) {
    await downloadImage(url, `public/certifications/${cert}.jpg`);
  }

  // Download blog images
  for (const [blog, url] of Object.entries(PLACEHOLDER_IMAGES.blogs)) {
    await downloadImage(url, `public/blogs/${blog}.jpg`);
  }
}

downloadAllImages()
  .then(() => {
    console.log("All placeholder images downloaded successfully!");
  })
  .catch((error) => {
    console.error("Error downloading images:", error);
  });
