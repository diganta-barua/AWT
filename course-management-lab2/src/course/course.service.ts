import { Injectable } from '@nestjs/common';
import { createcoursedto } from './DTO/create-course.dto';
import { UpdateCourseDTO } from './DTO/update-course.dto';


@Injectable()
export class CourseService {
private COURSES: createcoursedto[] = [  {
    "name": "Introduction to Computer Science",
    "code": "CS101",
    "instructor": "Dr. Sarah Jenkins",
    "credits": 3,
    "description": "Foundational programming concepts using Python and basic problem-solving methodologies."
  },
  {
    "name": "Advanced Software Engineering",
    "code": "CSE2002",
    "instructor": "Prof. Alan Turing",
    "credits": 4,
    "description": "Deep dive into architectural patterns, microservices, and continuous integration pipelines."
  },
  {
    "name": "Database Management Systems",
    "code": "DB303",
    "instructor": "Dr. Raymond Boyce",
    "credits": 3,
    "description": "Relational database design, normalization, complex SQL querying, and NoSQL alternatives."
  },
  {
    "name": "Data Structures and Algorithms",
    "code": "DSA210",
    "instructor": "Prof. Donald Knuth",
    "credits": 4,
    "description": "Analysis of time complexity, trees, graphs, sorting algorithms, and dynamic programming."
  },
  {
    "name": "Senior Capstone Project",
    "code": "SE4999",
    "instructor": "Dr. Grace Hopper",
    "credits": 6,
    "description": "A comprehensive year-long software development project building production-ready systems."
  },
  {
    "name": "Introduction to Artificial Intelligence",
    "code": "AI401",
    "instructor": "Dr. Marvin Minsky",
    "credits": 4,
    "description": "Heuristic search, machine learning basics, neural networks, and knowledge representation structures."
  },
  {
    "name": "Web Application Development",
    "code": "WD102",
    "instructor": "Prof. Tim Berners",
    "credits": 3,
    "description": "Building modern full-stack web applications utilizing frontend frameworks and RESTful APIs."
  },
  {
    "name": "Computer Networks and Security",
    "code": "NET3101",
    "instructor": "Dr. Vint Cerf",
    "credits": 4,
    "description": "Study of OSI layers, TCP/IP protocols, network security principles, and cryptographic basics."
  },
  {
    "name": "Discrete Mathematics",
    "code": "MAT150",
    "instructor": "Prof. Ada Lovelace",
    "credits": 3,
    "description": "Logic, set theory, combinatorics, graph theory, and proofs essential for computing."
  },
  {
    "name": "Special Topics in Cloud Computing",
    "code": "CC450",
    "instructor": "Dr. Werner Vogels",
    "credits": 2,
    "description": "Hands-on implementation of serverless architectures and distributed computing environments."
  } ];
    getall(){
        return this.COURSES;
    }
    getbyid(id:string){
        console.log(id);
        return this.COURSES.find(e=> e.code == id);
    }
    addcourse(course:createcoursedto){
        if(this.COURSES.find(e=> e.code == course.code)){
            return `Course ID ${course.code} already exist`;
        }
        this.COURSES.push(course);
        return this.COURSES;
    }
    updatefullcourse(id:string, course:createcoursedto){
      console.log(id);
      const index = this.COURSES.findIndex(e=> e.code == id);
    }
    updatepartialcourse(id:string, course:UpdateCourseDTO){
      console.log(id);
      const index = this.COURSES.findIndex(e=> e.code == id);
    }
}
