#!/bin/bash

echo "===================================="
echo "Сборка сайта MoreDota для REG.RU"
echo "===================================="
echo ""

echo "Установка зависимостей..."
pnpm install
if [ $? -ne 0 ]; then
    echo ""
    echo "ОШИБКА: Не удалось установить зависимости"
    echo "Убедитесь, что установлен Node.js и pnpm"
    exit 1
fi

echo ""
echo "Сборка проекта..."
pnpm run build
if [ $? -ne 0 ]; then
    echo ""
    echo "ОШИБКА: Не удалось собрать проект"
    exit 1
fi

echo ""
echo "===================================="
echo "ГОТОВО!"
echo "===================================="
echo ""
echo "Теперь загрузите файлы из папки 'dist' на хостинг REG.RU"
echo "Также не забудьте загрузить файл .htaccess"
echo ""
echo "Подробная инструкция в файле DEPLOY_REGRU.md"
echo ""
