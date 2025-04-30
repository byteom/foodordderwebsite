pipeline {
    agent any

    environment {
        // Docker Hub credentials from Jenkins credentials store
        DOCKER_HUB = credentials('docker-hub-credentials')
        
        // Image configuration - REPLACE 'byteom' with your Docker Hub username
        IMAGE_NAME = 'byteom/food-order-website'
        TAG = "${env.BUILD_ID}-${env.GIT_COMMIT.substring(0,7)}"
        
        // Deployment targets
        STAGING_SERVER = 'staging.example.com'  // Replace with your staging server
        PRODUCTION_SERVER = 'production.example.com'  // Replace with your production server
    }

    options {
        buildDiscarder(logRotator(numToKeepStr: '10'))
        timeout(time: 30, unit: 'MINUTES')
        retry(3)
    }

    stages {
        // Stage 1: Checkout code from GitHub
        stage('Checkout Code') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[
                        url: 'https://github.com/byteom/foodordderwebsite.git',
                        credentialsId: ''  // Add if using private repo
                    ]],
                    extensions: [[
                        $class: 'CleanBeforeCheckout'
                    ]]
                ])
                
                // Debug: Verify files are present
                sh '''
                    echo "Contents of workspace:"
                    ls -la
                    echo "Dockerfile contents:"
                    cat Dockerfile || true
                '''
            }
        }

        // Stage 2: Setup Docker environment
        stage('Setup Docker Environment') {
            steps {
                sh '''
                    # Install Docker Buildx if missing
                    if ! command -v docker-buildx &> /dev/null; then
                        echo "Installing Docker Buildx..."
                        mkdir -p ~/.docker/cli-plugins
                        curl -SL https://github.com/docker/buildx/releases/latest/download/buildx-linux-amd64 -o ~/.docker/cli-plugins/docker-buildx
                        chmod +x ~/.docker/cli-plugins/docker-buildx
                        docker buildx install
                    fi
                    
                    # Verify Docker setup
                    docker --version
                    docker buildx version
                    docker info
                '''
            }
        }

        // Stage 3: Build Docker image
        stage('Build Docker Image') {
            steps {
                script {
                    try {
                        sh """
                            docker buildx build \
                            --progress plain \
                            -t ${IMAGE_NAME}:${TAG} \
                            -t ${IMAGE_NAME}:latest \
                            --platform linux/amd64 \
                            --load \
                            .
                        """
                    } catch (Exception e) {
                        echo "Docker build failed: ${e}"
                        sh 'ls -la'  // Additional debugging
                        error("Docker build failed")
                    }
                }
            }
        }

        // Stage 4: Run tests (placeholder - add your actual tests)
        stage('Run Tests') {
            steps {
                sh '''
                    echo "Running tests..."
                    # Add your actual test commands here
                    # Example: npm test if you had Node.js tests
                    echo "No tests configured yet"
                '''
            }
        }

        // Stage 5: Push to Docker Hub
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

        // Stage 6: Deploy to staging environment
        stage('Deploy to Staging') {
            steps {
                sshagent(['staging-server-credentials']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no jenkins@${STAGING_SERVER} \
                        "docker pull ${IMAGE_NAME}:${TAG} && \
                        docker stop food-order-website || true && \
                        docker rm food-order-website || true && \
                        docker run -d -p 80:80 --name food-order-website ${IMAGE_NAME}:${TAG}"
                    """
                }
            }
        }

        // Stage 7: Approve and deploy to production
        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            steps {
                input message: 'Deploy to production?', ok: 'Deploy'
                
                sshagent(['production-server-credentials']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no jenkins@${PRODUCTION_SERVER} \
                        "docker pull ${IMAGE_NAME}:${TAG} && \
                        docker stop food-order-website || true && \
                        docker rm food-order-website || true && \
                        docker run -d -p 80:80 --name food-order-website ${IMAGE_NAME}:${TAG}"
                    """
                }
            }
        }
    }

    post {
        always {
            // Clean up workspace
            cleanWs()
            
            // Send build summary
            script {
                def duration = currentBuild.durationString.replace(' and counting', '')
                def msg = "Pipeline ${currentBuild.result}: ${env.JOB_NAME} #${env.BUILD_NUMBER}\n" +
                         "Duration: ${duration}\n" +
                         "URL: ${env.BUILD_URL}"
                
                // Uncomment to enable notifications
                // slackSend(color: currentBuild.result == 'SUCCESS' ? 'good' : 'danger', message: msg)
                // emailext body: msg, subject: "Jenkins Build ${currentBuild.result}", to: 'team@example.com'
            }
        }
        
        success {
            echo 'Pipeline completed successfully!'
            archiveArtifacts artifacts: '**/docker-build.log', allowEmptyArchive: true
        }
        
        failure {
            echo 'Pipeline failed!'
            // Additional failure handling can be added here
        }
        
        unstable {
            echo 'Pipeline marked as unstable'
        }
    }
}