import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

import Homepage from './pages/Homepage'
import PropertyDetails from './pages/PropertyDetails'
import Search from './pages/Search'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/details/:propertyId" element={<PropertyDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ScrollToTop>
    </>
  );
}

export default App;
