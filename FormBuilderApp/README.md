Form Builder App

Description
The Form Builder App is a mobile application built using React Native, MongoDB, Node.js, Express, and Tailwind CSS. It allows users to create, edit, and preview forms with three specific question types: Text, Grid, and Checkbox. The app provides an intuitive interface for users to design custom forms, upload images, and interact with the backend to store and retrieve form data.

Features
Create Forms: Users can create forms with three question types: Text, Grid, and Checkbox.
Edit Forms: Users can modify the created forms by adding/removing questions.
Preview Forms: View the form in its intended layout before filling it out.
Image Upload: Allows users to upload images for questions.
Save Form Data: Form data is stored in a MongoDB database.
Responsive UI: Tailwind CSS is used for styling, ensuring a clean, responsive design for both Android and iOS devices.
Tech Stack
Frontend: React Native, Tailwind CSS
Backend: Node.js, Express
Database: MongoDB
Other Tools: React Navigation, Axios (for API calls)
Installation
1. Clone the repository:


git clone https://github.com/your-username/FormBuilderApp.git
cd FormBuilderApp
2. Install dependencies:


npm install
3. Set up the backend:
Make sure the backend (Node.js/Express server) is running and connected to MongoDB. You can either deploy it to a cloud provider like Heroku or set it up locally.

Set up environment variables (for backend URL, MongoDB URI, etc.) in .env if required.
4. Run the app:
For Android:

npx react-native run-android
For iOS:

npx react-native run-ios
Screens
FormEditor.js: The screen where users create and edit forms.
FormPreview.js: The screen that previews the created form.
Folder Structure
Here is a brief overview of the folder structure:


FormBuilderApp/
├── android/                  # Android-specific files
├── ios/                      # iOS-specific files
├── node_modules/             # Installed dependencies
├── app.json                  # App configuration
├── babel.config.js           # Babel configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── package.json              # Project dependencies and scripts
├── metro.config.js           # Metro bundler configuration
├── assets/                   # Static assets (images, fonts)
├── src/                      # Source code
│   ├── components/           # Reusable UI components
│   ├── screens/              # Screens for form creation and preview
│   ├── navigation/           # Navigation setup
├── .gitignore                # Git ignore file
Contributing
Fork the repository.
Create a new branch: git checkout -b feature-name.
Commit your changes: git commit -m 'Add feature'.
Push to the branch: git push origin feature-name.
Open a Pull Request.