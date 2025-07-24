import { test, expect } from '../helpers/ConfacFixtures';

test.describe('consultants filter', () => {
  test.beforeEach(async ({ page, db }) => {
    const count = await db.collection('consultants').countDocuments();
    if (count === 0) {
      await db.collection('consultants').insertMany(defaultConsultants);
    }

    await page.goto('/consultants');
  });

  test('can filter on active', async ({ page }) => {

  });

  test('can filter on text', async ({ page }) => {

  });

  test.afterEach(async ({ db }) => {
    // await db.dropCollection('consultants');
  });
});



const defaultConsultants = [
  {
    "name" : "Anders",
    "firstName" : "Hejlsberg",
    "slug" : "hejlsberg-anders",
    "type" : "consultant",
    "email" : "hejlsberg.anders@itenium.be",
    "active" : true,
  },
  {
    "name" : "Linus",
    "firstName" : "Torvalds",
    "slug" : "torvalds-linus",
    "type" : "consultant",
    "email" : "torvalds.linus@itenium.be",
    "active" : true,
  },
  {
    "name" : "Guido",
    "firstName" : "van Rossum",
    "slug" : "van rossum-guido",
    "type" : "consultant",
    "email" : "van rossum.guido@itenium.be",
    "active" : true,
  },
  {
    "name" : "Brendan",
    "firstName" : "Eich",
    "slug" : "eich-brendan",
    "type" : "consultant",
    "email" : "eich.brendan@itenium.be",
    "active" : true,
  },
  {
    "name" : "Martin",
    "firstName" : "Fowler",
    "slug" : "fowler-martin",
    "type" : "consultant",
    "email" : "fowler.martin@itenium.be",
    "active" : true,
  },
  {
    "name" : "Robert",
    "firstName" : "Martin",
    "slug" : "martin-robert",
    "type" : "consultant",
    "email" : "martin.robert@itenium.be",
    "active" : true,
  },
  {
    "name" : "Grace",
    "firstName" : "Hopper",
    "slug" : "hopper-grace",
    "type" : "consultant",
    "email" : "hopper.grace@itenium.be",
    "active" : true,
  },
  {
    "name" : "Donald",
    "firstName" : "Knuth",
    "slug" : "knuth-donald",
    "type" : "consultant",
    "email" : "knuth.donald@itenium.be",
    "active" : true,
  },
  {
    "name" : "Ken",
    "firstName" : "Thompson",
    "slug" : "thompson-ken",
    "type" : "consultant",
    "email" : "thompson.ken@itenium.be",
    "active" : true,
  },
  {
    "name" : "Bruce",
    "firstName" : "Drucker",
    "slug" : "drucker-bruce",
    "type" : "consultant",
    "email" : "drucker.bruce@itenium.be",
    "active" : true,
  },
  {
    "name" : "Peter",
    "firstName" : "Schneier",
    "slug" : "schneier-peter",
    "type" : "consultant",
    "email" : "schneier.peter@itenium.be",
    "active" : false,
  },
  {
    "name" : "Clayton",
    "firstName" : "Christensen",
    "slug" : "christensen-clayton",
    "type" : "consultant",
    "email" : "christensen.clayton@itenium.be",
    "active" : false,
  }
];
