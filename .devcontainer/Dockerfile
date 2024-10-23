# Use the Node.js official image
FROM node:18-alpine

# Install git to clone repositories
RUN apk add --no-cache git

# Set the working directory to /workspace
WORKDIR /workspace

# Install TurboRepo globally
RUN npm install -g turbo

# Clone the TurboRepo into a temporary folder
RUN git clone https://github.com/akashtqb06/turboRepo.git /workspace/temp-turboRepo

# Copy the contents of TurboRepo into /workspace
RUN cp -r /workspace/temp-turboRepo/* /workspace/ && rm -rf /workspace/temp-turboRepo

# Clone the website app repo into /workspace/apps/website
RUN git clone https://github.com/akashtqb06/website.git apps/website

# Set the working directory to /workspace
WORKDIR /workspace

# Install npm dependencies for the app
RUN npm install

# Use a shell to keep the container running
CMD ["sh", "-c", "while :; do sleep 1; done"]
