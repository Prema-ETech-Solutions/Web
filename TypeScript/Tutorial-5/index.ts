type Student = {
    name: string;
    age: number;
    geet: (stu: Student) => boolean;
    show?: (stu: Student) => boolean;
};

// Function
const show = (student: Student) => {
    console.log(student?.name);
    return true;
};

const stu: Student = {
    name: 'Hello',
    age: 10,
    geet: show,
    show
};

show(stu);
