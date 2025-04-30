pipeline {
    agent any

    environment {
        // Use your actual Docker Hub username (replace 'byteom')
        DOCKER_HUB = credentials('docker-hub-credentials')
        IMAGE_NAME = 'byteom/food-order-website'  // MUST match your Docker Hub username
        TAG = "${env.BUILD_ID}"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/byteom/foodordderwebsite.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build with proper tagging
                    sh """
                        docker build -t ${IMAGE_NAME}:${TAG} .
                        docker tag ${IMAGE_NAME}:${TAG} ${IMAGE_NAME}:latest
                    """
                }
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                // Add your actual test commands here
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        // Push both tagged versions
                        docker.image("${IMAGE_NAME}:${TAG}").push()
                        docker.image("${IMAGE_NAME}:latest").push()
                    }
                }
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to staging...'
                // Add your deployment commands here
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}