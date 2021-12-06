import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

    id: number;

    @ApiProperty({required: true})
    name: string;
}
