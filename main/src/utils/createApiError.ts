import { HttpException } from '@nestjs/common';

export const createApiError = (
    code: number,
    message: string,
) => {
    const apiError = new HttpException(
        {
            status: code,
            message,
            service: 'posts',
        },
        code,
    );

    return apiError;
};
