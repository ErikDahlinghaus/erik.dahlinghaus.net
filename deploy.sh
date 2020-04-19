npm install &&
rsync --delete --force -avvP --exclude='git' ~/projects/dahlinghaustld/webroot/ dahlinghaus.net:/webroot &&
ssh dahlinghaus.net 'sudo systemctl restart sails' &&
echo "Sails deployed"


