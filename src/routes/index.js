// Pages
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import { Signup } from '~/pages/SignUp/signup';
import Guide from '~/pages/Guide';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/signup', component: Signup },
    { path: '/@:nickname', component: Profile },
    { path: '/howitwork', component: Guide },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
