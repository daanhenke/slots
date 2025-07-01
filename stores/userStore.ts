import {defineStore} from "pinia";
import { ref } from "vue";
import type {User} from "~/lib/types";
import { faker } from "@faker-js/faker";

export const useUserStore = defineStore('user', () =>
{
  const users = []

  for (let i = 0; i < 12; i++)
  {
    const user: User = {
      userId: faker.string.uuid(),
      imageId: faker.string.uuid(),
      emailAddress: faker.internet.email(),
      favoriteColor: faker.color.rgb(),
    }

    if (Math.random() > .3)
    {
      user.phoneNumber = faker.phone.number()
    }

    if (Math.random() > 0.3)
    {
      user.firstName = faker.person.firstName()

      if (Math.random() > 0.2)
      {
        user.lastName = faker.person.lastName()
      }
    }

    users.push(user)
  }

  return { users: ref(users) }
})
