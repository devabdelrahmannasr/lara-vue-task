import LoginPage from '../pages/LoginPage'
import DashboardPage from '../pages/DashboardPage'
import ArticleList from '../pages/ArticleList'




const routes = [
    { path: '/login', component: LoginPage, meta: { guestOnly: true } },
    {
        path: '/dashboard', component: DashboardPage, meta: { requiresAuth: true }, children: [
            {
                path: '/dashboard/articles',
                component: ArticleList,
                meta: { requiresAuth: true },
            }

        ]
    },

];


export default routes;