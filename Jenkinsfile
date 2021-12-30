pipeline
{
    agent any
    
    environment{
        dockerImage=''
        registery='minalabib07/test_image'
        registerycredentials='docker_hub_cred'
    }
    
    stages{
        stage('clean'){
            steps{
                script{
                    sh'docker rmi minalabib07/test_image'
                    }
                }
            }
        

        stage('build Docker image'){
            steps{
                script{
                        dir('./Web_Testing'){
                            dockerImage= docker.build registery
                    }
                }
            }
        }
        
        stage('uploading image'){
            steps{
                script{
                    docker.withRegistry( '', registerycredentials ) {
                    dockerImage.push()
                    }
                }
            }
        }
    }
    
}

