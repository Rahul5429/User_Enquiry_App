import React from 'react';

function EnquiryList({ enquiries, onEdit, onDelete }) {
  if (!enquiries || enquiries.length === 0) {
    return <p className="no-enquiries">No enquiries found.</p>;
  }

  return (
    <table className="enquiry-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Message</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {enquiries.map((enq) => (
          <tr key={enq._id}>
            <td>{enq.name}</td>
            <td>{enq.email}</td>
            <td>{enq.phone}</td>
            <td>{enq.message}</td>
            <td>
              <button className="edit-btn" onClick={() => onEdit(enq)}>Edit</button>
              <button className="delete-btn" onClick={() => onDelete(enq._id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EnquiryList;