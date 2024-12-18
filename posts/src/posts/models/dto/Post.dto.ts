export class UpdatePostDto {
    id: string;
    title: string;
    content: string;
    state: string;
    hash: string;
    updated_at: string;
}

export class CreatePostDto extends UpdatePostDto {
    created_at: string;
}
