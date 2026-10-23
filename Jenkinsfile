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
                schtasks /delete /tn "NodeCICDApp" /f >nul 2>&1
                schtasks /create /tn "NodeCICDApp" /tr "C:\\Program Files\\nodejs\\node.exe C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\node-cicd\\app.js" /sc ONCE /st 00:00 /ru SYSTEM /f
                schtasks /run /tn "NodeCICDApp"
                '''
            }
        }
    }
}