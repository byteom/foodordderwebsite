pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = 'docker-hub-credentials'
        IMAGE_NAME = 'byteom/food-order-website'
        GIT_REPO_URL = 'https://github.com/byteom/foodordderwebsite.git'
        BRANCH_NAME = 'main'
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    echo "Checking out repository from GitHub..."
                    git url: GIT_REPO_URL, branch: BRANCH_NAME
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo "Building Docker image..."
                    sh '''
                        docker build -t $IMAGE_NAME .
                    '''
                }
            }
        }

        stage('Login to Docker Hub') {
            steps {
                script {
                    echo "Logging in to Docker Hub..."
                    withCredentials([usernamePassword(credentialsId: DOCKER_HUB_CREDENTIALS, passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        sh '''
                            docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD
                        '''
                    }
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    echo "Pushing Docker image to Docker Hub..."
                    sh '''
                        docker push $IMAGE_NAME
                    '''
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                script {
                    echo "Deploying application with Docker Compose..."
                    sh '''
                        docker-compose -f docker-compose.yml up -d
                    '''
                }
            }
        }
    }

    post {
        success {
            echo '✅ Build and Push to Docker Hub completed successfully! Deployment successful.'
        }
        failure {
            echo '❌ Build failed. Please check the logs above.'
        }
    }
}
