import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './scss/style.scss';
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import CareersPage from './pages/Careers';
import ProjectsPage from './pages/Projects';
import CareerDetailsPage from './pages/CareerDetails';
import ContactPage from './pages/Contact';
import PrivacyPage from './pages/Privacy';
import ProjectPage from './pages/projectList/ProjectDefault';
import TheWrathOfGods from './pages/projectList/TheWrathOfGods';
import SystemRoyalePart1 from './pages/projectList/SystemRoyalePart_1';
import SystemRoyalePart2 from './pages/projectList/SystemRoyalePart_2';
import TheDopeShtTypeSlash from './pages/projectList/TheDopeShtTypeSlash';
import Eris from './pages/projectList/Eris';
import TheBookOfNouns from './pages/projectList/TheBookOfNouns';
import NovaTheraTheReckoning from './pages/projectList/NovaTheraTheReckoning';
import ReactGA from 'react-ga4';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '*',
        element: <HomePage />,
      },
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'careers',
        element: <CareersPage />,
      },
      // {
      //   path: 'careers/:slug',
      //   element: <CareerDetailsPage />,
      // },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
      {
        path: 'projects/item',
        element: <ProjectPage />,
      },
      {
        path: 'projects/the_wrath_of_gods',
        element: <TheWrathOfGods />,
      },
      {
        path: 'projects/system_royale_part_1',
        element: <SystemRoyalePart1 />,
      },
      {
        path: 'projects/system_royale_part_2',
        element: <SystemRoyalePart2 />,
      },
      {
        path: 'projects/the_dope_sht_type_slash',
        element: <TheDopeShtTypeSlash />,
      },
      {
        path: 'projects/eris',
        element: <Eris />,
      },
      {
        path: 'projects/the_book_of_nouns',
        element: <TheBookOfNouns />,
      },
      {
        path: 'projects/nova_thera_the_reckoning',
        element: <NovaTheraTheReckoning />,
      },
      {
        path: 'contacts',
        element: <ContactPage />,
      },
      {
        path: 'privacy',
        element: <PrivacyPage />,
      },
      {
        path: 'pitch',
        loader: () => redirect("https://www.figma.com/deck/dPPNgb0llmvVDW3g8D6Asy")
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
try {
  setTimeout(_ => {
    ReactGA
    .initialize('G-ZJKT2KX4EK', {}) // https://github.com/codler/react-ga4?tab=readme-ov-file#reference
  }, 4000); // added a try/catch (for preventing AddBlocker Crashes) and a setTimeout.
} catch (err) {
  console.error(err);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
