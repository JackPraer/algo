<?php

/**
 * Поиск наименьшего элемента массива
 *
 * @param array $list список элементов
 * @return integer индекс наименьшего элемента
 */
function searchSmall(array $list): int
{
    $index = 0;
    $item = $list[0];
    foreach ($list as $key => $value) {
        [$index, $item] = $value < $item ? [$key, $value] : [$index, $item];
    }

    return $index;
}

/**
 * Сортировка выбором
 *
 * @param array $list
 * @return array
 */
function sortArray(array $list): array
{
    $sortedArray = [];
    foreach ($list as $key => $value) {
        $index = searchSmall($list);
        $sortedArray[] = array_splice($list, $index, 1)[0];
    }

    return $sortedArray;
}

// test
$ar = [10, 6, 3, 1, 7, 2, 9];
print_r(sortArray($ar));
