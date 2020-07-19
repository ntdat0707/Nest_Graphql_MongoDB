import { LessonType } from "./lesson.type";
import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { LessonService } from "./lesson.service";
import { CreateLessonInput } from "./lesson.input";
import { AssignStudentsToLessonInput } from "./assign-students";

@Resolver(of => LessonType)
export class LessonResolver {
    constructor(private lessonService: LessonService) { }

    @Query(returns => LessonType)
    lesson(
        @Args('id') id: string,
    ) {
        return this.lessonService.getLesson(id);
    }

    @Query(returns => [LessonType])
    alllessons() {
        return this.lessonService.getAllLessons();
    }

    @Mutation(returns => LessonType)
    createLesson(
        @Args('lessonInput') lessonInput: CreateLessonInput,
    ) {
        return this.lessonService.createLesson(lessonInput);
    }

    @Mutation(returns => LessonType)
    assignStudentsToLesson(
        @Args('assignStudentsToLessonInput') assignStudentsToLessonInput: AssignStudentsToLessonInput
    ) {
        const { lessonId, studentIds } = assignStudentsToLessonInput;
        return this.lessonService.assignStudentsToLesson(lessonId, studentIds);
    }
}