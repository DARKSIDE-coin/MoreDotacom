@echo off
echo ====================================
echo Сборка сайта MoreDota для REG.RU
echo ====================================
echo.

echo Установка зависимостей...
call pnpm install
if errorlevel 1 (
    echo.
    echo ОШИБКА: Не удалось установить зависимости
    echo Убедитесь, что установлен Node.js и pnpm
    pause
    exit /b 1
)

echo.
echo Сборка проекта...
call pnpm run build
if errorlevel 1 (
    echo.
    echo ОШИБКА: Не удалось собрать проект
    pause
    exit /b 1
)

echo.
echo ====================================
echo ГОТОВО!
echo ====================================
echo.
echo Теперь загрузите файлы из папки "dist" на хостинг REG.RU
echo Также не забудьте загрузить файл .htaccess
echo.
echo Подробная инструкция в файле DEPLOY_REGRU.md
echo.
pause
