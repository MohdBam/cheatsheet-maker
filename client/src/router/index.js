import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import AddCategory from '@/components/AddCategory';
import EditCategory from '@/components/EditCategory';
import ShowCategory from '@/components/ShowCategory';
import AddSheet from '@/components/AddSheet';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/add",
      name: "add",
      component: AddCategory
    },
    {
      path:"/categories/edit/:id",
      name : "edit",
      component: EditCategory
    },
    {
      path: "/categories/:id",
      name: "show-category",
      component: ShowCategory
    },
    {
      path: "/categories/:id/add",
      name: "add-sheet",
      component: AddSheet
    }
  ],
});
