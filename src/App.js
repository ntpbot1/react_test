import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './router';
import DefaultLayout from './components/Layout/DefaultLayout';
import { Fragment } from 'react';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            const Page = route.component;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return <Route key={index} path={route.path} element={<Layout children={<Page />}></Layout>} />;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
