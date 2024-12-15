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
    },
    {
        "id": 3,
        "title": "CS Tutor",
        "description": "CS Tutor for finals preparation.",
        "date": "2024-12-17",
        "time": "2:00 PM",
        "location": "Computer Science Building",
        "price": "$40",
        "poster": {
            "name": "Joe T. Jr (Seas)",
            "rating": 4.5,
            "image": "poster3-placeholder.jpg"
        }
    },
    {
        "id": 4,
        "title": "Dog Walking",
        "description": "Take my dog for a walk for 30 minutes.",
        "date": "2024-12-17",
        "time": "10:00 AM",
        "location": "John Jay Hall",
        "price": "$10",
        "poster": {
            "name": "Lisa K. Jr (Barnard)",
            "rating": 4.8,
            "image": "poster4-placeholder.jpg"
        }
    },
    {
        "id": 5,
        "title": "Grocery Pickup",
        "description": "Pick up groceries from the local market.",
        "date": "2024-12-18",
        "time": "9:00 AM",
        "location": "Local Market",
        "price": "$25",
        "poster": {
            "name": "Daniel P. Sr (GS)",
            "rating": 4.2,
            "image": "poster5-placeholder.jpg"
        }
    },
    {
        "id": 6,
        "title": "Furniture Assembly",
        "description": "Help assemble a desk and chair.",
        "date": "2024-12-19",
        "time": "1:00 PM",
        "location": "Dorm Common Area",
        "price": "$30",
        "poster": {
            "name": "Mark L. Fr (CC)",
            "rating": 3.9,
            "image": "poster6-placeholder.jpg"
        }
    },
    {
        "id": 7,
        "title": "Laundry Pickup",
        "description": "Pick up laundry and bring it home.",
        "date": "2024-12-20",
        "time": "3:30 PM",
        "location": "Laundry Room",
        "price": "$15",
        "poster": {
            "name": "Rachel T. Jr (Seas)",
            "rating": 4.3,
            "image": "poster7-placeholder.jpg"
        }
    },
    {
        "id": 8,
        "title": "Math Tutoring",
        "description": "Help with calculus homework.",
        "date": "2024-12-21",
        "time": "4:00 PM",
        "location": "Math Department Office",
        "price": "$50",
        "poster": {
            "name": "Tom H. Sr (CC)",
            "rating": 4.7,
            "image": "poster8-placeholder.jpg"
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
