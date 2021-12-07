import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

    id: string;

    @ApiProperty({required: true})
    name: string;
}
