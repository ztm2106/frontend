from flask import Flask, jsonify, request
from flask_cors import CORS
import time

app = Flask(__name__)
CORS(app)

# Mock job data
jobs = [
    {
        "id": 1,
        "title": "Clean Up Room",
        "description": "Help clean my room, it’s so messy!",
        "date": "2024-12-15",
        "time": "10:00 AM",
        "location": "East Campus Dorm",
        "price": "$20",
        "poster": {
            "name": "Chris M. Sr (CC)",
            "rating": 3.5,
            "image": "poster1-placeholder.jpg"
        }
    },
    {
        "id": 2,
        "title": "Pick Up Food",
        "description": "Please pick up food at Ferris for me!",
        "date": "2024-12-16",
        "time": "12:00 PM",
        "location": "Ferris Booth Commons",
        "price": "$15",
        "poster": {
            "name": "Stephanie R. Fr (GS)",
            "rating": 3.9,
            "image": "poster2-placeholder.jpg"
        }
    }
]

@app.route('/jobs', methods=['GET'])
def get_jobs():
    return jsonify(jobs)

@app.route('/jobs', methods=['POST'])
def post_job():
    data = request.json
    new_job = {
        "id": int(time.time()),
        "title": data['title'],
        "description": data['description'],
        "date": data['date'],
        "time": data['time'],
        "location": data['location'],
        "price": data['price'],
        "poster": data['poster']
    }
    jobs.append(new_job)
    return jsonify(new_job), 201

@app.route('/jobs/<int:job_id>', methods=['DELETE'])
def delete_job(job_id):
    global jobs
    jobs = [job for job in jobs if job['id'] != job_id]
    return '', 204

if __name__ == '__main__':
    app.run(debug=True)
