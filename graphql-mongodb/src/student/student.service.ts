import { Injectable } from '@nestjs/common';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStudentInput } from './create-student.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student) private studentRepository: Repository<Student>,
    ) { }
    
    async getStudent(id:string):Promise<Student> {
        return this.studentRepository.findOne({ id});
    }

    async getAllStudent():Promise<Student[]> {
        return this.studentRepository.find();
    }

    async createStudent(studentInput: CreateStudentInput): Promise<Student> {
        const { firstName, lastName } = studentInput;

        const student = this.studentRepository.create({
            id: uuid(),
            firstName,
            lastName
        });

        return this.studentRepository.save(student);
    }
}
