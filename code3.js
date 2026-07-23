// Muhammad Ahmed
// JavaScript Assignment 03
// Date: 23-7-2026


// ==============================
// Q1 Football Team Selection System
// ==============================

var players = ["Ali", "Ahmed", "Hamza", "Usman", "Bilal", "Ayan"]

var fitnessScores = [75, 48, 90, 66, 40, 81]

var selectedPlayers = ""
var rejectedPlayers = ""

var selected = 0
var rejected = 0

var totalScore = 0

var highestScore = fitnessScores[0]
var lowestScore = fitnessScores[0]

var highestPlayer = players[0]
var lowestPlayer = players[0]


// Function to show player fitness scores
function showPlayers(){

    for(var i = 0; i < players.length; i++){

        alert(players[i] + " Fitness Score: " + fitnessScores[i])
    }
}


// Function to select and reject players
function selectPlayers(){

    for(var i = 0; i < players.length; i++){

        totalScore = totalScore + fitnessScores[i]

        if(fitnessScores[i] >= 60){

            selected = selected + 1
            selectedPlayers = selectedPlayers + players[i] + ", "
        }
        else{

            rejected = rejected + 1
            rejectedPlayers = rejectedPlayers + players[i] + ", "
        }
    }
}


// Function to find highest and lowest score
function findScores(){

    for(var i = 0; i < fitnessScores.length; i++){

        if(fitnessScores[i] > highestScore){

            highestScore = fitnessScores[i]
            highestPlayer = players[i]
        }

        if(fitnessScores[i] < lowestScore){

            lowestScore = fitnessScores[i]
            lowestPlayer = players[i]
        }
    }
}


// Function Usage
showPlayers()
selectPlayers()
findScores()


var averageScore = totalScore / fitnessScores.length

var roundedAverage = Math.round(averageScore)

var teamPerformance = ""


if(roundedAverage >= 70){

    teamPerformance = "Team Has Good Fitness"
}
else{

    teamPerformance = "Team Needs Improvement"
}


// Football Report
alert(
    "FOOTBALL TEAM REPORT\n\n" +
    "Selected Players: " + selected + "\n" +
    "Rejected Players: " + rejected + "\n\n" +
    "Selected Player Names: " + selectedPlayers + "\n" +
    "Rejected Player Names: " + rejectedPlayers + "\n\n" +
    "Highest Fitness Score: " + highestScore + "\n" +
    "Highest Score Player: " + highestPlayer + "\n\n" +
    "Lowest Fitness Score: " + lowestScore + "\n" +
    "Lowest Score Player: " + lowestPlayer + "\n\n" +
    "Total Fitness Score: " + totalScore + "\n" +
    "Average Fitness Score: " + roundedAverage + "\n" +
    "Team Performance: " + teamPerformance
)


// ==============================
// Q2 Cricket Tournament Analysis
// ==============================

var scores = [45, 67, 89, 34, 90, 76, 54, 61]

var total = 0
var passed = 0
var failed = 0

var highest = scores[0]
var lowest = scores[0]


// Function to analyze cricket scores
function analyzeScores(){

    var i = 0

    while(i < scores.length){

        total = total + scores[i]

        if(scores[i] >= 50){

            passed = passed + 1
        }
        else{

            failed = failed + 1
        }

        if(scores[i] > highest){

            highest = scores[i]
        }

        if(scores[i] < lowest){

            lowest = scores[i]
        }

        i = i + 1
    }
}


// Function Usage
analyzeScores()


var average = total / scores.length

var roundedAverage = Math.round(average)

var performance = ""


if(roundedAverage >= 70){

    performance = "Excellent Team Performance"
}
else{

    performance = "Team Needs Improvement"
}


// Cricket Performance Report
alert(
    "CRICKET TOURNAMENT PERFORMANCE REPORT\n\n" +
    "Total Players: " + scores.length + "\n" +
    "Total Score: " + total + "\n" +
    "Average Score: " + roundedAverage + "\n" +
    "Highest Score: " + highest + "\n" +
    "Lowest Score: " + lowest + "\n" +
    "Passed Players: " + passed + "\n" +
    "Failed Players: " + failed + "\n" +
    "Team Performance: " + performance
)