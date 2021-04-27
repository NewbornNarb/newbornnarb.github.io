@echo off

echo "Starting updating..."
git pull
git add *
git add .
git commit -m "update to website"
git push
echo "Finished updating."