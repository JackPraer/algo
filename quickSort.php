<?php

/**
 * быстрая сортировка
 *
 * @param array $list массив чисел
 * @return array
 */
function quickSort(array $list) : array 
{
    if (count($list) < 2) {
        return $list;
    }

    $current = array_shift($list);
    $less = [];
    $greater = [];

    foreach($list as $element) {
        if ($element <= $current) {
            $less[] = $element;
        }

        if ($element > $current) {
            $greater[] = $element;
        }
    }

    return array_merge(quickSort($less), [$current], quickSort($greater));

}

// test
print_r(
    quickSort([6,2,3,9,5,7,1,8])
);