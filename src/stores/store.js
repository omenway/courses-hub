import axios from "axios";
import { defineStore } from "pinia";

const API_URL = "https://library-management-api-i6if.onrender.com/api";

// Dummy descriptions
const COURSE_DESCRIPTIONS = [
  "A hands-on introduction that walks you through the core concepts with real-world examples. Perfect for beginners who want a solid foundation.",
  "Dive deep into practical techniques and best practices. Each lesson builds on the last so you gain confidence as you progress.",
  "A well-structured course designed to take you from zero to comfortable. Includes exercises and tips to reinforce every topic.",
  "Explore key ideas through clear explanations and step-by-step guidance. Great for learners who prefer a straightforward approach.",
  "An engaging course packed with examples and mini-projects. You will finish with a strong understanding of the subject.",
  "Covers everything you need to get started quickly. The lessons are concise, focused, and easy to follow at your own pace.",
];

// Helper
function normalizeCourse(course) {
  return {
    cartItemId: crypto.randomUUID(),
    id: course._id,
    title: course.title,
    author: course.author,
    category: course.category,
  };
}

// Store
export const useBookStore = defineStore("book", {
  state: () => ({
    courses: [],
    loading: false,
    cart: [],
    myCourses: [],
  }),

  persist: {
    pick: ["cart", "myCourses"], // Persist data
  },

  getters: {
    isInCart: (state) => (courseId) => state.cart.some((c) => c.id === courseId), //Is this course currently in the cart?"

    isPurchased: (state) => (courseId) =>
      state.myCourses.some((c) => c.id === courseId), //Is this course already purchased?

    latestCourses(state) {
      return state.courses.slice(0, 3); //Get the latest 3 courses
    },

    highestRatedCourses(state) {
      return state.courses.slice(3, 6); //Get the highest rated 3 courses
    },
  },

  actions: {
    async fetchCourses() {
      this.loading = true;
      try {
        const response = await axios.get(`${API_URL}/books`);
        const books = response.data.books ?? [];
        // Attach description to course
        this.courses = books.map((book, index) => ({
          ...book,
          description: COURSE_DESCRIPTIONS[index % COURSE_DESCRIPTIONS.length],
        }));
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        this.loading = false;
      }
    },

    // async ensureCoursesLoaded() {
    //   if (this.loading) return;
    //   if (this.courses.length > 0) return;
    //   await this.fetchCourses();
    // },

    addToCart(course) {
      const courseId = course._id;
      if (!courseId) return;
      if (this.isPurchased(courseId)) return;
      if (this.isInCart(courseId)) return;

      //store cart entries with their own `cartItemId`

      const cartItem = normalizeCourse(course);
      this.cart.push(cartItem);
    },

    removeFromCart(cartItemId) {
      this.cart = this.cart.filter((c) => c.cartItemId !== cartItemId);
    },

    confirmPurchase(cartItemId) {
      const item = this.cart.find((c) => c.cartItemId === cartItemId);
      if (!item) return;
      // const x = [1, 2, 3]
      // const y = [5, 67, 8]

      // x.push(...y)
      // for (let i = 0; i < y.length; i++) {
      //   x[x.length] = y[i]
      // }

      // const marwan = {
      //   name: "name",
      //   age: 12,
      // }

      // const name = marwan.name
      // const age = marwan.age
      // const { name, age } = marwan

      if (!this.isPurchased(item.id)) {
        // Add to owned list and remove from cart
        this.myCourses.push({
          ...item,
          purchasedId: crypto.randomUUID(),
        });
      }

      this.removeFromCart(cartItemId);
    },

    unenrollCourse(purchasedId) {
      this.myCourses = this.myCourses.filter((c) => c.purchasedId !== purchasedId);
    },
  },
});


