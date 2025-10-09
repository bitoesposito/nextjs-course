import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  // await new Promise((resolve) => setTimeout(resolve, 6000));
  // throw new Error('Failed to fetch meals');
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true, strict: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  // Salvataggio asincrono dell'immagine con gestione errori
  const bufferedImage = await meal.image.arrayBuffer();
  
  await new Promise((resolve, reject) => {
    const stream = fs.createWriteStream(`public/images/${fileName}`);
    
    stream.on('error', (error) => {
      reject(new Error("Failed to save image: " + error.message));
    });
    
    stream.on('finish', () => {
      resolve();
    });
    
    stream.write(Buffer.from(bufferedImage));
    stream.end();
  });

  meal.image = `/images/${fileName}`;

  // Inserimento nel database con i parametri corretti
  db.prepare(
    "INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email) VALUES (?, ?, ?, ?, ?, ?, ?)"
  ).run(
    meal.slug,
    meal.title,
    meal.image,
    meal.summary,
    meal.instructions,
    meal.creator,
    meal.creator_email
  );
}
