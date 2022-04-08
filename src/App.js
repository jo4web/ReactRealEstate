import { Routes, Route } from 'react-router-dom'

import Homepage from './pages/Homepage'
import PropertyDetails from './pages/PropertyDetails'
import Search from './pages/Search'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:propertyId" element={<PropertyDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
