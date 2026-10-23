pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Madhanalekha/node-cidcd.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test -- --runInBand'
            }
        }

        stage('Deploy') {
            steps {
                bat '''
                start "NodeApp" /MIN cmd /c "node app.js > app.log 2>&1"
                '''
            }
        }
    }
}