/** Responsive Navbar **/

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/** Smooth Scrolling**/
$(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

/** Main Diagnostic Quiz Function **/

(function() {
    var questions = [

        //40 out of 200 questions for Diagnostic
        //Part 1: Photographs 2 (/10)
        //Part 2: Question-Response 6 (/30)
        //Part 3: Conversations 6 (/30)
        //Part 4: Talks 7 (/30)
        //Part 5: Incomplete Sentences 8 (/40)
        //Part 6: Text Completion 2 (/12)
        //Part 7: Reading Comprehension 9 (/48)

        //1 of 40
        {
            qType: "Part 1: Photographs",
            question: "Listen to the recording and choose the best answer.",
            choices: ["A", "B", "C", "D"],
            correctAnswer: 0,
            audio: "1.mp3"
        },
        //2 of 40
        {
            qType: "Part 1: Photographs",
            question: "Listen to the recording and choose the best answer.",
            choices: ["A", "B", "C", "D"],
            correctAnswer: 0,
            audio: "1.mp3"
        },

        //22 of 40
        {
            qType: "Part 5: Incomplete Sentences",
            question: "Automotive flooring companies _____ a lot of inventory on most car dealer lots across the country.",
            choices: ["financing", "financial", "finance", "financials"],
            image: "img/forest160w.jpg",
            correctAnswer: 2
        },
        //23 of 40
        {
            qType: "Part 5: Incomplete Sentences",
            question: "The trader made sure that his platform was fully _____ every morning before he started looking for trades to enter.",
            choices: ["function", "functional", "functioning", "functioned"],
            correctAnswer: 1,
            //image: "img/forest.jpg"
        },
        //24 of 40
        {
            qType: "Part 5: Incomplete Sentences",
            question: "The local Chamber of Commerce is developing a strategic _____ campaign to try to attract more business owners to their membership.",
            choices: ["market", "marketed", "marketing", "markets"],
            correctAnswer: 2,
            //image: "img/forest.jpg"
        },
        //25 of 40
        {
            qType: "Part 5: Incomplete Sentences",
            question: "She sang quite _____ even though she had been traveling all night and was a bit groggy from her trip.",
            choices: ["some", "many", "few", "well"],
            correctAnswer: 3,
            //image: "img/forest.jpg"
        },
        //26 of 40
        {
            qType: "Part 5: Incomplete Sentences",
            question: "Many stock _____ predict that the company's share price is wildly overalued, with a few predicting further a price drop of 25% or more in the coming quarter.",
            choices: ["analyze", "analysis", "analysts", "analyses"],
            correctAnswer: 2,
            image: "img/forest160w.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat interdum mauris et volutpat. Ut gravida dolor sed turpis accumsan euismod. Pellentesque condimentum purus a laoreet semper. Quisque eleifend viverra vulputate. Vivamus rutrum arcu et arcu interdum gravida. Quisque id metus commodo, imperdiet sem non, semper justo. Nam dictum in purus sit amet dignissim. Integer auctor placerat felis eget vehicula. Ut vitae augue in arcu imperdiet vehicula. Morbi placerat sodales blandit. Suspendisse ac pharetra quam."
        },
        //27 of 40
        {
            qType: "Part 5: Incomplete Sentences",
            question: "She was _____ upset that her carpool cohort wouldn't come 30 minutes earlier to pick her up on Friday.",
            choices: ["possible", "positive", "likely", "most of"],
            correctAnswer: 2,
            image: "img/ocean160.jpg",
            content: "Consectetur adipiscing elit. Integer feugiat interdum mauris et volutpat. Ut gravida dolor sed turpis accumsan euismod. Pellentesque condimentum purus a laoreet semper. Quisque eleifend viverra vulputate. Vivamus rutrum arcu et arcu interdum gravida. Quisque id metus commodo, imperdiet sem non, semper justo. Nam dictum in purus sit amet dignissim. Integer auctor placerat felis eget vehicula. Ut vitae augue in arcu imperdiet vehicula. Morbi placerat sodales blandit. Suspendisse ac pharetra quam."
        },
        //28 of 40
        {
            qType: "Part 5: Incomplete Sentences",
            question: "_____ paid maternity and paternity leave were both described as perks of the job before he was hired, Stephen was understandably annoyed when he read his work agreement that there was no such language in the offering document.",
            choices: ["Meanwhile", "Most", "Since", "While"],
            correctAnswer: 2,
            image: "img/ocean160.jpg",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat interdum mauris et volutpat. Ut gravida dolor sed turpis accumsan euismod. Pellentesque condimentum purus a laoreet semper. Quisque eleifend viverra vulputate. Vivamus rutrum arcu et arcu interdum gravida. Quisque id metus commodo, imperdiet sem non, semper justo. Nam dictum in purus sit amet dignissim. Integer auctor placerat felis eget vehicula. Ut vitae augue in arcu imperdiet vehicula. Morbi placerat sodales blandit. Suspendisse ac pharetra quam."
        },
        //29 of 40
        {
            qType: "Part 5: Incomplete Sentences",
            question: "The potential partnership between the two companies crumbled under the weight of a personality conflict _____ the two CEOs.",
            choices: ["among", "through", "of", "between"],
            correctAnswer: 3,
            //image: "img/ocean.jpg",
            //content: "",
        },

        //30 of 40
        {
            qType: "Part 6: Text Completion",
            question: "What is the correct word that belongs in the '30' slot?",
            choices: ["offer", "offers", "offering", "offered"],
            correctAnswer: 2,
            //image: "img/ocean.jpg",
            content: "Dear Mr. Anderson: Thank you very much for ____30____ me an opportunity to interview for the Sales Representative position at Ramarcher. This letter is to ____31____ our meeting time at 9:00 a.m. on Tuesday, March 18, 2018. I am very excited to have the chance to discuss my qualifications and the needs of your organization.  Thank you for your time and consideration. I look forward to meeting you.  Sincerely, Carolyn Vandergeld",
        },

        //31 of 40
        {
            qType: "Part 6: Text Completion",
            question: "What is the correct word that belongs in the '31' slot?",
            choices: ["confirm", "deny", "revoke", "start"],
            correctAnswer: 0,
            //image: "img/ocean.jpg",
            content: "Dear Mr. Anderson: Thank you very much for ____30____ me an opportunity to interview for the Sales Representative position at Ramarcher. This letter is to ____31____ our meeting time at 9:00 a.m. on Tuesday, March 18, 2018. I am very excited to have the chance to discuss my qualifications and the needs of your organization.  Thank you for your time and consideration. I look forward to meeting you.  Sincerely, Carolyn Vandergeld",
        },

        //32 of 40
        {
            qType: "Part 7: Reading Comprehension",
            question: "Which of the following is not a requirement for this position?",
            choices: ["Past history of working as a nanny", "Having a dependable nature", "Willingness to work every weekend", "Ability to care for multiple children"],
            content: "Experienced Nanny Wanted: We are a professional couple looking for a caring, responsible, and experienced nanny to care for our two young children - a three-year-old boy and a 5-month old girl. You will be a nanny with at least three years experience in nannying, child care, or au pair work. You must love children and be mature, reliable, trustworthy, punctual and well presented. You will be required to work weekdays from 9am to 4pm, with occasional evenings/weekends for which you will be paid overtime. We are a non-smoking household and would prefer a non-smoker.",
            correctAnswer: 2,
        },
        //33 of 40
        {
            qType: "Part 7: Reading Comprehension",
            question: "Which of the following is a desired, but not necessary, qualification for an applicant to this job?",
            choices: ["He/She must have experience working with children.", "He/She must not smoke.", "The applicant must be able to present himself/herself well.", "He/She must be able to work evenings at least some of the time."],
            content: "Experienced Nanny Wanted: We are a professional couple looking for a caring, responsible, and experienced nanny to care for our two young children - a three-year-old boy and a 5-month old girl. You will be a nanny with at least three years experience in nannying, child care, or au pair work. You must love children and be mature, reliable, trustworthy, punctual and well presented. You will be required to work weekdays from 9am – 4pm, with occasional evenings/weekends for which you will be paid overtime. We are a non-smoking household and would prefer a non-smoker.",
            correctAnswer: 1,
        },
        //34 of 40
        {
            qType: "Part 7: Reading Comprehension",
            question: "Which of the following do we know is true as a result of this article?",
            choices: ["France had won the World Cup one other time before Sunday.", "Violence usually accompanies World Cup victory celebrations.", "Celebrations were held throughout France after the World Cup victory.", "Croatia and France are long-time football rivals."],
            content: "France won the World Cup for the second time last Sunday, beating Croatia 4–2 in Russia. There were largely peaceful celebrations around Paris but some turned violent. Fans threw flares and fireworks at riot police who tried to disperse them. The French football players arrived home the following day and showed off their World Cup trophy while taking part in an open-top bus victory parade along the Champs-Elysees in Paris. Hundreds of thousands of people gathered to welcome back the country’s champions. There was even a fly-past of nine jets, trailing blue, white and red smoke. The jets took off and returned to Paix de Deus Air Force base, which is located in Nancy.  The football players then went to a garden party hosted by the President Emmanuel Macron.",
            correctAnswer: 0,
        },
        //35 of 40
        {
            qType: "Part 7: Reading Comprehension",
            question: "Where would you find the Champs-Elysees?",
            choices: ["Paris", "Croatia", "Russia", "Nancy"],
            content: "France won the World Cup for the second time last Sunday, beating Croatia 4–2 in Russia. There were largely peaceful celebrations around Paris but some turned violent. Fans threw flares and fireworks at riot police who tried to disperse them. The French football players arrived home the following day and showed off their World Cup trophy while taking part in an open-top bus victory parade along the Champs-Elysees in Paris. Hundreds of thousands of people gathered to welcome back the country’s champions. There was even a fly-past of nine jets, trailing blue, white and red smoke. The jets took off and returned to Paix de Deus Air Force base, which is located in Nancy.  The football players then went to a garden party hosted by the President Emmanuel Macron.",
            correctAnswer: 0,
        },
        //36 of 40
        {
            qType: "Part 7: Reading Comprehension",
            question: "Which of the following conclustions can you reach as a result of this article?",
            choices: ["Winning the World Cup is a routine event for France.", "A World Cup victory brings about a great deal of national pride.", "Everone in France is a football fan.", "The French President is using the World Cup victory in hopes of aiding his upcoming election campaign."],
            content: "France won the World Cup for the second time last Sunday, beating Croatia 4–2 in Russia. There were largely peaceful celebrations around Paris but some turned violent. Fans threw flares and fireworks at riot police who tried to disperse them. The French football players arrived home the following day and showed off their World Cup trophy while taking part in an open-top bus victory parade along the Champs-Elysees in Paris. Hundreds of thousands of people gathered to welcome back the country’s champions. There was even a fly-past of nine jets, trailing blue, white and red smoke. The jets took off and returned to Paix de Deus Air Force base, which is located in Nancy.  The football players then went to a garden party hosted by the President Emmanuel Macron.",
            correctAnswer: 1,
        },
        //37 of 40
        {
            qType: "Part 7: Reading Comprehension",
            question: "What is this advertisement for?",
            choices: ["To announce an open position in a company", "To seek a purchaser for a pre-existing business", "To seek a partner to help in establishing a new business", "To attempt to find someone who can provide information on how to better run the company"],
            content: "Established New Hampshire Commercial/Retail Tire Business located in downtown Waterford area.  Profits & Sales are excellent and have increased each year since we launched in 2000.  Management will stay on to assist new ownership, if desired.  Serious Inquiries Only.  Call Matt for more information @ 603.555.5559.",
            correctAnswer: 1,
        },
        //38 of 40
        {
            qType: "Part 7: Reading Comprehension",
            question: "Which of the following is not a benefit of the proposal being made in the advertisement?",
            choices: ["The company is profitable.", "The company is not new and has been around for awhile.", "There is the possibility of assistance from the current owners.", "Information about the business will be disclosed to anyone."],
            content: "Established New Hampshire Commercial/Retail Tire Business located in downtown Waterford area.  Profits & Sales are excellent and have increased each year since we launched in 2000.  Management will stay on to assist new ownership, if desired.  Serious Inquiries Only.  Call Matt for more information @ 603.555.5559.",
            correctAnswer: 3,
        },
        //39 of 40
        {
            qType: "Part 7: Reading Comprehension",
            question: "What is the purpose of this letter?",
            choices: ["To show support for a family member who is running for union president", "To endorse a long-time friend and fellow union member in his run for state office", "To encourage readers to join a union", "To describe DeRosa's background"],
            content: "I'm supporting my union brother Tom Delnicki for state representative. I served in the following positions as a proud union member:  business manager of Local 91 Elevator Constructions Union, I was voted as the president of the State Building Trades, appointed regional director of International Elevator Constructors of the Northeast Region, served as the labor member fo the State of Connecticut Elevator Licensing Board and became the chairman of the Connecticut Licensing Board. I have lived in South Windsor for over 50 years, raised a family and am retired.  I have known Delnicki for over 20 years and am impressed by his ability to work with everyone no matter who they are.  He has done a great job over the years and will make a fine state representative. The one thing that stands out in my mind is the fact that he is a union brother, having been a union member for over 30 years.  Ask Delnicki to see his union card, and I'll bet he has it in his wallet. Ask his opponent if he has a union card, and I'll bet he doesn't.  If you are a union brother or sister, I ask you to vote for my friend and union brother Delnicki. John DeRosa, South Windsor",
            correctAnswer: 1,
        },

        //40 of 40
        {
            qType: "Part 7: Reading Comprehension",
            question: "What is the most important reason that DeRosa cites for his support of Delnicki?",
            choices: ["Their close relationship as members of the same family", "DeRosa's experience in the public health sector", "The fact that Delnicki has been part of a union for more than three decades", "The fact that Delnick's opponent is not a long-time union member"],
            content: "I'm supporting my union brother Tom Delnicki for state representative. I served in the following positions as a proud union member:  business manager of Local 91 Elevator Constructions Union, I was voted as the president of the State Building Trades, appointed regional director of International Elevator Constructors of the Northeast Region, served as the labor member fo the State of Connecticut Elevator Licensing Board and became the chairman of the Connecticut Licensing Board. I have lived in South Windsor for over 50 years, raised a family and am retired.  I have known Delnicki for over 20 years and am impressed by his ability to work with everyone no matter who they are.  He has done a great job over the years and will make a fine state representative. The one thing that stands out in my mind is the fact that he is a union brother, having been a union member for over 30 years.  Ask Delnicki to see his union card, and I'll bet he has it in his wallet. Ask his opponent if he has a union card, and I'll bet he doesn't.  If you are a union brother or sister, I ask you to vote for my friend and union brother Delnicki. John DeRosa, South Windsor",
            correctAnswer: 2,
        },
    ];

    var questionCounter = 0; //Tracks question number
    var selections = []; //Array containing user choices
    var quiz = $('#quiz'); //Quiz div object
    var defaultQuestionContent;
    defaultQuestionContent = $("#content").text()

    // Display initial question
    displayNext();

    // Click handler for the 'next' button
    $('#next').on('click', function(e) {
        e.preventDefault();

        // Suspend click listener during fade animation
        if (quiz.is(':animated')) {
            return false;
        }
        choose();

        // If no user selection, progress stopped and pop-up alert
        if (isNaN(selections[questionCounter])) {
            swal('Please make a selection.', 'Choose 1 of the 4 choices.', "warning");
        } else {
            questionCounter++;
            displayNext();
        }
    });

    // Click handler for the 'prev' button
    $('#prev').on('click', function(e) {
        e.preventDefault();

        if (quiz.is(':animated')) {
            return false;
        }
        choose();
        questionCounter--;
        displayNext();
    });

    // Click handler for the 'Start Over' button
    $('#start').on('click', function(e) {
        e.preventDefault();

        if (quiz.is(':animated')) {
            return false;
        }
        questionCounter = 0;
        selections = [];
        displayNext();
        $('#start').hide();
    });

    // Animates buttons on hover
    $('.button').on('mouseenter', function() {
        $(this).addClass('active');
    });
    $('.button').on('mouseleave', function() {
        $(this).removeClass('active');
    });

    // Creates and returns the div that contains the questions and
    // the answer selections
    function createQuestionElement(index) {
        var qElement = $('<div>', {
            id: 'question'
        });

        var header = $('<h2>Question ' + (index + 1) + ':</h2>');
        qElement.append(header);

        var textProblem = $("<p>").append(questions[index].textProblem);
        qElement.append(textProblem);

        var question = $('<p>').append(questions[index].question);
        qElement.append(question);

        var radioButtons = createRadios(index);
        qElement.append(radioButtons);

        return qElement;
    }

    // Creates a list of the answer choices as radio inputs
    function createRadios(index) {
        var radioList = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < questions[index].choices.length; i++) {
            item = $('<li>');
            input = '<label><input type="radio" name="answer" value=' + i + ' />';
            input += questions[index].choices[i];
            input += "</label>";
            item.append(input);
            radioList.append(item);
        }
        return radioList;
    }

    // Reads the user selection and pushes the value to an array
    function choose() {
        selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }

    // Displays next requested element
    function displayNext() {
        quiz.fadeOut(function() {
            $('#question').remove();

            if (questionCounter < questions.length) {
                var question = questions[questionCounter]

                // Show 'image' defined in question object
                $("#image").hide();
                if (typeof question.image !== "undefined") {
                    $("#image img").attr("src", question.image);
                    $("#image").show();
                }

                if (typeof question.audio !== "undefined") {
                    $("#audio").show()
                    $("#audio audio").attr("src", 'audio/' + question.audio);
                    //$("#audio audio")[0].play();
                } else {
                    $("#audio").hide()
                }

                // Show 'content' defined in question object
                console.log(typeof question.content, defaultQuestionContent)
                if (typeof question.content === "undefined") {
                    $("#content").text(defaultQuestionContent)
                } else {
                    $("#content").text(question.content)
                }

                // Show 'qType' defined in question object
                console.log(typeof question.qType, defaultQuestionContent)
                if (typeof question.qType === "undefined") {
                    $("#qType").text(defaultQuestionContent)
                } else {
                    $("#qType").text(question.qType)
                }

                var nextQuestion = createQuestionElement(questionCounter);
                quiz.append(nextQuestion).fadeIn();
                if (!(isNaN(selections[questionCounter]))) {
                    $('input[value=' + selections[questionCounter] + ']').prop('checked', true);
                }

                // Controls display of 'prev' button
                if (questionCounter === 1) {
                    $('#prev').show();
                } else if (questionCounter === 0) {

                    $('#prev').hide();
                    $('#next').show();
                }
            } else {
                var scoreElem = displayScore();
                quiz.append(scoreElem).fadeIn();
                $('#next').hide();
                $('#prev').hide();
                $('#start').show();
            }
        });
    }

    // Computes score and returns a paragraph element to be displayed
    function displayScore() {
        var score = $('<p>', {
            id: 'question'
        });

        var numCorrect = 0;
        for (var i = 0; i < selections.length; i++) {
            if (selections[i] === questions[i].correctAnswer) {
                numCorrect++;
            }
        }

        score.append('You got ' + numCorrect + ' questions out of ' +
            questions.length + ' right.');
        return score;
    }
})();