import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes/index'
import DefaultLayout from './layout/DefaultLayout';
import RequiredSignIn from './routes/RequiredSignIn';


function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          {/* public routes */}
          {publicRoutes.map((route, index) => {
            const Page = route.component
            return (
              <Route
                key={`public-route-${index}`}
                path={route.path}
                element={
                  <DefaultLayout>
                    <Page />
                  </DefaultLayout>
                }
              />
            )
          })}

          {/* private routes */}
          <Route element={<RequiredSignIn />}>
            {privateRoutes.map((route, index) => {
              const Page = route.component
              return (
                <Route
                  key={`public-route-${index}`}
                  path={route.path}
                  element={
                    <DefaultLayout>
                      <Page />
                    </DefaultLayout>
                  }
                />
              )
            })}
          </Route>
         
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
