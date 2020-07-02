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
                archiveArtifacts allowEmptyArchive: true, artifacts: 'frontend-test1/cypress/videos/**'
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
                sh '''
                    cd performance-tests/
                    rm test1.csv -Rf && rm html-reports/ -Rf
                    jmeter -n -t login-logout.jmx -l test1.csv -e -o html-reports/
                '''
                publishHTML([
                    allowMissing: false, 
                    alwaysLinkToLastBuild: false, 
                    keepAll: false,
                    reportDir: 'performance-tests/html-reports', 
                    reportFiles: 'index.html', 
                    reportName: 'JMeter dashboard report', 
                    reportTitles: ''
                    ])
            }
        }
    }

}