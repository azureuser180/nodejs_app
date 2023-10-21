pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'docker build -t ashraf313/nodejapp  .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_HUB_USER', passwordVariable: 'DOCKER_HUB_PASS')]) {
                    sh 'docker login -u $DOCKER_HUB_USER -p $DOCKER_HUB_PASS'
                }
                sh 'docker push ashraf313/nodejapp:latest'
            }
        }    
        
       
        stage('Deploying the container') {

        steps{
            sh "docker-compose down && docker-compose up -d"
         }    
    }		
               
               
           
                    
                
           
        
    }
}
