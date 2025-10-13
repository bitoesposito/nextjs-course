'use server';

import { createUser, getUserByEmail } from "@/lib/user";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { redirect } from "next/navigation";
import { createAuthSession, destroySession } from "@/lib/auth";

export async function signup(prevState, formData) {
  const email = formData.get('email');
  const password = formData.get('password');

  let errors = {};

  if (!email.includes('@')) {
    errors.email = 'Invalid email';
  }

  if (password.trim().length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  }

  if (Object.keys(errors).length > 0) {
    return errors
  }

  try {
    const userId = await createUser(email, hashUserPassword(password));
    await createAuthSession(userId);
    redirect('/training');
  } catch (error) {
    if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      return {
        email: 'It seems like an account with this email already exists'
      }
    }
    throw error;
  }
}

export async function login(prevState, formData) {
  const email = formData.get('email');
  const password = formData.get('password');

  const existingUser = getUserByEmail(email);

  if (!existingUser) {
    return {
      errors: {
        email: 'Invalid email or password'
      }
    }
  }
  const isValidPassword = verifyPassword(existingUser.password, password);
  if (!isValidPassword) {
    return {
      errors: {
        password: 'Invalid email or password'
      }
    }
  }

  await createAuthSession(existingUser.id);
  redirect('/training');
}

export async function logout() {
  await destroySession()
  redirect('/')
}