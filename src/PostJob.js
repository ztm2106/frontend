import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/PostJob.css';

function PostJob({ onNewJob }) {
    const [jobType, setJobType] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [payment, setPayment] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newJob = {
            id: Date.now(),
            title: jobType,
            description,
            date,
            time,
            location,
            price: payment,
            poster: {
                name: 'New User',
                rating: 5.0,
                image: image || 'default-placeholder.jpg',
            },
        };

        // Add the new job using the onNewJob function
        onNewJob(newJob);

        alert('Job posted successfully!');
        navigate('/jobseeker'); // Navigate back to JobSeeker page
    };

    const handleCancel = () => {
        navigate('/jobseeker'); // Navigate back to JobSeeker page
    };

    return (
        <div className="post-job-container">
            <header className="post-job-header">
                <h1>New Job Post</h1>
            </header>

            <form className="post-job-form" onSubmit={handleSubmit}>
                <div className="form-section">
                    <h2>1. Choose Type of Job</h2>
                    <div className="input-group">
                        <button type="button" onClick={() => setJobType('Job')}>Jobs</button>
                        <input
                            type="text"
                            value={jobType}
                            onChange={(e) => setJobType(e.target.value)}
                            placeholder="Enter a Job"
                            required
                        />
                    </div>
                </div>

                <div className="form-section">
                    <h2>2. Choose Date & Time</h2>
                    <div className="input-group">
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                        <input
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="form-section">
                    <h2>3. Choose Business or Location</h2>
                    <div className="input-group">
                        <button type="button" onClick={() => setLocation('Business')}>Business</button>
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Enter a Location"
                            required
                        />
                    </div>
                </div>

                <div className="form-section">
                    <h2>4. Choose Pay & Type</h2>
                    <div className="input-group">
                        <input
                            type="text"
                            value={payment}
                            onChange={(e) => setPayment(e.target.value)}
                            placeholder="$0.00"
                            required
                        />
                        <select>
                            <option value="hourly">Hourly</option>
                            <option value="fixed">Fixed</option>
                        </select>
                    </div>
                </div>

                <div className="form-section">
                    <h2>5. Upload a Picture</h2>
                    <div className="input-group">
                        <input type="file" accept="image/*" onChange={handleImageUpload} />
                        {image && <div className="image-preview" style={{ backgroundImage: `url(${image})` }}></div>}
                    </div>
                </div>

                <div className="form-section">
                    <h2>6. Job Description</h2>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter job description..."
                        rows="5"
                        required
                    ></textarea>
                </div>

                <div className="form-actions">
                    <button type="button" className="post-job-cancel" onClick={handleCancel}>Cancel Job Post</button>
                    <button type="submit" className="post-job-submit">Post this Job</button>
                </div>
            </form>
        </div>
    );
}

export default PostJob;
