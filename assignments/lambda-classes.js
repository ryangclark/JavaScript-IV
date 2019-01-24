class Person {
    constructor(personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.gender = personAttributes.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, and I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes)
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today, we are learning about ${subject}.`;
    }
    grade(Student, subject) {
        return `${Student.name} receives a perfect score on ${subject}.`;
    }
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(element => {
            console.log(element);
        });
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun spring challenge on ${subject}.`;
    }
}

class ProjectManager extends Instructor {
    constructor(projectManagerAttributes) {
        super(projectManagerAttributes);
        this.gradClassName = projectManagerAttributes.gradClassName;
        this.favInstructor = projectManagerAttributes.favInstructor;
    }
    standUp(slackChannelName) {
        return `${this.name} announces to ${slackChannelName}, @channel standy times!`;
    }
    debugsCode(Student, subject) {
        return `${this.name} debugs ${Student.name}'s code on ${subject}.`;
    }
}

// ––– OBJECTS ––– //

const paula = new Person({
    age: 73,
    gender: 'female',
    location: 'School',
    name: 'Paula',
});
const zultan = new Person({
    age: 28,
    gender: 'male',
    location: 'Brazil',
    name: 'Zultan',
});

const fred = new Instructor({
    age: 37,
    catchPhrase: `Don't forget the homies.`,
    favLanguage: 'JavaScript',
    gender: 'male',
    location: 'Bedrock',
    name: 'Fred',
    specialty: 'Front-end'
});
const barb = new Instructor({
    age: 48,
    catchPhrase: `GIT PUSH. GIT PAID.`,
    favLanguage: 'Python',
    gender: 'female',
    location: 'Fern Valley',
    name: 'Barb',
    specialty: 'Machine Learning'
});

const mimi = new Student({
    age: 82,
    className: 'CS132',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
    gender: 'female',
    location: 'Florida',
    previousBackground: 'Grandmother and Pool Shark',
    name: 'Mimi'
});
const arnie = new Student({
    age: 21,
    className: 'UX13',
    favSubjects: ['UX', 'UI', 'Design'],
    gender: 'male',
    location: 'Jersey',
    previousBackground: 'Candy Store Clerk',
    name: 'Arnie'
});

const carol = new ProjectManager({
    age: 33,
    catchPhrase: `LESS is MORE`,
    favInstructor: 'Barb',
    favLanguage: 'LESS',
    gender: 'female',
    gradClassName: 'CS2',
    location: 'Cactus Mountain',
    name: 'Carol',
    specialty: 'Responsive Layouts'
});
const brad = new ProjectManager({
    age: 23,
    catchPhrase: `Have you done your Daily Standup yet?`,
    favInstructor: 'Barb',
    favLanguage: 'JavaScript, React specifically',
    gender: 'male',
    gradClassName: 'CS12',
    location: 'Slopeside Village',
    name: 'Brad',
    specialty: 'Web Apps'
});


// ––– Tests —–– //
console.log('––– PERSON –––');
console.log(paula.age);         // 73
console.log(paula.name);        // Spanish
console.log(zultan.gender);     // male
console.log(zultan.location);   // Brazil

console.log('––– INSTRUCTOR –––');
console.log(fred.speak());      // Hello my name is Fred, and I am from Bedrock.
console.log(fred.specialty);    // Front-end
console.log(barb.catchPhrase);  // GIT PUSH. GIT PAID.
console.log(barb.favLanguage);  // Python

console.log('––– STUDENT –––');
console.log(mimi.PRAssignment('JavaScript-IV'));    // Mimi has submitted a PR for JavaScript-IV.
console.log(mimi.speak());                          // CS132
console.log(arnie.listsSubjects());                 // UX \n UI \n Design
console.log(arnie.sprintChallenge('UX Design'));    // Arnie has begun spring challenge on UX Design.

console.log('––– PROJECT MANAGER –––');
console.log(carol.debugsCode(arnie, 'Design'));
console.log(carol.favInstructor);
console.log(brad.standUp('General'));
console.log(brad.gradClassName);