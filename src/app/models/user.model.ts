// user.model.ts

export class User {
    id: number;
    name: string;
    about: string;
    imageUrl: string;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.about = data.about;
        this.imageUrl = data.imageUrl;
    }
}
