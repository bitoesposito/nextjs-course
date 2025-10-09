import classes from './page.module.css';

import Link from 'next/link';
import MealsGrid from '@/app/components/meals/meals-grid';
import { getMeals } from '@/app/lib/meals';
import { Suspense } from 'react';

export const metadata = {
  title: 'All meals - NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
  alternates: {
    canonical: '/meals'
  }
}

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}
  
export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, create{' '}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite meal and and cook it yourself. It is easy and fun.
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">
            Share your favourite recipe
          </Link>
        </p>
      </header>

      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  )
}