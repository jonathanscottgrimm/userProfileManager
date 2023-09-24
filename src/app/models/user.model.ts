// user.model.ts

export class User {
    id: number;
    name: string;
    email: string;
    imageUrl: string;
    phoneNumber?: string;
    jobTitle?: string;
    company?: string;
    jobDescription?: string;




    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.imageUrl = data.imageUrl;
    }
}
