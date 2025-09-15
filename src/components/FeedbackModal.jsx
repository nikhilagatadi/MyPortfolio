import React, { useState } from 'react'

export default function FeedbackModal() {
  const [rating, setRating] = useState(0)

  const handleRating = (value) => {
    setRating(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (rating === 0) {
      alert('Please provide a rating')
      return
    }
    alert('Thank you for your feedback!')
    setRating(0)
    e.target.reset()
  }

  return (
    <>
      <button
        className="feedback-btn"
        data-bs-toggle="modal"
        data-bs-target="#feedbackModal"
        title="Give Feedback"
      >
        <i className="bi bi-chat-dots-fill"></i>
      </button>

      <div className="modal fade" id="feedbackModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Share Your Feedback</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form id="feedbackForm" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Rate Your Experience</label>
                  <div className="rating-stars d-flex justify-content-center">
                    {[1,2,3,4,5].map(star => (
                      <i
                        key={star}
                        className={`bi ${star <= rating ? 'bi-star-fill' : 'bi-star'}`}
                        style={{ fontSize: '24px', margin: '0 5px', cursor: 'pointer' }}
                        onClick={() => handleRating(star)}
                      ></i>
                    ))}
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Your Feedback</label>
                  <textarea className="form-control" rows="4" required></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-submit">Submit Feedback</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
