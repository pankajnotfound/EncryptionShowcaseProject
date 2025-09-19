To run the project after cloning ----------------------------------------

First of all switch to dev branch by using

git checkout dev

and delete the node_modules folder that is in the root directory
also delete the node_modules folder that is in the server directory

Step 1 - install the root dependencies
cd EncryptionShowcaseProject
npm install

Step 2 - Install the Frontend dependencies
cd client
npm install

Setp 3 - Install the Backend dependencies
cd ..
cd server 
npm install

To run the server -------------------------
Step 1 --
Go the the root directory of the project (cd ..)

Step 2 --
npm run server (for running server alone)

npm run client (for running client alone)

npm run dev (for running the whole project)