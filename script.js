const quizData = [
      {
        question: "What is the Quality Dimension that resolves the question 'What data records are duplicated?'",
        answers: [
          "Uniqueness",
          "Completeness",
          "Consistency",
          "Accuracy",
          "Conformity"
        ],
        correctIndexes: [0],
        type: "single"
      },
      {
        question: "What is the Quality Dimension that resolves the question 'What data is missing?'",
        answers: [
          "Uniqueness",
          "Completeness",
          "Consistency",
          "Accuracy",
          "Conformity"
        ],
        correctIndexes: [1],
        type: "single"
      },
      {
        question: "What is the Quality Dimension that resolves the question 'What data gives conflicting information?'",
        answers: [
          "Uniqueness",
          "Completeness",
          "Consistency",
          "Accuracy",
          "Conformity"
        ],
        correctIndexes: [2],
        type: "single"
      },
      {
        question: "What is the Quality Dimension that resolves the question 'What data is incorrect or out of date?'",
        answers: [
          "Uniqueness",
          "Completeness",
          "Consistency",
          "Accuracy",
          "Conformity"
        ],
        correctIndexes: [3],
        type: "single"
      },
      {
        question: "What is the Quality Dimension that resolves the question 'What data is stored in a non-standard format?'",
        answers: [
          "Uniqueness",
          "Completeness",
          "Consistency",
          "Accuracy",
          "Conformity"
        ],
        correctIndexes: [4],
        type: "single"
      },
      {
        question: "Which of the following is an outcome for managing your data quality?",
        answers: [
          "Create automated checks for adherence to rules",
          "Reduce business-process interruptions through increased visibility and metrics",
          "Develop methods to inform stakeholders of changes",
          "Remediate data quality issues"
        ],
        correctIndexes: [1],
        type: "single"
      },
      {
        question: "Which SKP Asset is used to define business data requirements that become the foundation for measuring data quality?",
        answers: ["Business Processes", "Terms", "Policies", "Rules"],
        correctIndexes: [3],
        type: "single"
      },
      {
        question: "Which persona defines rules?",
        answers: [
          "Business User (Bavita)",
          "Data Steward (Diane)",
          "Developer (Dane)"
        ],
        correctIndexes: [0],
        type: "single"
      },
      {
        question: "Which persona defines rule enforcements?",
        answers: [
          "Business User (Bavita)",
          "Data Steward (Diane)",
          "Developer (Dane)"
        ],
        correctIndexes: [1],
        type: "single"
      },
      {
        question: "Which persona writes technical code for implementations?",
        answers: [
          "Business User (Bavita)",
          "Data Steward (Diane)",
          "Developer (Dane)"
        ],
        correctIndexes: [2],
        type: "single"
      },
      {
        question: "Which Quality element is used to define business data requirements?",
        answers: ["Rules", "Enforcements", "Implementations", "Subject Area"],
        correctIndexes: [0],
        type: "single"
      },
      {
        question: "Which Quality element is used to define validation requirements?",
        answers: ["Rules", "Enforcements", "Implementations", "Subject Area"],
        correctIndexes: [1],
        type: "single"
      },
      {
        question: "Which Quality element is used to execute validation logic?",
        answers: ["Rules", "Enforcements", "Implementations", "Subject Area"],
        correctIndexes: [2],
        type: "single"
      },
      {
        question: "Which Quality element organizes rules?",
        answers: ["Rules", "Enforcements", "Implementations", "Subject Area"],
        correctIndexes: [3],
        type: "single"
      },
      {
        question: "Select the correct examples of Quality elements.",
        answers: [
          "Business Concept: Sales Order",
          "Business Process: Show customers with missing email",
          "Rule: Customer must have valid email",
          "Enforcement: Order-to-Cash Invoicing"
        ],
        correctIndexes: [0, 2],
        type: "multiple"
      },
      {
        question: "Which items are TRUE about Breadcrumbs?",
        answers: [
          "Navigate back to related elements",
          "Show relationships between assets",
          "Navigate to dashboard",
          "Navigate to help topics"
        ],
        correctIndexes: [0, 1],
        type: "multiple"
      },
      {
        question: "Which Quality Asset is not associated with any system (system agnostic)?",
        answers: ["Rules", "Enforcements", "Implementations", "Subject Area"],
        correctIndexes: [0],
        type: "single"
      },
      {
        question: "Which Quality Asset identifies the system that the rule should be enforced against?",
        answers: ["Rules", "Enforcements", "Implementations", "Subject Area"],
        correctIndexes: [1],
        type: "single"
      },
      {
        question: "Which Quality Asset defines exactly how the data is validated to determine whether it's in error?",
        answers: ["Rules", "Enforcements", "Implementations", "Subject Area"],
        correctIndexes: [2],
        type: "single"
      },
      {
        question: "Which statement is TRUE about the role the System asset plays in the data quality process?",
        answers: [
          "The System asset allows you to define Business Rules that validate the quality of your data.",
          "You can use the System asset to profile your data to pinpoint areas where you might have bad data.",
          "The System asset is where you create Enforcements.",
          "Systems cannot be related to other assets."
        ],
        correctIndexes: [1],
        type: "single"
      },
      {
        question: "Scanning the system brings in:",
        answers: [
          "Enforcements and implementations",
          "Table data",
          "Metadata like schema and tables",
          "Connectors"
        ],
        correctIndexes: [2],
        type: "single"
      },
      {
        question: "If adding a new system, must you create a connection before scanning metadata?",
        answers: ["True", "False"],
        correctIndexes: [1],
        type: "single"
      },
      {
        question: "Correct order to implement a single Rule.",
        answers: [
          "Navigate Implementation → Verify queries → Run → Review message",
          "Run → Verify → Navigate → Message",
          "Verify → Run → Navigate → Message"
        ],
        correctIndexes: [0],
        type: "single"
      },
      {
        question: "Orchestrate workflows are a collection of one or more Tasks. These can be Data Quality tasks, Replication tasks, SQL tasks, and so on.",
        answers: ["True", "False"],
        correctIndexes: [0],
        type: "single"
      },
      {
        question: "How do you verify an Implementation ran successfully?",
        answers: [
          "Check Execution Results (Overview)",
          "Check Rule page",
          "Check Enforcement page",
          "Check Execution History"
        ],
        correctIndexes: [0, 3],
        type: "multiple"
      },
      {
        question: "Which statements are TRUE about Orchestrate?",
        answers: [
          "Workflows can be based on one or more Rules, Subject Areas, Datasets, or Business Processes.",
          "A Workflow allows you to run a rule one time on demand.",
          "You can create a Task that will run Implementations for Rules tied to a Business Process every Sunday evening.",
          "Click the empty Search bar and press Enter, and then select the receive notifications via Email check box on the Search Results page."
        ],
        correctIndexes: [0, 2],
        type: "multiple"
      },
      {
        question: "Which assets display report details?",
        answers: [
          "Rule, Enforcement, Implementation",
          "Enforcement, Term",
          "Rule, Business Concept",
          "Rule, Implementation, Subject Area, Dataset, Business Process"
        ],
        correctIndexes: [3],
        type: "single"
      },
      {
        question: "By default, Data Quality scores automatically roll up to the Subject Area, Datasets, and Business Processes. ",
        answers: ["True", "False"],
        correctIndexes: [1],
        type: "single"
      },
      {
        question: "Execution History is viewed on which asset?",
        answers: ["Enforcements", "Rules", "Implementations", "Processes"],
        correctIndexes: [2],
        type: "single"
      },
      {
        question: "Which statements are TRUE about SKP?",
        answers: [
          "Unified platform for data management",
          "Standalone services elsewhere",
          "Accessed via browser URL",
          "Cannot access APIs"
        ],
        correctIndexes: [0, 2],
        type: "multiple"
      },
      {
        question: "\'Current data quality status and trends by week, month, and year\' is associated with which worksheet?",
        answers: [
          "Overview",
          "Download by Business Process",
          "Rules by Business Process",
          "Execution History"
        ],
        correctIndexes: [0],
        type: "single"
      },
      {
        question: "\'Rules, Enforcements, and Implementations for a Business Process\' is associated with which worksheet?",
        answers: [
          "Rules by Dataset",
          "Download by Business Process",
          "Rules by Business Process",
          "Download by Dataset"
        ],
        correctIndexes: [2],
        type: "single"
      },
      {
        question: "\'Past quality scores in table and graph format\' is associated with which worksheet?",
        answers: [
          "Rules by Dataset",
          "Execution History",
          "Overview",
          "Download by Business Process"
        ],
        correctIndexes: [1],
        type: "single"
      },
      {
        question: "\'Business Processes, Rules, Enforcements, and Implementations in one table.\' is associated with which worksheet?",
        answers: [
          "Rules by Dataset",
          "Execution History",
          "Overview",
          "Download by Business Process"
        ],
        correctIndexes: [3],
        type: "single"
      },
      {
        question: "How can you access the Quality Dashboard?",
        answers: [
          "Click Quality Overview from the Report Hub card on the SKP Home page.",
          "Select Syniti Knowledge Platform - Quality Overview from the View My Dashboards card.",
          "Click Dashboards from the SKP Menu.",
          "Select Data Quality from the SKP Menu, and then select Overview from the drop-down list."
        ],
        correctIndexes: [0],
        type: "single"
      },
      {
        question: "Select the TRUE statements about what drives the Quality Dashboard?",
        answers: [
          "Quality Scores drive the percentages on the dashboard. ",
          "Thresholds drive the coloration on the dashboard. ",
          "When a Rule is approved, then the quality score is calculated.",
          "If the score for an Implementation is Red, then the score for the associated Business Process will always be Green. "
        ],
        correctIndexes: [0, 1],
        type: "multiple"
      },
      {
        question: "Both Systems of Enforcement and Implementation datastore must be the same.",
        answers: [
          "True",
          "False"
        ],
        correctIndexes: [1],
        type: "single"
      },
      {
        question: "Which of the following is used by a connection as a bridge to communicate between systems?",
        answers: [
          "Data Store",
          "SKP Connector",
          "System Link",
          "Implementation"
        ],
        correctIndexes: [1],
        type: "single"
      },
      {
        question: "Which of the following statements are TRUE?",
        answers: [
          "An Implementation is an extension of an enforcement.",
          "An Enforcement is an Extension of an Implementation.",
          "You perform scans for profiling with an SKP System Datastore.",
          "You can only have one SKP Connector per System Connection."
        ],
        correctIndexes: [0, 2],
        type: "multiple"
      },
      {
        question: "Both Systems of Enforcement and Implementation datastore must be the same.",
        answers: [
          "True",
          "False"
        ],
        correctIndexes: [1],
        type: "single"
      },
      {
        question: "What element defines a standard that is unrelated to any particular system?",
        answers: [
          "Rule",
          "Business Process",
          "Business Concept",
          "Relationship"
        ],
        correctIndexes: [0],
        type: "single"
      },
      {
        question: "What element is used to measure quality for a particular term?",
        answers: [
          "Rule",
          "Business Process",
          "Business Concept",
          "Relationship"
        ],
        correctIndexes: [2],
        type: "single"
      },
      {
        question: "What element represents an area of the business where you want to measure quality?",
        answers: [
          "Rule",
          "Business Process",
          "Business Concept",
          "Relationship"
        ],
        correctIndexes: [1],
        type: "single"
      },
      {
        question: "What element allows you to link related assets together?",
        answers: [
          "Rule",
          "Business Process",
          "Business Concept",
          "Relationship"
        ],
        correctIndexes: [3],
        type: "single"
      },
      {
        question: "Indicate whether the following statement is TRUE or FALSE. When you implement a Rule, a quality score is calculated and then combined and rolled up to create separate scores based on all the Rules assigned to a Business Process or Dataset.",
        answers: [
          "TRUE",
          "FALSE"
        ],
        correctIndexes: [0],
        type: "single"
      },
      {
        question: "What are Relationships used for?",
        answers: [
          "When you change one asset, you can see what other assets might be affected.",
          "Relationships indicate how quality scores are rolled up.",
          "You can see the network of how assets work together to accomplish governance.",
          "The Relationship Type helps track data errors. "
        ],
        correctIndexes: [0, 2],
        type: "multiple"
      },
      {
        question: "Which element defines the validation requirements for a Rule?",
        answers: [
          "Enforcement",
          "System of Enforcement",
          "Specification",
          "Enforcement type"
        ],
        correctIndexes: [0],
        type: "single"
      },
      {
        question: "Which element is considered the conceptual system datastore that the Rule should be enforced against?",
        answers: [
          "Enforcement",
          "System of Enforcement",
          "Specification",
          "Enforcement type"
        ],
        correctIndexes: [1],
        type: "single"
      },
      {
        question: "Which element is the criteria for how the Rule is to be enforced.",
        answers: [
          "Enforcement",
          "System of Enforcement",
          "Specification",
          "Enforcement type"
        ],
        correctIndexes: [2],
        type: "single"
      },
      {
        question: "Which element identifies the purpose of the Enforcement, such as Quality or Migration.",
        answers: [
          "Enforcement",
          "System of Enforcement",
          "Specification",
          "Enforcement type"
        ],
        correctIndexes: [3],
        type: "single"
      },
      {
        question: "Indicate whether the following statement is TRUE or FALSE. There is one Enforcement per Rule. If you need to Enforce a Rule on two different systems, then you need to create separate Rules, each with its own Enforcement.",
        answers: [
          "TRUE",
          "FALSE"
        ],
        correctIndexes: [1],
        type: "single"
      },
      {
        question: "Indicate whether the following statement is TRUE or FALSE. The System of Enforcement is the physical system datastore where the Rule will be executed. This is where the code will run to validate the data quality specification.",
        answers: [
          "TRUE",
          "FALSE"
        ],
        correctIndexes: [1],
        type: "single"
      },
      {
        question: "Which implementation element is the code used to extract the number of records in scope?",
        answers: [
          "Data Quality Score",
          "Implementation Datastore",
          "Opportunity Query",
          "Error Query"
        ],
        correctIndexes: [2],
        type: "single"
      },
      {
        question: "Which implementation element is the code used to extract the number of records in error?",
        answers: [
          "Data Quality Score",
          "Implementation Datastore",
          "Opportunity Query",
          "Error Query"
        ],
        correctIndexes: [3],
        type: "single"
      },
      {
        question: "Which implementation element is calculated based on the Error count divided by the Opportunity count?",
        answers: [
          "Data Quality Score",
          "Implementation Datastore",
          "Opportunity Query",
          "Error Query"
        ],
        correctIndexes: [0],
        type: "single"
      },
      {
        question: "Which implementation element is the physical System datastore where the Implementation code will run?",
        answers: [
          "Data Quality Score",
          "Implementation Datastore",
          "Opportunity Query",
          "Error Query"
        ],
        correctIndexes: [1],
        type: "single"
      },
      {
        question: "Which description matches this implementation element? \'Different System of Enforcement and Implementation Datastore\'",
        answers: [
          "You want to evaluate quality based on production data in real time",
          "You want to evaluate quality based on production data but don't want to impede performance"
        ],
        correctIndexes: [1],
        type: "single"
      },
      {
        question: "Which description matches this implementation element? \'The same System of Enforcement and Implementation Datastore\'",
        answers: [
          "You want to evaluate quality based on production data in real time",
          "You want to evaluate quality based on production data but don't want to impede performance"
        ],
        correctIndexes: [0],
        type: "single"
      },
      {
        question: "If you want to save an error report when the Implementation is executed, you should set the Include in Data Quality flag to Yes.",
        answers: [
          "True",
          "False"
        ],
        correctIndexes: [1],
        type: "single"
      },
      {
        question: "Which method of running an Implementation is executed directly from the implementation page?",
        answers: [
          "Single on-demand Implementation",
          "Orchestrate Workflow",
          "Run Implementation",
          "Egg"
        ],
        correctIndexes: [0],
        type: "single"
      },
      {
        question: "Which method of running an Implementation is scheduling regular runs of an implemenation or group of implementations?",
        answers: [
          "Single on-demand Implementation",
          "Orchestrate Workflow",
          "Run Implementation",
          "Orchestrate Pages"
        ],
        correctIndexes: [1],
        type: "single"
      },
      {
        question: "Indicate whether the following statement is TRUE or FALSE. You can view Data Quality Report Details from either the Rule page or the Implementation page.",
        answers: [
          "True",
          "False"
        ],
        correctIndexes: [0],
        type: "single"
      },
      {
        question: "When an Implementation is executed, what is generated?",
        answers: [
          "The Data Quality Score",
          "An Orchestrate Workflow",
          "An Error Report",
          "A Quality Task"
        ],
        correctIndexes: [0, 2],
        type: "multiple"
      },
      {
        question: "Which of the following assets will a Quality Score roll up to, assuming all assets have the Roll Up Data Quality Score checkbox enabled?",
        answers: [
          "Subject Areas",
          "Datasets",
          "Business Processes",
          "Systems"
        ],
        correctIndexes: [0, 1, 2],
        type: "multiple"
      },
      {
        question: "What color is a Data Quality Score in the Warning Threshold?",
        answers: [
          "Red",
          "Yellow",
          "Green",
          "Rainbow"
        ],
        correctIndexes: [1],
        type: "single"
      },
      {
        question: "You can modify and create Thresholds by navigating to:",
        answers: [
          "Catalog Preferences",
          "Match Parameters",
          "Admin Business Settings",
          "Migrate Environments"
        ],
        correctIndexes: [2],
        type: "single"
      },
      {
        question: "Which two methods can you use to view an Orchestrate Workflow?",
        answers: [
          "From the Orchestrate home page, click the Workflow Name.",
          "Search for the Workflow from the Search bar at the top of the SKP page.",
          "Navigate to the Quality asset, click the Workflows tab, and then click the Workflow Name.",
          "Navigate to the Catalog and filter the list to Workflows.",
          "Type a phrase in the Search bar and press Enter."
        ],
        correctIndexes: [0, 2, 4],
        type: "multiple"
      },
      {
        question: "Which Quality asset is associated with the workflow, \'A Workflow with a Business Process\'?",
        answers: [
          "Dataset",
          "Enforcement",
          "Implementation",
          "Business Process",
          "Rule"
        ],
        correctIndexes: [3],
        type: "single"
      },
      {
        question: "Which Quality asset is associated with the workflow, \'A Workflow with a Dataset Task.\'?",
        answers: [
          "Dataset",
          "Enforcement",
          "Implementation",
          "Business Process",
          "Rule"
        ],
        correctIndexes: [0],
        type: "single"
      },
      {
        question: "Which Quality asset is associated with the workflow, \'A Workflow with a Rule Task.\'?",
        answers: [
          "Dataset",
          "Enforcement",
          "Implementation",
          "Business Process",
          "Rule"
        ],
        correctIndexes: [4],
        type: "single"
      },
      {
        question: "Which Quality asset is associated with the workflow, \'No Workflows are listed for this asset.\'?",
        answers: [
          "Dataset",
          "Enforcement",
          "Implementation",
          "Business Process",
          "Rule"
        ],
        correctIndexes: [1],
        type: "single"
      },
      {
        question: "Which Quality asset is associated with the workflow, \'Three Workflows with Tasks for a Business Process, Dataset, and Rule.\'?",
        answers: [
          "Dataset",
          "Enforcement",
          "Implementation",
          "Business Process",
          "Rule"
        ],
        correctIndexes: [2],
        type: "single"
      },
      {
        question: "Which of the following statements are TRUE?",
        answers: [
          "You use Tasks within Orchestrate to run Quality Implementations.",
          "When you schedule a Quality Rule, you create a workflow with one or more tasks.",
          "You cannot schedule a Quality Asset, such as Dataset, and all underlying Rules and Implementations in Orchestrate.",
          "An Enforcement cannot be scheduled in Orchestrate.",
        ],
        correctIndexes: [0, 1],
        type: "multiple"
      },
      {
        question: "From which card on the SKP Home Page do you access the Quality Overview Dashboards?",
        answers: [
          "Migrate",
          "Quality",
          "Report Hub",
          "Construct",
        ],
        correctIndexes: [2],
        type: "single"
      },
      {
        question: "If you wanted to see a list of hyperlinked Subject Areas with their corresponding Enforcements and Implementations, which tab would you use from the Quality Overview?",
        answers: [
          "Download by Subject Area",
          "Rules by Subject Area",
          "Execution History",
          "Download by Dataset",
        ],
        correctIndexes: [0],
        type: "single"
      },
      {
        question: "To view a DQ Trend for the current month, you would visit the Execution History tab.",
        answers: [
          "True",
          "False"
        ],
        correctIndexes: [1],
        type: "single"
      },
    ];

const mockQuestionCount = 60;
const mockExamDurationSeconds = 90 * 60;
const mockWarningThreshold = 30 * 60;
const mock10MinutesThreshold = 10 * 60;
let timeRemaining = mockExamDurationSeconds;
let timerInterval = null;
const mockTimer = document.getElementById('mock-timer');
const mockExamBanner = document.getElementById('mock-exam-banner');
const isMockExam = !!mockTimer;
let mock30MinuteWarningShown = false;
let mock10MinuteWarningShown = false;

let currentQuestionIndex = 0;
let questionState = quizData.map(() => ({ submitted: false, correct: false, selectedIndexes: [] }));

const questionContainer = document.getElementById('question-container');
const statusText = document.getElementById('status');
const scoreText = document.getElementById('score');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const randomizeBtn = document.getElementById('randomize-btn');
const questionsListEl = document.getElementById('questions-list');

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${secs}`;
}

function getShuffledOrder(length) {
    return Array.from({ length }, (_, index) => index).sort(() => Math.random() - 0.5);
}

function initializeMockExam() {
    if (!isMockExam) return;
    quizData.sort(() => Math.random() - 0.5);
    quizData.length = Math.min(quizData.length, mockQuestionCount);
    questionState = quizData.map(item => ({
        submitted: false,
        correct: false,
        selectedIndexes: [],
        answerOrder: getShuffledOrder(item.answers.length),
    }));
}

function startMockTimer() {
    if (!isMockExam) return;
    mockExamBanner.style.display = 'block';
    mockTimer.style.display = 'block';
    mockTimer.textContent = `Time remaining: ${formatTime(timeRemaining)}`;

    timerInterval = setInterval(() => {
        timeRemaining -= 1;
        if (timeRemaining < 0) {
            clearInterval(timerInterval);
            mockTimer.textContent = 'Time is up!';
            submitBtn.disabled = true;
            prevBtn.disabled = true;
            nextBtn.disabled = true;
            if (randomizeBtn) randomizeBtn.disabled = true;
            statusText.textContent = 'Time has expired. Review your completed answers and score.';
            statusText.className = 'status wrong';
            return;
        }

        if (!mock30MinuteWarningShown && timeRemaining === mockWarningThreshold) {
            mock30MinuteWarningShown = true;
            mockTimer.classList.add('mock-timer-warning');
            showToast('30 minutes remaining!');
        }

        if (!mock10MinuteWarningShown && timeRemaining === mock10MinutesThreshold) {
            mock10MinuteWarningShown = true;
            mockTimer.classList.add('mock-timer-ten-warning');
            showToast('10 minutes remaining!');
        }

        mockTimer.textContent = `Time remaining: ${formatTime(timeRemaining)}`;
    }, 1000);
}

function updateScoreDisplay() {
    const correctCount = questionState.filter(q => q.submitted && q.correct).length;
    const attemptedCount = questionState.filter(q => q.submitted).length;
    scoreText.textContent = `Score: ${correctCount} / ${quizData.length} (${attemptedCount} attempted)`;
    scoreText.className = 'status';
}

function renderQuestion() {
    const item = quizData[currentQuestionIndex];
    const state = questionState[currentQuestionIndex];
    statusText.textContent = '';
    statusText.className = 'status';

    const hint = item.type === 'multiple' ? '(Select all that apply)' + (item.answers.length > 1 ? ` (${item.correctIndexes.length} options)` : '') : '(Select one answer)';
    const answerOrder = state.answerOrder || (isMockExam ? getShuffledOrder(item.answers.length) : Array.from({ length: item.answers.length }, (_, index) => index));
    if (isMockExam && !state.answerOrder) {
        state.answerOrder = answerOrder;
    }

    const answerInputs = answerOrder
    .map(originalIndex => {
        const checked = state.selectedIndexes.includes(originalIndex) ? 'checked' : '';
        const disabled = state.submitted ? 'disabled' : '';
        return `
        <label class="answer-option" data-index="${originalIndex}">
        <input type="${item.type === 'multiple' ? 'checkbox' : 'radio'}" name="answer" value="${originalIndex}" ${checked} ${disabled} />
        <span>${item.answers[originalIndex]}</span>
        </label>
    `;
    })
    .join('');

    questionContainer.innerHTML = `
    <div class="question">${currentQuestionIndex + 1}. ${item.question}</div>
    <div class="hint" style="color: #ccc;">${hint}</div>
    <div class="answers">${answerInputs}</div>
    `;

    const labels = questionContainer.querySelectorAll('label.answer-option');
    if (state.submitted) {
    labels.forEach(label => {
        const index = Number(label.dataset.index);
        const isSelected = state.selectedIndexes.includes(index);
        const isCorrectAnswer = item.correctIndexes.includes(index);

        label.classList.remove('correct', 'wrong');
        if (isSelected && isCorrectAnswer) {
        label.classList.add('correct');
        } else if (isSelected && !isCorrectAnswer) {
        label.classList.add('wrong');
        } else if (!isSelected && isCorrectAnswer) {
        label.classList.add('correct');
        }
    });

    if (state.correct) {
        statusText.textContent = 'Correct! Nice work.';
        showFeedback(true);
    } else {
        const correctOptions = item.correctIndexes
        .map(index => item.answers[index])
        .join(' / ');
        statusText.textContent = `Incorrect. Correct answer(s): ${correctOptions}`;
        showFeedback(false);
    }
    }

    submitBtn.disabled = state.submitted;
    updateScoreDisplay();
    renderQuestionList();
}

function renderQuestionList() {
    const listHtml = quizData.map((item, index) => {
    const state = questionState[index];
    const statusClass = state.submitted ? (state.correct ? 'correct' : 'wrong') : '';
    const label = `Question ${index + 1}: ${item.question}`;
    const shortLabel = label.length > 60 ? label.slice(0, 60) + '...' : label;
    return `
        <button type="button" class="question-nav-item ${statusClass} ${index === currentQuestionIndex ? 'active' : ''}" data-index="${index}" title="${label}">
        ${shortLabel}
        </button>
    `;
    }).join('');
    questionsListEl.innerHTML = listHtml;
}

function renderFinalScoreScreen() {
    const correctCount = questionState.filter(q => q.submitted && q.correct).length;
    questionContainer.innerHTML = `
    <div class="question">Quiz Completed!</div>
    <div class="score">Your final score is ${correctCount} out of ${quizData.length}.</div>
    <div class="score">You scored a ${((correctCount / quizData.length) * 100).toFixed(2)}%!</div>
    `;
    statusText.textContent = '';
    prevBtn.style.display = 'none';
    mockTimer.style.display = 'none';
    mockExamBanner.style.display = 'none';
    randomizeBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'none';
}

function getSelectedIndexes() {
    const inputs = questionContainer.querySelectorAll('input[name="answer"]');
    const values = [];
    inputs.forEach(input => {
    if (input.checked) {
        values.push(Number(input.value));
    }
    });
    return values;
}

function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    const sortedA = [...a].sort((x, y) => x - y);
    const sortedB = [...b].sort((x, y) => x - y);
    return sortedA.every((value, index) => value === sortedB[index]);
}

function showFeedback(correct) {
    statusText.className = correct ? 'status correct' : 'status wrong';
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;

    const existing = document.querySelector('.toast-container');
    const container = existing || (() => {
        const wrapper = document.createElement('div');
        wrapper.className = 'toast-container';
        document.body.appendChild(wrapper);
        return wrapper;
    })();

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('toast-hidden');
        toast.addEventListener('transitionend', () => toast.remove(), { once: true });
    }, 4500);
}

function randomizeQuestions() {
    quizData.sort(() => Math.random() - 0.5);
    questionState = quizData.map(item => ({
        submitted: false,
        correct: false,
        selectedIndexes: [],
        answerOrder: isMockExam ? getShuffledOrder(item.answers.length) : undefined,
    }));
    currentQuestionIndex = 0;
    renderQuestion();
    updateScoreDisplay();
    renderQuestionList();
}

function submitAnswer() {
    const item = quizData[currentQuestionIndex];
    const selectedIndexes = getSelectedIndexes();

    if (selectedIndexes.length === 0) {
    statusText.textContent = 'Please choose at least one answer before submitting.';
    statusText.className = 'status wrong';
    return;
    }

    const isCorrect = arraysEqual(selectedIndexes, item.correctIndexes);
    questionState[currentQuestionIndex] = {
    submitted: true,
    correct: isCorrect,
    selectedIndexes,
    };

    const labels = questionContainer.querySelectorAll('label.answer-option');
    labels.forEach(label => {
    const index = Number(label.dataset.index);
    const isSelected = selectedIndexes.includes(index);
    const isCorrectAnswer = item.correctIndexes.includes(index);

    label.classList.remove('correct', 'wrong');
    if (isSelected && isCorrectAnswer) {
        label.classList.add('correct');
    } else if (isSelected && !isCorrectAnswer) {
        label.classList.add('wrong');
    } else if (!isSelected && isCorrectAnswer) {
        label.classList.add('correct');
    }
    });

    if (isCorrect) {
    statusText.textContent = 'Correct! Nice work.';
    showFeedback(true);
    } else {
    const correctOptions = item.correctIndexes
        .map(index => item.answers[index])
        .join(' / ');
    statusText.textContent = `Incorrect. Correct answer(s): ${correctOptions}`;
    showFeedback(false);
    }

    submitBtn.disabled = true;
    questionContainer.querySelectorAll('input[name="answer"]').forEach(input => input.disabled = true);
    updateScoreDisplay();
    // If every question has been submitted, show the final score screen
    if (questionState.every(q => q.submitted)) {
    renderFinalScoreScreen();
    }
}

prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
    currentQuestionIndex -= 1;
    renderQuestion();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex += 1;
    renderQuestion();
    }
});

submitBtn?.addEventListener('click', submitAnswer);
if (randomizeBtn) {
    randomizeBtn.addEventListener('click', randomizeQuestions);
}

questionsListEl.addEventListener('click', (e) => {
    const navItem = e.target.closest('.question-nav-item');
    if (navItem) {
    const index = Number(navItem.dataset.index);
    currentQuestionIndex = index;
    renderQuestion();
    }
});

initializeMockExam();
renderQuestion();
startMockTimer();
if (quizData.length === 0) {
    renderFinalScoreScreen();
}