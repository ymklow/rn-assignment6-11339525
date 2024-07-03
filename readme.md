# React Native  App

This is a React Native E-Commerce application built using Expo. It includes the following features:
- Home Screen: Displaying a list of available products
- Cart Screen: Displaying selected items in the cart
- Add to Cart button for each product
- Remove from Cart button for each selected item
- Local Storage using `AsyncStorage` to store selected items locally on the device

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Screenshots](#screenshots)


## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/codetozombie/rn-assignment6-11227686.git
    cd react-native-ecommerce-app
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

    or if you are using Yarn:

    ```sh
    yarn install
    ```

3. **Start the Expo development server:**

    ```sh
    expo start -c
    ```

    This will start the Expo development server and clear the cache to ensure all changes take effect.

## Usage

To use the application, follow these steps:

1. **Run the application on your preferred device:**

    - For iOS: Press `i` to open the iOS simulator.
    - For Android: Press `a` to open the Android emulator or scan the QR code using the Expo Go app on your Android device.

2. **Navigating the Application:**

    - **Home Screen:** Displays a list of products with an "Add to Cart" button.
    - **Cart Screen:** Displays the products added to the cart with a "Remove from Cart" button.
    - **Drawer Navigation:** Access the Home and Cart screens via the drawer menu.

## Project Structure

The project structure is as follows:




## Dependencies

This project uses the following main dependencies:

- `expo`: For building and running the React Native app
- `@react-navigation/native`: For navigation
- `@react-navigation/drawer`: For drawer navigation
- `@react-navigation/stack`: For stack navigation
- `react-native-gesture-handler`: For handling gestures
- `@react-native-async-storage/async-storage`: For local storage

You can install these dependencies using:

```sh
npm install @react-navigation/native @react-navigation/drawer @react-navigation/stack react-native-gesture-handler @react-native-async-storage/async-storage
```

## Screenshots
Here are some screehot of the appps

![Screenshot](/assets/sc1.jpg)
![Screenshot](/assets/sc2.jpg)
![Screenshot](/assets/sc3.jpg)
![Screenshot](/assets/sc4.jpg)
