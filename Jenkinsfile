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
                bat '''
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
                bat '''
                    npm install
                    npx playwright install
                '''
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat '''
                 if exist allure-results rmdir /s /q allure-results
                    npx playwright test ./tests/FileUpload.spec.js --project=chromium
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
