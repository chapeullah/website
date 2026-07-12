import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from '../app-layout';

import HomePage from '@pages/home';
import NotFoundPage from '@pages/not-found';
import AboutPage from '@pages/about';
import ContactsPage from '@pages/contacts';
import ProjectsPage from '@pages/projects';


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="projects" element={<ProjectsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}