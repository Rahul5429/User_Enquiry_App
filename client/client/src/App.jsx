import { useState, useEffect } from 'react';
import axios from 'axios';
import Enquiry from './components/Enquiry';
import EnquiryList from './components/EnquiryList';
import './components/Enquiry.css';

// Base API URL (works for local & production)
const API_BASE_URL = import.meta.env.VITE_API_URL;

function App() {
  const [enquiries, setEnquiries] = useState([]);
  const [editEnquiry, setEditEnquiry] = useState(null);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/enquiry/list`);
      setEnquiries(res.data);
    } catch (err) {
      console.error('Error fetching enquiries', err);
    }
  };

  const addEnquiry = async (form) => {
    try {
      const res = await axios.post(
        `${API_BASE_URL}/api/enquiry/insert`,
        form
      );
      setEnquiries([...enquiries, res.data]);
    } catch (err) {
      console.error('Error adding enquiry', err);
    }
  };

  const updateEnquiry = async (id, form) => {
    try {
      const res = await axios.put(
        `${API_BASE_URL}/api/enquiry/update/${id}`,
        form
      );
      setEnquiries(
        enquiries.map((enq) =>
          enq._id === id ? res.data : enq
        )
      );
      setEditEnquiry(null);
    } catch (err) {
      console.error('Error updating enquiry', err);
    }
  };

  const deleteEnquiry = async (id) => {
    try {
      await axios.delete(
        `${API_BASE_URL}/api/enquiry/delete/${id}`
      );
      setEnquiries(
        enquiries.filter((enq) => enq._id !== id)
      );
      if (editEnquiry && editEnquiry._id === id) {
        setEditEnquiry(null);
      }
    } catch (err) {
      console.error('Error deleting enquiry', err);
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
