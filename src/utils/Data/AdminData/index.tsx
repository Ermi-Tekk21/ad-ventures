export const AdminInfo = {
    id: "1",
    name: "Admin User",
    email: "admin@example.com",
    password: "$2b$10$7qj7Kz7HJ6uMEqV8hcdQVOzLJ7tE3z5iClUeV.kDjUt2YZOp7TCB2", // hashed password
    personalDescription: "Experienced administrator responsible for managing system configurations, overseeing user roles, and ensuring data security within the application."
}

export const AdminMockNotifications = [
    {
        "id": 1,
        "type": "info",
        "message": "Driver John Doe has submitted a request for promotional support.",
        "createdAt": "2024-10-25T14:30:00Z",
        "isRead": false
    },
    {
        "id": 2,
        "type": "query",
        "message": "Client Jane Smith inquired about promotional package options.",
        "createdAt": "2024-10-25T15:00:00Z",
        "isRead": true
    },
    {
        "id": 3,
        "type": "support",
        "message": "Driver Alice Brown has requested assistance with an ad campaign.",
        "createdAt": "2024-10-26T09:15:00Z",
        "isRead": false
    },
    {
        "id": 4,
        "type": "feedback",
        "message": "Client Mark Johnson has submitted feedback on the last campaign.",
        "createdAt": "2024-10-26T10:45:00Z",
        "isRead": true
    },
    {
        "id": 5,
        "type": "support",
        "message": "Driver Emily White has a question regarding the ad display settings.",
        "createdAt": "2024-10-26T11:30:00Z",
        "isRead": false
    },
    {
        "id": 6,
        "type": "query",
        "message": "Client Michael Green has requested a consultation for future promotions.",
        "createdAt": "2024-10-27T08:00:00Z",
        "isRead": false
    },
    {
        "id": 7,
        "type": "issue",
        "message": "Driver Chris Black has reported an issue with the ad content.",
        "createdAt": "2024-10-27T09:15:00Z",
        "isRead": true
    },
    {
        "id": 8,
        "type": "query",
        "message": "Client Sarah Lee is interested in starting a new ad campaign.",
        "createdAt": "2024-10-27T10:00:00Z",
        "isRead": false
    },
    {
        "id": 9,
        "type": "update",
        "message": "Driver David Kim has updated his profile for promotional ads.",
        "createdAt": "2024-10-27T11:30:00Z",
        "isRead": false
    },
    {
        "id": 10,
        "type": "query",
        "message": "Client Lisa Ray has requested details on the advertising process.",
        "createdAt": "2024-10-27T12:00:00Z",
        "isRead": false
    }
]


export const BookedAd = [
    {
        "id": 1,
        "selectedPackageId": 101,
        "adInfo": {
            "title": "City Tour Promotion",
            "description": "Enjoy a city tour with special discounts.",
            "file": "city-tour-promo.jpg"
        },
        "status": "active",
        "startDate": "2024-10-01",
        "endDate": "2024-12-31"
    },
    {
        "id": 2,
        "selectedPackageId": 102,
        "adInfo": {
            "title": "Airport Transfer Deal",
            "description": "Exclusive airport transfer rates for frequent flyers.",
            "file": "airport-transfer-deal.png"
        },
        "status": "active",
        "startDate": "2024-10-15",
        "endDate": "2025-01-15"
    },
    {
        "id": 3,
        "selectedPackageId": 103,
        "adInfo": {
            "title": "Weekend Getaway",
            "description": "Special rates for weekend trips.",
            "file": "weekend-getaway.jpg"
        },
        "status": "pending",
        "startDate": null,
        "endDate": null
    },
    {
        "id": 4,
        "selectedPackageId": 104,
        "adInfo": {
            "title": "Summer Sale",
            "description": "Get discounts on summer rides.",
            "file": "summer-sale.jpg"
        },
        "status": "active",
        "startDate": "2024-06-01",
        "endDate": "2024-08-31"
    },
    {
        "id": 5,
        "selectedPackageId": null,
        "adInfo": {
            "title": "New Year Special",
            "description": "Celebrate the new year with us.",
            "file": "new-year-special.png"
        },
        "status": "pending",
        "startDate": null,
        "endDate": null
    },
    {
        "id": 6,
        "selectedPackageId": 105,
        "adInfo": {
            "title": "Discounted Family Rides",
            "description": "Special family packages available.",
            "file": "family-rides.jpg"
        },
        "status": "active",
        "startDate": "2024-10-20",
        "endDate": "2024-12-20"
    }
]


export const availableDates = [
    { id: 1, date: "October 25, 2024", time: "10:00 AM - 12:00 PM" },
    { id: 2, date: "October 26, 2024", time: "12:00 PM - 2:00 PM" },
    { id: 3, date: "October 27, 2024", time: "9:00 AM - 11:00 AM" },
    { id: 4, date: "October 28, 2024", time: "1:00 PM - 3:00 PM" },
    { id: 5, date: "October 29, 2024", time: "11:00 AM - 1:00 PM" },
    { id: 6, date: "October 31, 2024", time: "11:00 AM - 1:00 PM" },
];