import { hamburgerMenu } from "./components/hamburger.js";
import { createModal } from "./modal.js";
import { renderSlider } from "./slider.js";
import { validateForm } from "./contact.js";
import { getPostDetails } from "./blog-post.js";
import { renderPosts } from "./blog.js";

hamburgerMenu();

createModal();

renderSlider();

validateForm();

renderPosts();

getPostDetails();
