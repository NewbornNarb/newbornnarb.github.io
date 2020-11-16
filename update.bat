@echo off

echo "Starting updating..."
git pull
git add *
git add .
git commit -m "update to website"
git push
echo "Finished updating."

echo "Pushing update to server..."

ssh nelr@107.161.26.119 "cd jesseatter.ca && git pull && npm run build"

echo "Update pushed to server!"