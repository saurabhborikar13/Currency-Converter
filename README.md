# Currency Converter

## Overview

The **Currency Converter** is a web-based application that allows users to convert amounts between different currencies. It supports a wide range of currencies and provides real-time exchange rates using an external API. The application also includes a dark/light mode toggle for better user experience.

---

## Features

1. **Currency Conversion**:
   - Convert amounts between different currencies.
   - Supports a wide range of currencies (e.g., USD, INR, EUR, etc.).

2. **Real-Time Exchange Rates**:
   - Fetches real-time exchange rates from an external API.

3. **Country Flags**:
   - Displays the flag of the selected country for both "From" and "To" currencies.

4. **Dark/Light Mode**:
   - Toggle between dark and light modes for better readability and user preference.

5. **User-Friendly Interface**:
   - Simple and intuitive design with dropdowns for selecting currencies and input fields for amounts.

---

## How It Works

1. **Initialization**:
   - The application loads with default currencies (USD for "From" and INR for "To").
   - Country flags are displayed based on the selected currencies.

2. **Currency Selection**:
   - Users can select the "From" and "To" currencies from dropdown menus.
   - The corresponding country flags are updated dynamically.

3. **Amount Input**:
   - Users enter the amount they want to convert in the input field.

4. **Conversion**:
   - The application fetches real-time exchange rates from the API.
   - It calculates the converted amount and displays the result.

5. **Dark/Light Mode**:
   - Users can toggle between dark and light modes using the buttons provided.

---

## Usage

### Running the Application

1. **Open the Project**:
   - Open the `index.html` file in a web browser.

2. **Select Currencies**:
   - Use the dropdown menus to select the "From" and "To" currencies.

3. **Enter Amount**:
   - Enter the amount you want to convert in the input field.

4. **Convert**:
   - Click the "Get" button to see the converted amount.

5. **Toggle Dark/Light Mode**:
   - Use the "Light" and "Dark" buttons to switch between modes.

---

## Code Structure

### Files

1. **`index.html`**:
   - The main HTML file that defines the structure of the application.

2. **`style.css`**:
   - The CSS file that styles the application, including dark/light mode.

3. **`script.js`**:
   - The JavaScript file that handles currency conversion, API calls, and dynamic updates.

4. **`coutryCodes.js`**:
   - Contains a mapping of country codes to currency codes and vice versa.

---
