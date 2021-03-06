import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson/lesson.entity';
import { StudentModule } from './student/student.module';
import { Student } from './student/student.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',//Nestjs-graphql-mongoDB
      url: 'mongodb+srv://Test1:123@cluster0-ga0wm.azure.mongodb.net/Nestjs-graphql-mongoDB?retryWrites=true&w=majority',
      // url: 'mongodb://localhost/school',
      synchronize: true,
      entities: [Lesson, Student],
      useUnifiedTopology: true
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    LessonModule,
    StudentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
