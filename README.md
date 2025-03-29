# Project Setup Guide

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites
Make sure you have the following installed:
- Node.js (Latest LTS version recommended)
- MongoDB (or use a cloud database like MongoDB Atlas)
- Git

### Clone the Repository
```sh
git clone <repository-url>
cd <repository-name>
```

### Install Dependencies
```sh
npm install
```

### Environment Variables
Create a `.env` file in the root directory and add the following variables:
```env
PORT=4000  # Change this to any available port if needed
DATABASE_URL=<your-mongodb-connection-url>
```

### Start the Server
```sh
npm run dev
```
The server should now be running at `http://localhost:<PORT>`.

### API Endpoints
Refer to the documentation or check `routes` to see the available endpoints.

### Contribution
Feel free to fork and create a pull request with your improvements.

### License
This project is open-source and available under the [MIT License](LICENSE).

