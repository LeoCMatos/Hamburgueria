@echo off

start cmd /k "cd /d .\hamburgueria && ng serve" 
start cmd /k "cd /d .\apiHamburgueria && npx ts-node src/index.ts"
