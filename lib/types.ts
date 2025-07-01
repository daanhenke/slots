export interface Person
{
  userId: string,
  imageId: string,

  firstName?: string,
  lastName?: string,
  emailAddress: string,

  phoneNumber?: string,

  favoriteColor: string,
}

export interface ContactPerson extends Person {}
export interface User extends Person {}
