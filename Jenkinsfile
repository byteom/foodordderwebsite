pipeline {
    agent any

    environment {
        DOCKER_HUB = credentials('docker-hub-credentials')
        IMAGE_NAME = 'your-dockerhub-username/food-order-website'
        TAG = "${env.BUILD_ID}"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/your-username/food-order-website.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}:${TAG}")
                }
            }
        }

        stage('Run Tests') {
            steps {
                // Add your test commands here
                echo 'Running tests...'
                // Example: sh 'npm test' if you had tests
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        docker.image("${IMAGE_NAME}:${TAG}").push()
                        docker.image("${IMAGE_NAME}:latest").push()
                    }
                }
            }
        }

        stage('Deploy to Staging') {
            steps {
                script {
                    // SSH into staging server and deploy
                    sshagent(['staging-server-credentials']) {
                        sh """
                            ssh -o StrictHostKeyChecking=no user@staging-server \
                            "docker pull ${IMAGE_NAME}:${TAG} && \
                            docker stop food-order-website || true && \
                            docker rm food-order-website || true && \
                            docker run -d -p 80:80 --name food-order-website ${IMAGE_NAME}:${TAG}"
                        """
                    }
                }
            }
        }

        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            steps {
                input message: 'Deploy to production?', ok: 'Deploy'
                script {
                    // SSH into production server and deploy
                    sshagent(['production-server-credentials']) {
                        sh """
                            ssh -o StrictHostKeyChecking=no user@production-server \
                            "docker pull ${IMAGE_NAME}:${TAG} && \
                            docker stop food-order-website || true && \
                            docker rm food-order-website || true && \
                            docker run -d -p 80:80 --name food-order-website ${IMAGE_NAME}:${TAG}"
                        """
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up workspace...'
            cleanWs()
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}