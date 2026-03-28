import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import CoursesPage from '@/pages/CoursesPage.vue'
import CartPage from '@/pages/CartPage.vue'
import MyCoursesPage from '@/pages/MyCoursesPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import CourseDetailsPage from '@/pages/CourseDetailsPage.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/courses', name: 'courses', component: CoursesPage },
    { path: '/courses/:courseId', name: 'courseDetails', component: CourseDetailsPage },
    { path: '/cart', name: 'cart', component: CartPage },
    { path: '/my-courses', name: 'myCourses', component: MyCoursesPage },
    //show a dedicated 404 page for unknown URLs.
    { path: '/:pathMatch(.*)*', name: 'notFound', component: NotFoundPage },
  ],
})

export default router

