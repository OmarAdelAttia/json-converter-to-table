JSON to Table Converter Page (Angular)

    * Project Overview

        This Angular application allows users to paste JSON data into a text area, which is then converted into a table format with filtering and pagination capabilities. The application also features a login system to control access, in line with the provided Figma design.

    * Features

        1- Authentication Service:

            - A simple login mechanism is implemented. The default credentials are:
                - Username: admin
                - Password: password123
            - The login service includes basic token management and role-based access control.

        2-JSON Input Section:

            - A text area is provided where users can paste JSON data.
            - The system validates the JSON format and ensures correct input.

        3-Table Display:

            - Once valid JSON is pasted, it is displayed in a table format.
            - Columns are sortable to make it easier to navigate through data.
            - Pagination is added to handle large datasets effectively.

        4- Filter Fields (Not Yet Implemented):

            - Filter fields based on JSON keys are dynamically generated.
            - Note: The filter fields have been created, but the functionality for filtering data is not yet implemented.

    * Technology Stack
        - Angular: Latest stable version.
        - PrimeNG: Used for UI components like tables and pagination.

    * Installation and Setup

        1- Clone the repository:

            - git clone [https://github.com/OmarAdelAttia/json-converter-to-table]

        2- Navigate to the project directory:

            - cd json-to-table-converter

        3- Install the dependencies:

            - npm install

        4- Run the development server:

            - ng serve

        - The application will be accessible at http://localhost:4200.

    * Usage

        1- Login: Use the following credentials to log in:

            - Username: admin
            - Password: password123

        2- Paste JSON: After logging in, paste your JSON data into the provided text area. The table will automatically render below with sortable columns and pagination.

        3- Filtering: The application generates filter fields based on the JSON structure. However, the filtering functionality is not yet implemented.

    * Future Improvements

        - Implement filtering functionality for JSON data.

        - Improve error handling for invalid JSON formats.

        - Enhance role-based access control for different user types.
