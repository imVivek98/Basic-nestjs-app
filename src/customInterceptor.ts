import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import {map} from 'rxjs'



export class customInterceptor implements NestInterceptor{
    intercept(context : ExecutionContext , handler : CallHandler)
    {
        return handler.handle().pipe(
            map((data) => {
                const response = {
                    ...data,
                    createdAt : data.reports.created_at
                }
                delete response.data.created_at;
                delete response.data.updated_at;
                return response;
            })
        )

    }
}
//This is a mock implementation of a nestjs interceptor . Since we don't need to reinvent the wheel , we simply use the ClassSerializerInterceptor in this project.