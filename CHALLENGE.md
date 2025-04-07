## Challenge Summary

Welcome to “Wellmark Billing Rate App UI Prototype Challenge”! The goal of this challenge is to create the Responsive UI prototype from the provided mockup screen using Angular 9.

NOTE: Every phase are shortened, please check the timeline.

## Project Overview

Our client wants to build a tool that has the capability to calculate & view rates for a given population of contracts within specified groups or lists of members. Please go through the Individual requirement section for more details.

## Technology Stack

Angular 9, TypeScript, HTML, SCSS, Material Design, Angular Flex

## BROWSER REQUIREMENTS

A Responsive web-app supporting the following devices and browsers.

- Windows: Edge / IE11 / Chrome
- Mac OS: Chrome
- Mobile: chrome
- tablet: chrome

## Assets

The following items are shared on the forum

- Material Theme to use
- Swagger definition of API is shared, please use similar request and response

## Individual requirements

Please implement the following single dashboard page:

- Configure JWT token to be sent in the backend api in the configuration file
- Dashboard Page. This page has an input form with two tabs and a result table

_Note: The UI should follow provided style guides with material components and will look different than the provided mockup. Also, the table should include filtering logic, which is not shown in the image, details below._

### Group ID - \*Required

- If provided, it must be 8 digits in length. Allow multiple group ids to be included, with a delimiter. Can be delimited by comma or semicolon
- Error 1: An error message is displayed when user inputs group Id list with a delimiter other than a comma or semicolon. "Please enter list in valid format"
- Error 2: An error message is displayed when user inputs a single group Id is not submitted in valid 8-character format. "Please enter group ID in valid format"
- Error 3: An error message is displayed when a user tries to submit a Group ID query when Group ID(s) field is empty. "Group ID(s) Required"

### Rate From Date - \*Required

- Allow following format:
- MM/DD/YYYY (auto format)

### Rate To Date - \*Required

- Allow following format:
- MM/DD/YYYY (auto format)

### Submit

- Validate the form and submit if all validations are passed else show an error message.
- Error 1: An error message is displayed when the user tries to submit a form when both FROM and TO dates are not selected. "Date Range Required"
  Bulk Rates Inquiry UI – File Upload Tab

### Request Type - \*Required

- Determines the flow of validation and api calls made by the presentation service

### File Upload - \*Required

- Use basic file upload pop-up. Only allow .csv format; show an error if the provided file is not .csv.

### Rate From Date - \*Required

- Allow following format:
- MM/DD/YYYY (auto format)

### Rate To Date - \*Required

- Allow following format:
- MM/DD/YYYY (auto format)

### Submit

- Validate the form and submit if all validations are passed else show an error message.
- Error 1: An error message is displayed when the user tries to submit a form when both FROM and TO dates are not selected. "Date Range Required"

### File Name

- Text should be the form of link and file should be downloaded once the user clicks

### Date Submitted

- Format will be YYYY-MM-DD HH:MM:SS

### Submitted By

- Username of the submitter.

### Status

- Available Values are COMPLETE and FAIL.

### Delete Button

- Users can delete the rows. The system should show a confirmation window to the user before deleting the file.
- The table/grid should be reloaded once the user deletes the file.

### Filter by Submitted By

- When the filter symbol on header is clicked, show a list of available user ids which are in the results table. Need ability to clear the filter. Show all by default. Please take reference from google sheet filter

### Filter by Date

- Filter by date EXCLUDING the timestamp. When the filter symbol on header is clicked, a list of possible dates should show and only one can be selected. When a date is selected, only show the results which meet YYYY-MM-DD of the date/time stamp. Need ability to clear the date filter.

### Pagination

- Show 20 records per page, pagination is a client-side

## GENERAL REQUIREMENTS

- Do not use browser alerts
- Add proper code comments
- Show loading spinners when populating data from API UI.
- Implement validation errors.
- Follow angular best practices
- No linting errors.
- No errors with prod build.
- All data should come from Mock API server, you can use json-server, don’t use inline HTML for content
