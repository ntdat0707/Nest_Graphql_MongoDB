import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import {StudentType} from './student.type';
import { CreateStudentInput } from './create-student.input';
import { StudentService } from './student.service';

@Resolver(of => StudentType)
export class StudentResolver {
    constructor(private studentService: StudentService) { }

    @Query(returns => StudentType)
    lesson(
        @Args('id') id: string,
    ) {
        return this.studentService.getStudent(id);
    }

    @Query(returns => [StudentType])
    alllessons() {
        return this.studentService.getAllStudent();
    }
    
    @Mutation(returns => StudentType)
    createStudent(
        @Args('studentInput') studentInput: CreateStudentInput,
    ) {
        return this.studentService.createStudent(studentInput);
    }
}
