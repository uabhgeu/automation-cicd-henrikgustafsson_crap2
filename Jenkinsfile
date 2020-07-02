pipeline {    
    agent any
    stages {
        stage('Deploy/Build App') {
            steps {
                sh '''
                echo 'Application deployed successfully'
                '''
            }
        }
         stage('Frontend tests') {
            steps {
                sh '''
                    cd frontend-test1/
                    npm install && npm run cypress:run
                    echo 'Need to publish test results'
                    pwd
                    ls -lart
                '''
                publishHTML([
                    allowMissing: false, 
                    alwaysLinkToLastBuild: false, 
                    keepAll: false,
                    reportDir: 'frontend-test1/mochawesome-report', 
                    reportFiles: 'mochawesome.html', 
                    reportName: 'Frontend report', 
                    reportTitles: ''
                    ])
            }
        }
         stage('Backend tests') {
            steps {
                sh 'pwd'
                sh 'ls -lart'
            }
        }
         stage('Performance tests') {
            steps {
                sh 'pwd'
                sh 'ls -lart'
            }
        }
    }

}