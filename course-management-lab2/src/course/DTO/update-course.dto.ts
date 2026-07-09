import { PartialType } from "@nestjs/mapped-types";
import { createcoursedto } from "./create-course.dto";

export class UpdateCourseDTO extends PartialType(createcoursedto){}