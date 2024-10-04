# prima

## First Steps

$${\color{green}npm init -y}$$
$${\color{green}npm i --save-dev prisma typescript ts-node @types/node nodemon}$$

### make new file named tsconfig.json with this inside:

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

### Initialize prisma and tell it what DB you are using (this give you a prisma file and a .env and .gitignore)

npx prisma init --datasource-provider postgresql
