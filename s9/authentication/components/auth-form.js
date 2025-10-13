'use client';

import Link from 'next/link';
import { useFormState } from 'react-dom';
import { login, signup } from '@/actions/auth-actions';

export default function AuthForm({ mode }) {

  const [formState, formAction] = useFormState(mode === 'signup' ? signup : login, null);

  return (
    <form id="auth-form" action={formAction}>
      <div>
        <img src="/images/auth-icon.jpg" alt="A lock icon" />
      </div>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </p>
      {formState && Object.keys(formState).length > 0 && (
        <ul id="form-errors">
          {Object.keys(formState).map((error) => (
            <li key={error}>{formState[error]}</li>
          ))}
        </ul>
      )}
      <p>
        <button type="submit">
          {mode === 'signup' ? 'Create Account' : 'Login'}
        </button>
      </p>
      <p>
        <Link href={`/?mode=${mode === 'signup' ? 'login' : 'signup'}`}>{mode === 'signup' ? 'Login with existing account.' : 'Create a new account.'}</Link>
      </p>
    </form>
  );
}
