# Node.js Server Startup Issue

This repository demonstrates a common error in Node.js server creation where the callback function is omitted from `server.listen()`.  This results in the server starting asynchronously, leading to potential race conditions and incorrect output.

## Problem

The provided `bug.js` file shows the server starting without a callback.  This causes the 'Server is running...' message to print before the server is fully operational, possibly leading to client connection failures.

## Solution

The `bugSolution.js` provides the corrected code.  The added callback function ensures that the message is printed only after the server has bound to the specified port and is ready to accept connections.

## How to reproduce

1. Clone this repository.
2. Navigate to the directory containing `bug.js`.
3. Run `node bug.js`. Observe the behavior.
4. Run `node bugSolution.js`. Observe the correct behavior.
