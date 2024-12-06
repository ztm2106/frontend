import React from 'react';
import './Styles/JobSeeker.css'; // Import the CSS for styling

const JobSeeker = () => {
  // Sample job data
  const jobs = [
    {
      id: 1,
      title: 'Clean Up Room',
      description: 'Help clean my room, it’s so messy!',
      price: '$20',
      poster: {
        name: 'Chris M. Sr (CC)',
        rating: 3.5,
        image: 'poster1-placeholder.jpg',
      },
    },
    {
      id: 2,
      title: 'Pick Up Food',
      description: 'Please pick up food at Ferris for me!',
      price: '$15',
      poster: {
        name: 'Stephanie R. Fr (GS)',
        rating: 3.9,
        image: 'poster2-placeholder.jpg',
      },
    },
    {
      id: 3,
      title: 'CS Tutor',
      description: 'CS Tutor for finals preparation.',
      price: '$40',
      poster: {
        name: 'Joe T. Jr (Seas)',
        rating: 4.5,
        image: 'poster3-placeholder.jpg',
      },
    },
    {
      id: 4,
      title: 'Dog Walking',
      description: 'Take my dog for a walk for 30 minutes.',
      price: '$10',
      poster: {
        name: 'Lisa K. Jr (Barnard)',
        rating: 4.8,
        image: 'poster4-placeholder.jpg',
      },
    },
    {
      id: 5,
      title: 'Grocery Pickup',
      description: 'Pick up groceries from the local market.',
      price: '$25',
      poster: {
        name: 'Daniel P. Sr (GS)',
        rating: 4.2,
        image: 'poster5-placeholder.jpg',
      },
    },
    {
      id: 6,
      title: 'Furniture Assembly',
      description: 'Help assemble a desk and chair.',
      price: '$30',
      poster: {
        name: 'Mark L. Fr (CC)',
        rating: 3.9,
        image: 'poster6-placeholder.jpg',
      },
    },
    {
      id: 7,
      title: 'Laundry Pickup',
      description: 'Pick up laundry and bring it home.',
      price: '$15',
      poster: {
        name: 'Rachel T. Jr (Seas)',
        rating: 4.3,
        image: 'poster7-placeholder.jpg',
      },
    },
    {
      id: 8,
      title: 'Math Tutoring',
      description: 'Help with calculus homework.',
      price: '$50',
      poster: {
        name: 'Tom H. Sr (CC)',
        rating: 4.7,
        image: 'poster8-placeholder.jpg',
      },
    },
  ];

  return (
    <div className="job-seeker-page">
      <div className="job-seeker-container">
        {/* Profile Section */}
        <section className="profile">
          <img
            className="profile-pic"
            src="/profile-placeholder.jpg" // Corrected path
            alt="Profile"
          />
          <div className="profile-details">
            <h2>Kiel M.</h2>
            <p>
              Jobs Completed: <span>2</span>
            </p>
            <p>
              Rating: <span>4.7</span>
            </p>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>🔍</button>
          </div>
        </section>

        {/* Jobs Section */}
        <section className="jobs">
          <div className="jobs-header">
            <h2>Available Jobs: {jobs.length}</h2>
          </div>
          <div className="job-list">
            {jobs.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-details">
                  <h3>{job.title}</h3>
                  <p>{job.description}</p>
                  <p>
                    <strong>{job.price}</strong>
                  </p>
                </div>
                <div className="job-poster">
                  <div className="job-poster2">
                    <p>{job.poster.name}</p>
                    <p>Rating: {job.poster.rating}</p>
                  </div>
                  <img
                    className="poster-pic"
                    src={`/${job.poster.image}`} // Corrected path
                    alt={job.poster.name}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default JobSeeker;
