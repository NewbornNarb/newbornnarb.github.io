@echo off

echo "Started build..."
node run build

echo "Starting updating..."
git pull
git add *
git add .
git commit -m "update to website"
git push
echo "Finished updating."

@REM echo "Pushing update to server..."

@REM ssh nelr@107.161.26.119 "cd jesseatter.ca && git pull && npm run build"

@REM echo "Update pushed to server!"