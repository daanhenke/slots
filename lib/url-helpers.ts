// export const getUserImageUrl = (userId: string, imageId: string) => `/api/images/user/${userId}/${imageId}`
// export const getContactPersonImageUrl = (userId: string, imageId: string) => `/api/images/contact-person/${userId}/${imageId}`

import type {ContactPerson, User} from "~/lib/types";

export const getPersonImageUrl = (userId: string, imageId: string) => `https://picsum.photos/1024?uid=${userId}&iid=${imageId}`
export const getContactPersonImageUrl = (contactPerson: ContactPerson) => getPersonImageUrl(contactPerson.userId, contactPerson.imageId)
export const getUserImage = (user: User) => getPersonImageUrl(user.userId, user.imageId)
