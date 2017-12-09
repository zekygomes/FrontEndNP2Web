export class User{

  public id: number;
  public name: string;
  public username: string;
  public email: string;
  public profile_image: string;
  public phone: number;
  public about: string;
  public interests: string[];
  public type: string;
  public password: string;

  constructor(id: number,
              name: string,
              username: string,
              email: string,
              profile_image?: string,
              phone?: number,
              about?: string,
              interests?: string[],
              type?: string,
              password?: string
  ){
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.profile_image = profile_image;
    this.phone = phone;
    this.about = about;
    this.interests = interests;
    this.type = type;
    this.password = password;

  }
}
