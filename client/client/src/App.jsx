import { useState, useEffect } from 'react';
import axios from 'axios';
import Enquiry from './components/Enquiry';
import EnquiryList from './components/EnquiryList';
import './components/Enquiry.css';

function App() {
  const [enquiries, setEnquiries] = useState([]);
  const [editEnquiry, setEditEnquiry] = useState(null);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/enquiry/list');
      setEnquiries(res.data);
    } catch (err) {
      // Optionally handle error
    }
  };

  const addEnquiry = async (form) => {
    try {
      const res = await axios.post('http://localhost:5000/api/enquiry/insert', form);
      setEnquiries([...enquiries, res.data]);
    } catch (err) {
      // Optionally handle error
    }
  };

  const updateEnquiry = async (id, form) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/enquiry/update/${id}`, form);
      setEnquiries(enquiries.map((enq) => (enq._id === id ? res.data : enq)));
      setEditEnquiry(null);
    } catch (err) {
      // Optionally handle error
    }
  };

  const deleteEnquiry = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/enquiry/delete/${id}`);
      setEnquiries(enquiries.filter((enq) => enq._id !== id));
      if (editEnquiry && editEnquiry._id === id) {
        setEditEnquiry(null);
      }
    } catch (err) {
      // Optionally handle error
    }
  };

  const handleEdit = (enquiry) => {
    setEditEnquiry(enquiry);
  };

  const clearEdit = () => {
    setEditEnquiry(null);
  };

  return (
    <div className="enquiry-main-container">
      <div className="enquiry-form-container">
        <Enquiry
          onAdd={addEnquiry}
          onUpdate={updateEnquiry}
          editEnquiry={editEnquiry}
          clearEdit={clearEdit}
        />
      </div>
      <div className="enquiry-table-container">
        <EnquiryList
          enquiries={enquiries}
          onEdit={handleEdit}
          onDelete={deleteEnquiry}
        />
      </div>
    </div>
  );
}

export default App;