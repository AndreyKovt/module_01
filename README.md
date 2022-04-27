# git-config

git config --global user.name "Андрей"
git config --global user.email "awesomeoverlord@mail.ru"

git config --list # посмотреть настройки

git config --global core.safecrlf warn
git config --global core.quotepath off
git config --global core.autocrlf input
git config --global init.defaultBranch main

git init # инициализация репозитория
git add . # добавить все файлы в track
git commit -m "описание" # сделать commit
git status # показать текущий статус
git diff # показать недавние изменения
git diff --color-words # показать недавние изменения с подсветкой всех знаков
git checkout # откатить изменения, нужно указать имя файла
git checkout .# откатить все изменения
