# FC4 - ReactJS

## Starting the Web App Locally
` $ yarn start `

## Building the application
` $ yarn build `

## Building the container
` $ docker build -f Dockerfile -t $DOCKER_USER_ID/fc4-reactjs . `

## Running the container
` $ docker run -d -p 3000:80 $DOCKER_USER_ID/fc4-reactjs `

## Pushing the container
` $ docker push $DOCKER_USER_ID/fc4-reactjs `