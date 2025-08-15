import { useState, useEffect } from 'react';

function Enquiry({ onAdd, onUpdate, editEnquiry, clearEdit }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editEnquiry) {
      setForm({
        name: editEnquiry.name,
        email: editEnquiry.email,
        phone: editEnquiry.phone,
        message: editEnquiry.message,
      });
    } else {
      setForm({ name: '', email: '', phone: '', message: '' });
    }
  }, [editEnquiry]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');

    if (!form.name || !form.email || !form.phone || !form.message) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      if (editEnquiry) {
        await onUpdate(editEnquiry._id, form);
        setSuccess('Enquiry updated successfully!');
      } else {
        await onAdd(form);
        setSuccess('Enquiry submitted successfully!');
      }
      setForm({ name: '', email: '', phone: '', message: '' });
      clearEdit();
    } catch (err) {
      setError('Failed to submit enquiry');
    }
    setLoading(false);
  };

  return (
    <div>
      <h2 className="form-title">{editEnquiry ? 'Edit Enquiry' : 'Enquiry Form'}</h2>
      <form onSubmit={handleSubmit} className="form-style">
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Enter Your Phone"
          value={form.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message..."
          value={form.message}
          onChange={handleChange}
        ></textarea>
        <button className="submit-btn" type="submit" disabled={loading}>
          {loading ? (editEnquiry ? 'Updating...' : 'Saving...') : editEnquiry ? 'Update' : 'Save'}
        </button>
        {editEnquiry && (
          <button
            type="button"
            className="cancel-btn"
            onClick={clearEdit}
            style={{ marginLeft: '0.5em' }}
          >
            Cancel
          </button>
        )}
      </form>
      {success && <p className="success-msg">{success}</p>}
      {error && <p className="error-msg">{error}</p>}
    </div>
  );
}

export default Enquiry;