var app = angular.module('Dashboard.controllers', []);

wsAddr = "./rest/";
currentQuestion = 0;

/**
 * Master Controller
 */
app.controller('MasterCtrl', function($scope,  $cookieStore) {

    $scope.currentPage = "Loading..";

    $scope.$on('setTitle', function(event, args) {
        
        $scope.currentPage = args;
    });

    window.onresize = function() { $scope.$apply(); };
});


app.controller('CheckinController', function($scope,$rootScope, InfoService,$sce,
    $interval, $route, $routeParams ) {

        initQuiz();

        function initQuiz(){
            initQuestion();
            setQuestion(0); 
        }

        function initQuestion(){
            $scope.score = 0;
            $scope.feedback=false;
            $scope.questionCount = Questions.length ;
        }

        function setQuestion(iQuestion){

            $scope.feedback = false;
            currentQuestion = iQuestion;
            $scope.questionNumber = iQuestion;
            $scope.qData = Questions[iQuestion];
            $scope.viewMode = $scope.qData.type;
            $scope.qData.heroImg = "./img/"+iQuestion+".jpg";
            setProgressBar();
        }

        
        function setProgressBar(){
            
            widthPer = ($scope.questionNumber + 1) * 6.666666;

            $scope.widthBar={"width": widthPer+"%"};
              
        }

        function getCorrectAnswer(){

            retStr = "";
            for(i = 0 ; i < $scope.qData.answersCorrectness.length; i++){

                if($scope.qData.answersCorrectness[i]==true){

                    retStr = $scope.qData.answersText[i];

                }
            }

            return retStr;
        }

        $scope.selectAnswer = function (iSelect){

            if($scope.feedback == false){

                if($scope.qData.answersCorrectness[iSelect]){

                    $scope.feedbackMessage = "Congratulations, you answered Question " + ($scope.questionNumber  + 1) + " correctly!";
                    $scope.score = $scope.score + 1;
                    
                }else{

                    $scope.feedbackMessage = "Sadly, you answered question " + ($scope.questionNumber  + 1) + " incorrectly. The correct answer is " + getCorrectAnswer();
                }
                
                $scope.feedback = true;
                
            } else{

                alert("You have aleady answered this question, please move to the next one.");
            }
            
        }

        $scope.nextQuestion = function (){

            nextQuestionNumber = currentQuestion +1;
            
            if(nextQuestionNumber < Questions.length){

                setQuestion(nextQuestionNumber);
            }else{
                $scope.viewMode = 5;
            }

        }

        $rootScope.initQuizFunc = function(){
            initQuiz();
        }

    
});

