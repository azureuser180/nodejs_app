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
        
       
        stage('Cleanup and Restart') {
        // Stop and remove all containers (assuming you have the necessary permissions)
        sh 'docker stop $(docker ps -q)'
        sh 'docker rm $(docker ps -aq)'

        // Restart Jenkins (you may need to adapt this to your Jenkins setup)
        sh 'docker run --name con1 -p 3000:3000 ashraf313/nodejapp:latest'
    }		
               
               
           
                    
                
           
        
    }
}
