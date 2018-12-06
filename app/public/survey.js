$(document).ready(function () {
    var questions = [
        "Your mind is always buzzing with unexplored ideas and plans.",
        "Generally speaking, you rely more on your experience than your imagination.",
        "You find it easy to stay relaxed and focused even when there is some pressure.",
        "You rarely do something just out of sheer curiosity.",
        "People can rarely upset you.",
        "It is often difficult for you to relate to other people’s feelings.",
        "In a discussion, truth should be more important than people’s sensitivities.",
        "You rarely get carried away by fantasies and ideas.",
        "You think that everyone’s views should be respected regardless of whether they are supported by facts or not.",
        "You feel more energetic after spending time with a group of people."
    ];

    console.log("jquery working");

    //displaying questions to screen
    for (var i = 0; i < questions.length; i++) {
        var questionContainer = $("<div>");
        questionContainer.addClass("question-container");

        var questionHeader = $("<h2>");
        var questionNum = i + 1;
        questionHeader.text("Question " + questionNum);
        questionContainer.append(questionHeader);

        var prompt = questions[i];
        var question = $("<p>");
        question.text(prompt);
        questionContainer.append(question);

        var answerSelect = $("<select>");
        answerSelect.text("Select an Option");
        answerSelect.addClass("form-control");

        var defaultChoice = $("<option selected>");
        defaultChoice.text("Select an Option");
        answerSelect.append(defaultChoice);

        //adding answer choices, numbers 1-5
        for (var j = 0; j < 5; j++) {
            var answerChoice = $("<option>");
            var number = j + 1;
            answerChoice.text(number);

            //1 labeled "Strongly Disagree", 5 labeled "Strongly Agree"
            switch (number) {
                case 1:
                    answerChoice.text(number + " (Strongly Disagree)");
                    break;
                case 5:
                    answerChoice.text(number + " (Strongly Agree)");
                    break;
                default:
                    answerChoice.text(number);
            }
            answerSelect.append(answerChoice);
        }
        questionContainer.append(answerSelect);

        $("#questions").append(questionContainer);
        $("#questions").append("<br>");
    }
});