#!/usr/bin/env sh

bold=$(tput bold)
cyan=$(tput setaf 6)
green=$(tput setaf 2)
normal=$(tput sgr0)
yellow=$(tput setaf 3);

# Abort on errors
set -e

# Build documentation
npm run docs:build

# Navigate into the build output directory
cd docs/.vuepress/dist

# If you are deploying to a custom domain
# echo 'www.example.com' > CNAME

remote_url=$(git config --get remote.origin.url)

echo "Deploying to the following repository:\n${cyan}${remote_url}${normal}"

echo "\n${bold}Do you wish continue?${normal}"
select yn in "Yes" "No"; do
    case $yn in
        Yes ) break;;
        No ) exit;;
    esac
done

printf "\nInitializing temporary Git repository...\n\n✅ "
git init

echo "\nCreating initial commit...\n"
git add -A
printf "${green}"
git commit -m 'Deploy docs to GitHub Pages'
printf "${normal}"

echo "\nDeploying to GitHub...\n"
printf "${yellow}"
git push -f $remote_url master:gh-pages
printf "${normal}"

echo "\nRemoving temporary Git repository..."
rm -rf .git

echo "\n${bold}${green}All done!${normal}\n"
exit 0
