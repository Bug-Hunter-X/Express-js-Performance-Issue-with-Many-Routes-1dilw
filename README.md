# Express.js Performance Issue with Many Routes

This repository demonstrates a performance issue in Express.js when dealing with a large number of routes and provides a solution to mitigate the problem.

## Problem

A naive approach to adding many routes in an Express.js application can lead to performance issues and crashes, especially when the number of routes grows significantly.  The server's startup time will increase and it may even fail to start due to excessive memory consumption.

## Solution

The solution involves using route grouping and dynamic route loading to prevent the express app from loading all routes into memory during the initial app startup.

## Setup and Run

1. Clone this repository: `git clone https://github.com/yourusername/express-route-performance.git`
2. Navigate to the repository: `cd express-route-performance`
3. Install dependencies: `npm install`
4. Run the original buggy app: `node bug.js` (observe the startup time and potential crash)
5. Run the improved app: `node bugSolution.js` (observe the faster startup time)