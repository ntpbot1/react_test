import Following from '../Page/Following';
import Home from '../Page/Home';
import Profile from '../Page/Profile';
import Search from '../Page/Search';
import Upload from '../Page/Upload';
import HeaderUpload from '../components/Layout/HeaderUpload';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderUpload },
  { path: '/search', component: Search, layout: null },
];
const privateRouters = [];
export { publicRoutes, privateRouters };
