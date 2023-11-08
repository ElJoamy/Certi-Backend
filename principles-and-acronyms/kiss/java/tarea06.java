import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.ArrayList;

class Student {
    private String name;
    private Set<Course> courses = new HashSet<>();

    public Student(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public Set<Course> getCourses() {
        return courses;
    }

    public void enrollInCourse(Course course) {
        courses.add(course);
    }
}

class Course {
    private String name;

    public Course(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}

class StudentRegistrationSystem {
    
    Set<Student> registeredStudents = new HashSet<>();
    List<Course> availableCourses = new ArrayList<>();

    boolean registerStudent(Student student, Course course) {
        if (student == null || course == null) {
            throw new IllegalArgumentException("Estudiante o curso no pueden ser nulos");
        }
        
        if (registeredStudents.contains(student) || student.getCourses().contains(course)) {
            // El estudiante ya está registrado en el curso
            return false;
        }

        if (!availableCourses.contains(course)) {
            // Curso no disponible
            return false;
        }

        // Lógica de registro
        student.getCourses().add(course);
        registeredStudents.add(student);
        return true;
    }
}

// public class tarea06 {
//     public static void main(String[] args) {
//         // Crear algunos cursos disponibles
//         Course mathCourse = new Course("Mathematics");
//         Course historyCourse = new Course("History");
//         Course scienceCourse = new Course("Science");

//         // Crear algunos estudiantes
//         Student student1 = new Student("Alice");
//         Student student2 = new Student("Bob");
//         Student student3 = new Student("Charlie");

//         // Agregar los cursos disponibles a la lista de cursos disponibles
//         StudentRegistrationSystem registrationSystem = new StudentRegistrationSystem();
//         registrationSystem.availableCourses.add(mathCourse);
//         registrationSystem.availableCourses.add(historyCourse);
//         registrationSystem.availableCourses.add(scienceCourse);

//         // Casos de prueba
//         boolean result1 = registrationSystem.registerStudent(student1, mathCourse);
//         boolean result2 = registrationSystem.registerStudent(student2, historyCourse);
//         boolean result3 = registrationSystem.registerStudent(student1, mathCourse); // Ya registrado
//         boolean result4 = registrationSystem.registerStudent(student3, scienceCourse);
//         boolean result5 = registrationSystem.registerStudent(student2, mathCourse); // Curso no disponible
//         // boolean result6 = registrationSystem.registerStudent(null, historyCourse); // Estudiante nulo

//         // Mostrar resultados
//         System.out.println("Registro de estudiante 1 en Math: " + result1);
//         System.out.println("Registro de estudiante 2 en History: " + result2);
//         System.out.println("Registro de estudiante 1 en Math (repetido): " + result3);
//         System.out.println("Registro de estudiante 3 en Science: " + result4);
//         System.out.println("Registro de estudiante 2 en Math (curso no disponible): " + result5);
//         // System.out.println("Registro de estudiante nulo: " + result6);
//     }
// }


public class tarea06 {
    public static void main(String[] args) {
        // Crear algunos estudiantes y cursos
        Student student1 = new Student("Estudiante1");
        Student student2 = new Student("Estudiante2");
        Course course1 = new Course("Curso1");
        Course course2 = new Course("Curso2");

        // Crear el sistema de registro
        StudentRegistrationSystem registrationSystem = new StudentRegistrationSystem();

        // Agregar cursos disponibles
        registrationSystem.availableCourses.add(course1);
        registrationSystem.availableCourses.add(course2);

        // Pruebas de registro de estudiantes en cursos
        boolean result1 = registrationSystem.registerStudent(student1, course1); // Registro exitoso
        System.out.println("Resultado 1: Registro exitoso - " + result1);

        boolean result2 = registrationSystem.registerStudent(student1, course1); // Estudiante ya registrado en el curso
        System.out.println("Resultado 2: Estudiante ya registrado - " + result2);

        boolean result3 = registrationSystem.registerStudent(student2, course1); // Registro exitoso para otro estudiante en el mismo curso
        System.out.println("Resultado 3: Registro exitoso para otro estudiante - " + result3);

        boolean result4 = registrationSystem.registerStudent(student1, course2); // Registro exitoso en otro curso
        System.out.println("Resultado 4: Registro exitoso en otro curso - " + result4);

        boolean result5 = registrationSystem.registerStudent(student1, null); // Estudiante o curso nulos
        System.out.println("Resultado 5: Estudiante o curso nulos - " + result5);
    }
}

