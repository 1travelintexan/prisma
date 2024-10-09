# prima

## First Steps

```
npm init -y
```

```
npm i --save-dev prisma typescript ts-node @types/node nodemon
```

### make new file named tsconfig.json with this inside:

```
{
"compilerOptions": {
"sourceMap": true,
"outDir": "dist",
/_ Language and Environment _/
"target": "es2016" /_ Set the JavaScript language version for emitted JavaScript and include compatible library declarations. _/,
"lib": [
"ESNext"
] /_ Specify a set of bundled library declaration files that describe the target runtime environment. _/,
/_ Modules _/
// "module": "commonjs", /_ Specify what module code is generated. _/
"esModuleInterop": true /_ Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. _/,
// "forceConsistentCasingInFileNames": true, /_ Ensure that casing is correct in imports. _/
/_ Type Checking _/
"strict": true /_ Enable all strict type-checking options. _/
// "skipLibCheck": true /_ Skip type checking all .d.ts files. _/
    }
}
```

### Initialize prisma and tell it what DB you are using (this give you a prisma file and a .env and .gitignore)

### Make sure to change the connection string for the DB in the .env that is given with the command

```
npx prisma init --datasource-provider postgresql
```

#### Note: you can format your prisma files by default or manually with this command(it should be on save already)

```
npx prisma format
```

### This command connects prisma and our DB and this says we made changes to the schema and this says to update the DB to reflect the changes

### It will create a migrations file when you run it and that file will have the sql syntax to create the table with the new schema

### It also creates a new Prisma client but you will need to install the prisma client library with ...

```
npm i @prisma/client
```

### After you generate a client then you can generate it with npx prisma generate

```
npx prisma migrate dev --name init
```
