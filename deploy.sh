#!/bin/bash

#To make a FRESH deployment, do the following: 
#Instructions below from https://gist.github.com/CristinaSolana/1885435)
#git clone git@github.com/kimyoungmichael2/lpdb.git
#git remote add upstream git@github.com/hanbeul/lpdb.git
#git fetch upstream
#git pull upstream develop (or whatever branch you want to pull)
#merge changes as needed. 

#To apply changes to pre-existing deployment and redeploy, do the following:
#git fetch upstream
#git pull upstream develop (or whatever branch you want to pull)
#merge changes as needed. 

#Once merging is done, run "npm run build" in the frontend folder.
#Once building is complete, run "sudo bash deploy.sh" in the project root directory.

cp -r ./frontend/build/. /var/www/michaelyoung.kim/lpdb/
echo files copied!

systemctl reload nginx
echo nginx reloaded!
