pipeline {
    agent any

    tools {
        nodejs 'NodeJS-18'
    }

    environment {
        CI = 'true'
    }

    stages {
        stage('Verify NodeJS') 
        {
            steps {
                sh '''
                  node -v
                  npm -v
                '''
            }
        }

        stage('Checkout Code')
         {
            steps {
                git branch: 'main',
                    url: 'git@github.com:Jeetendrajd1986/PlaywrightSSHCode.git'
            }
         }

        stage('Install Dependencies')
         {
            steps {
                sh '''
                    npm install
                    npx playwright install
                '''
            }
         }

        stage('Run Playwright Tests') {
            steps {
                sh '''
                    npx playwright test ./tests/FileUpload.spec.js
                '''
            }
        }
    }

    post {
        always {
            echo 'Publishing Allure Report'
            allure([
                includeProperties: false,
                jdk: '',
                results: [[path: 'allure-results']]
            ])
        }

        success {
            echo 'Tests Passed ✅'
        }

        failure {
            echo 'Tests Failed ❌'
        }
    }
}
