import { InputType, Field } from "@nestjs/graphql";
import { IsDateString, MinLength } from 'class-validator';
import { StudentType } from "src/student/student.type";

@InputType()
export class CreateLessonInput {
    @MinLength(1)
    @Field()
    name: string;

    @IsDateString()
    @Field()
    startDate: string;

    @Field()
    endDate: string;

    @Field(type => [StudentType])
    students: string[];
}