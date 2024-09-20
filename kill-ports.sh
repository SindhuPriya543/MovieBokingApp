#!/bin/bash

# Kill process on port 5000 (JSON Server)
echo "Killing process on port 5000..."
fuser -k 5000/tcp

# Kill process on port 3000 (React Dev Server)
echo "Killing process on port 3000..."
fuser -k 3000/tcp

echo "Processes on ports 5000 and 3000 have been killed."
