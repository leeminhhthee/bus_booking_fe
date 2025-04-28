# 🚌 Bus Booking Application

A **Bus Booking System** built with **React Native CLI**, **Node.js (Express)**, and **MongoDB** — providing a seamless experience for users to browse, book bus tickets, and manage reservations.

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## 📂 Repositories

- **Frontend** (React Native CLI): [bus_booking_fe](https://github.com/leeminhhthee/bus_booking_fe)
- **Backend** (Node.js Express): [bus_booking_be](https://github.com/leeminhhthee/bus_booking_be)

---

## 🚀 Tech Stack

### Frontend
- **React Native CLI**
- **TanStack Query** (React Query)
- **Axios**
- **TailwindCSS** (for React Native styling)
- **Google Sign-In** authentication

### Backend
- **Node.js** (Express framework)
- **MongoDB**
- **AdminJS**
- **JWT (JSON Web Token)** for secure authentication

---

## 🔑 Main Features

- User authentication via **Google Sign-In**
- Browse available bus routes and schedules
- Book and manage tickets
- Admin panel powered by **AdminJS**
- Secure API endpoints with **JWT authentication**
- Modern UI with **TailwindCSS**
- Optimized API interactions with **TanStack Query** and **Axios**

---

# Getting Started

> **Note 1**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.
> **Note 2**: Please follow the instructions in the [bus_booking_be README](https://github.com/leeminhhthee/bus_booking_be#readme) to set up the backend server.

## Step 1: Frontend Setup

```bash
# Clone the frontend repository
git clone https://github.com/leeminhhthee/bus_booking_fe.git
cd bus_booking_fe

# Install dependencies
# Using npm
npm install

# OR using Yarn
yarn install
```

## Step 2: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Build and run app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify the app

Now that you have successfully run the app, let's make changes!

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

---

## 📸 Screenshots

|----------------|------------------|------------|------------|
| ![](demo/1.PNG) | ![](demo/2.PNG) | ![](demo/3.PNG) | ![](demo/4.PNG) |
|----------------|------------------|------------|------------|
| ![](demo/5.PNG) | ![](demo/6.PNG) | ![](demo/7.PNG) | ![](demo/8.PNG) |
|----------------|------------------|------------|
| ![](demo/9.PNG) | ![](demo/10.PNG) | ![](demo/11.PNG) | 

---

## 👨‍💻 Author

- **Leeminhhthee**  
  [GitHub Profile](https://github.com/leeminhhthee)

---

## ✨ Future Improvements

- Online payment integration
- Ticket QR code generation
- Real-time bus tracking
- Multi-language support

---