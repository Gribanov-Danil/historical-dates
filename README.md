# Блок "Исторические даты"

"Исторические даты" - проект, представляющий собой блок, содержащий информацию о временных отрезках, в каждом из которых существует несколько событий. Выполнен в качетсве тестового задания за 1 неделю

## Описание

Реализовать следующий блок в соответствии с макетом 

Блок содержит информацию о временных отрезках, в каждом из которых существует несколько событий. 
При переключении временных отрезков изменяются соответствующие числа и под ними показывается новый слайдер, который содержит подробную информацию по ключевым событиям на активном временном отрезке.

Возможно существование от 2 до 6 временных отрезков. Все интерактивные точки на окружности располагаются на одинаковом расстоянии друг от друга

Весь блок стоит сделать независимым от другой логики на странице. 
Например, если добавить на страницу ещё один такой же блок, верстка и логика работы этих блоков не будет нарушена

Демонстрация работы блока - пример с максимальным количеством временных отрезков

Все существующие в макете линии — это не разметочная сетка, а часть верстки 

## Требования к реализации

Необходимо использовать Typescript
Можно использовать React.js или нативный JS на Ваш выбор
В случае использования нативного JS, можно воспользоваться любым удобным для Вас HTML-шаблонизатором или обычным HTML
Стилизация с использованием SASS/SCSS (В случае работы с React.js, возможно использование styled-components)
Сборка проекта с помощью Webpack
Для работы со слайдерами необходимо использовать библиотеку Swiper
Для реализации js-анимаций можно использовать библиотеку gsap

Не использовать JQuery
Не использовать Bootstrap, Tailwind и т.п.
Не использовать библиотеки с готовыми UI-компонентами такие, как MaterialUI, AntDesign и т.п.

## Проект доступен по <a href="https://historical-dates-lyart.vercel.app/">ссылке</a>

## Стек

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![GSAP](https://img.shields.io/badge/-GSAP-508115?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAMAAAA8w5+RAAAC2VBMVEUAAAAAAQABAQEBAgEBAwEBBAEBBQACAgECAwECBAECBAICBQECBQICBgECCAECCQECCgECCwEDBgMDBwEDBwIDCAEDCAIDCQIDCgEEBgMECAMECQIECgEECgIECwIEDAH///8AAAAAAAAAAAAAAAAAAAAAAAADAQIDAAsAAAACAAECBAEABgAAAAACBAEAAAAAAAALDgoCDQACBQEdIRsHCAYDCQEEBQQBHwADAgMAAQASIgcVGRMNLgAIEAQJEgQTIwghIyAMGgsKEgUAFQBISkhDOEoOHAYAIwBCQUISJQYJCQkqKCoPDhAvXhQOPACAgH4jRg9WVVcwXhWDgoKOj44wXhWKi4kuOS00YxeHh4Zrhlqfn560s7MoTRKIiIcwXhVgX18jRQ8oThAXLwh1aXsyYharqqpZrCY9eBunpqViYWGJiYmurq6pp6fKyMkAZAACOgAPGwgPTQAQIgUYYAAgQwosUhYuYQ8uZQwuawovPyo0axI2ahc6dxU9fRU+jg4+mgdAixZApQNCmg1EwwBLtgtNmB9OkCdRgjRTpCNVoyRVtRtZ1g9asSZbgEVbljdcsyddtSldtilfuydgvClkwixkwytlfFZlxCtlxCxlxSxmxyxm3h5nxi5nyCxoyy1qjVRrzy5rzzBr0C5t1S9u2y1x2TJx2jJx5S10gWt04TJ14zJ2fnF25jN36TN56zR6inV67jV78DV98zZ/dYN/gXuBylOJ/zuJ/zyM/z2Sj5GUkpOWlpOX/0GYl5iapZOfkaagn5+joqKl14amqaOrqKusnrKsr6murq2wqbKwzJ2xsbG0s7K0s7O8ury9vbu/vb2/zbbJx8jLw8vMysvN87POys3Qz8/V4c7X1tbbzeLcyuTf2eLg+c7h2+Li1ebl4+PmzvHn5eXq0fbr2fHs6+vs/9zw5fPw7e/07fT38fn39/f49vb77v38+/v9+/z/7/////82zMHeAAAAcHRSTlMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBRUYHR4gJCsrKy4vMDY+R01OTk9QUlNTV1lZXWFoa2xub3d5eoGEioyPkZ+fpKytuby+wMHIy83R0tPX2trc3uTk6Ojq6u309vj5+f7+snxOawAAAZJJREFUeNps0AOMHGAYhOFZ2/Zfd2vbtm2mtm3btm3bNs+2v9i3PL/xk4kGrITAzHarXCIX8Hkyg47jnvyyJnT5yJeIeaibTi0hL4gSDmpEpTSEIogSPoBKDbo/f98K8KPcQxXaDPid9PdnSOTgKj6UonTzgZtXfqOIhNR/0RlvPOiUotmEqw9X3aW0O09+fPjy6C2YC+4R1x/sXDg7jPbPfEdEn/+AofqmpweXzF2w/DF9mr4ok2jkL7Ay4+8PGzN/6d4LK07Evp73Ii6081Cwbqfbo9OyreePnl2zPv7j95ivUwlsVGOg0bpLxw4fOrVlQzhl0cSOYJV5elTdcfvA4ePn1m7Lyf5PfQBm1BpU6Hn51s1ru2ddocRXNMSLFqVKhRa9+41ePOciTZlEfQOoNsJT6xk3qH4XahtcmjyPyNCVepQam1ynAEqM6EXtOtzbXsuHKo3aIfd8jEFUsemR1dV8KBAIJCIul4tx01B+365yXtTLZDKFJyGeDUfZPWdqe9Bmc/hDE+qPehtzt3lRGgAIVJW8BlmEYQAAAABJRU5ErkJggg==)


Для запуска проекта:

- Установите Node.js
- В консоли (cmd) перейдите в текущую директорию и напишите ```npm i```
- После установки всех пакетов напишите ```npm start```
- Зайдите на http://localhost:8080
