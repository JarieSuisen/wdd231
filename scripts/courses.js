
// ARRAY HAS BEEN UPDATED TO REFLECT MY COURSE PROGRESS

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// CODE TO DO STUFF FOLLOWS

// Build the Buttons and give functionality
// Identify targets in document
const allButton = document.querySelector('#btn-all');
const wddButton = document.querySelector('#btn-wdd')
const cseButton = document.querySelector('#btn-cse')
const courseDetails = document.querySelector('#course-details');

courseDisplay(courses);

function courseDisplay(courseArray) {

    // CLEAR CURRENT OBJECTS
    document.querySelector(".courseItems").innerHTML = "";

    // GRAB HTML POINT AND RESET CREDITS TO ZERO
    const creditTotal = document.querySelector("#creditTotal");
    let creditsCombined = 0;

    // GRAB ARRAY CONTENT AND SUCH
    courseArray.forEach(course => {

        // CREATE HTML OBJECTS THAT WILL BE USED
        let courseItem = document.createElement("section");
        let courseId = document.createElement("p");

        // Set values from array item that will be used
        let subject = course["subject"];
        let number = course["number"];
        let credits = course["credits"];
        let completed = course["completed"];


        // Assign values to HTML CONTENT
        courseId.textContent = `${subject}${number}`;
        // Generate content in Object
        courseItem.appendChild(courseId);

        // Assign CLASSES to HTML objects
        courseItem.classList.add("courseCard");
        courseId.classList.add("courseName");

        // Assign conditional details
        if (completed == true) {
            courseItem.classList.add("completed");
            courseId.textContent = `${subject}${number} ✓`
        };

        // ADD CREDITS TO TOTAL FOR CURRENT INSTANCE - WHOOPS NEED TO USE REDUCED
        // creditsCombined += credits;

        document.querySelector(".courseItems").appendChild(courseItem);


        //  ++++++++++++++++++++++++++++++++++
        courseItem.addEventListener('click', () => {
            displayCourseDetails(course);
        });



        //  ++++++++++++++++++++++++++++++++++

    });

    // RETURN FINAL TOTAL OF CREDITS - WHOOPS NEED TO USE REDUCED
    // creditTotal.innerHTML = creditsCombined;

    function creditsReduce(array) {
        const startvalue = 0;

        const reducedTotal = array.reduce(
            (i, b) => i + b.credits, startvalue
        );
        return reducedTotal;
    };

    creditTotal.innerHTML = creditsReduce(courseArray);

}


// Button Functionality
allButton.addEventListener('click', () => {
    courseDisplay(courses);
});

wddButton.addEventListener('click', () => {

    // Assign Filter
    let filterList = courses.filter((i) => i["subject"] === "WDD");

    //GENERATE NEW OBJECTS USING FILTERED LIST
    courseDisplay(filterList);
});

cseButton.addEventListener('click', () => {

    // Assign Filter
    let filterList = courses.filter((i) => i["subject"] === "CSE");

    //GENERATE NEW OBJECTS USING FILTERED LIST
    courseDisplay(filterList);
});



function displayCourseDetails(course) {
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
                <button id="closeModal">❌</button>
                <h2>${course.subject} ${course.number}</h2>
                <h3>${course.title}</h3>
                <p><strong>Credits</strong>: ${course.credits}</p>
                <p><strong>Certificate</strong>: ${course.certificate}</p>
                <p>${course.description}</p>
                <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
            `;
    courseDetails.showModal();

    closeModal.addEventListener("click", () => {
        courseDetails.close();
    });
}