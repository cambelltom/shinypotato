# shinypotato
shiny-potato
Prerequisites
IDE (VS Code) is available
Support for JavaScript and TypeScript added on VS Code
Node JS

Step 1 - Create a new folder
Step 2 - Open folder in VS Code
Step 3 - Run commands 
npm init -y
npm install cypress
npm install typescript
Step 4 - initialize a new tsconfig.json file using the command
npx tsc --init --types cypress --lib dom,es6
This ensures that types for cypress are accessible by typescript
These types depend on dom and es6, so we pass them as lib option to typescript
Step 5 - Run command
npx cypress open
Step 6 - Under cypress/integration folder create a test file basic.ts
Step 7 - Add test code | Run and verify
