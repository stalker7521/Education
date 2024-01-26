Данилов Я.И КНМО-101
# Указания к папке RLE:
```
rle.js - основной файл с кодом
input.txt - файл, из которого берётся исходный материал для кодирования
code.txt - файл, в который записывается закодированная строка
decode.txt - файл, в который записывается декодированная строка
```
## Исполнительные команды:
Запуск кодирования через терминал
```
node .\rle.js code .\input.txt .\code.txt 
```
Запуск декодирования через терминал
```
node .\rle.js decode .\code.txt decode.txt
```
# Указание к папrе Entropy:
Код выводит Энтропию Шенона для заданной строки.
## Запуск алгоритма через терминал:
```
node .\Education_JS\Entropy\entropy.js abrakadabra
```
В примере abrakadabra - заданная строка.
# Указание к папе Huffman:
Программа позволяет закодировать текстовое сообщение с помощью алгоритма Хаффмана. После работы программа выводит двоичное представление заданной строки. После программа декодирует двоичный код и выводит начальную строку.
# Указание к папке Hemming_Code:
Программа представляет собой одностраничный сайт, в который встроен алгоритм Хемминга. Можно ввести какое-то сообщение из 4-х бит(состоящее из 1 и 0) и получить его в закодированном формате.
Также можно проверить какое-то сообщение на верность. Если в сообщении есть ошибки, то алгоритм выведет верный вариант сообщения и укажет, где была ошибка.

# Указание к папке VM:
Программа представляет компилятор, преобразующий код входного файла, который написан на языке SPML( Super Puper Mega Language), в исполняемые команды на JS.

Для работы программы необходимо установить библиотеку readline-sync.
```
vm.js - основной файл машины, компилятор
fib.spml - входной файл программы, которая производит вычисление n-ого числа Фибоначчи
nok.spml - входной файл программы, которая производит вычисление Наименьшего Общего Кратного двух чисел
```
## Синтаксис Виртуальной Машины:
Подразумевается, что после команды вводятся переменные, кроме команды set.
```
Ввод значений - (set адрес значение)
Сложение - (add слагаемое слагаемое результат)
Корень числа - (sqrt из-чего-корень результат)
Деление - ( div делимое делитель частное)
Возведение в степень - (pow возводимое степень результат)
Округление в меньшую сторону - (floor округляемое результат)
Вычисление НОК - ( nok первое_число второе_число)
Вывод в консоль - (output выводимое)
```
# Указание к папке Float:
Программа представляет собой перевод какого-то числа в машинное представление по стандарту IEEE754
# Указание к папке Brute-F_and_Hash:
В папке находится два файла:
```
Brute-Force.js - программа поиска подстроки в строке с помощью алгоритма "Грубая сила".
hash.js - программа поиска подстроки в строке с помощью хеширования.
```
Для файла hash.js требуется установить библиотеку readline-sync.
Файл Brute-Force.js нужно запускать через консоль с командой:
```
node .\Education_JS\Brute-F_and_Hash\Brute-Force.js abwjrwjriaboba ab
```
Здесь "abwjrwjriaboba" строка, а "ab" - подстрока.

# Указание к папке F-S-M
Программа представляет собой поиск подстроки в строке с помощью Конечного Детерминированного автомата.
# Указание к папке Boyer-Moor-find
Программа выполняет поиск подстроки в строке с помощью алгоритма Бойера-Мура.
# Указание к папке Caesar's-Cipher
Программа позволяет выполнить  близкую дешифровку входной строки с помощью шифра Цезаря. Выводит дешифрованное сообщение и ключ к шифру.
# Указание к папке Dijkstra_Algorithm:
В алгоритме реализована правая ассоциативность степеней - то есть, если во входной строке будет: "2 ^ 3 ^ 2" - Ответ будет равен 512
## Запуск алгоритма через терминал:
1. Для корректного выполнения алгоритма необходимо прописывать все символы через пробел(как в примере)
2. Выражение нужно обязательно помещать в ковычки(как в примере)
### Пример команды:
```
node .\Education_JS\Dijkstra_Algorithm\Dextra.js "1 + 2 * ( 4 / 2 ) ^ 2 ^ 3 - 1"
```
# Указание к папке GameOfLife
Программа пресдставляет собой одностраничный сайт, на котором бащово реализована популярная игра Game of Life.
```
1)При перезагрузке страницы игра начинается с начала.
2) Для того, чтобы поставить на паузу "жизнь" нажмите на кнопку Pause.
3) Для возобновления жизни нажмите на кнопку Start.
```
