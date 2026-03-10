@echo off
echo ========================================
echo   MeiMagic Website - GitHub Deploy
echo ========================================
echo.

REM Check if git is installed
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Git is not installed or not in PATH
    echo Please install Git from https://git-scm.com/
    pause
    exit /b 1
)

echo [1/5] Initializing Git repository...
if not exist .git (
    git init
    echo Git repository initialized.
) else (
    echo Git repository already exists.
)

echo.
echo [2/5] Adding files...
git add .

echo.
echo [3/5] Committing changes...
git commit -m "Deploy MeiMagic website"

echo.
echo [4/5] Enter your GitHub repository URL:
echo Example: https://github.com/yourusername/meimagic-website.git
set /p REPO_URL="Repository URL: "

if "%REPO_URL%"=="" (
    echo [ERROR] No repository URL provided
    pause
    exit /b 1
)

REM Check if remote exists
git remote get-url origin >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Adding remote repository...
    git remote add origin %REPO_URL%
) else (
    echo Updating remote repository...
    git remote set-url origin %REPO_URL%
)

echo.
echo [5/5] Pushing to GitHub...
git branch -M main
git push -u origin main --force

echo.
echo ========================================
echo   Deployment Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Go to your repository on GitHub
echo 2. Click Settings ^> Pages
echo 3. Select 'main' branch and '/' folder
echo 4. Click Save
echo 5. Wait 1-2 minutes for deployment
echo.
echo Your site will be at:
echo https://YOUR_USERNAME.github.io/meimagic-website
echo.
pause
