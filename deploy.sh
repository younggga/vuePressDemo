#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
# 这一步保存源码到你的git仓库
# git init
# git add -A
# git commit -m 'deploy'
# git push -f <你的Git仓库>

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://<USERNAME>.github.io
# git push -f <你的GitPage仓库> master

# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:<USERNAME>/vuepress.git master:gh-pages

cd -
