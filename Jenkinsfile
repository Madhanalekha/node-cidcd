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
        if exist app.pid taskkill /F /PID %< app.pid 2>NUL
        start /B cmd /c "npm start > app.log 2>&1"
        timeout /t 5 /nobreak
        '''
        }
        }
    }
}