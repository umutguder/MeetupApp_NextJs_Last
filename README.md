# NextJs Meetup App

- NextJs: fullstack framework for ReactJs

- For Search Engine Optimization
- Built-in server side rendering
- File-based rooting (instead of Route in ReactJs)
- Data fetching from prerendering : Move data fetching to server side - during build process:
  Good for search engine optimization data is filled initially Bad : data becomes outdated, need redeploy if data changes (solution add revalidate or use getServerSideProps)
- Use of getStaticProps (runs once if no revalidate) and getServerSideProps (runs for every incoming request) for Data fetching from prerendering
- getStaticPaths, is needed in dynamic pages to tell NextJS for which dynamic parameter values the page should be pre-generated.
- API Routes: the NextJS will pick up any JavaScript files stored in api folder and turn those files into API routes.

- Adding metadata Head

- Deploying final version to https://vercel.com/

  A deployed and running version could be accessed through
  http://localhost:3000/

Prerequest: https://nodejs.org/en/

In order to run the program, after download or pull run

- npm install
- npx create-next-app
- npm run dev
- npm run build (before deploy)

- create a mongo db cluster and replace the connection literal with the created one
  const client = await MongoClient.connect(
  "mongodb+srv://username:password@cluster0.g1hyb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
