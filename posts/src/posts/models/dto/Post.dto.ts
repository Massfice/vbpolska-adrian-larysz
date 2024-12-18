export class IdPostDto {
    id: string;
}

export class UpdatePostDto extends IdPostDto {
    title: string;
    content: string;
    state: string;
    hash: string;
    updated_at: string;
}

export class CreatePostDto extends UpdatePostDto {
    created_at: string;
}
