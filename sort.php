<?php

/**
 * Сортировка массива сдвигом
 *
 * @param array $list
 * @return array
 */
function sortAr(array $list) : array {
    $prev = null;
    $sort = true;
    foreach ($list as $key => $value) {
        if ($value < $prev && !is_null($prev)) {
            $list[$key] = $prev;
            $list[$key - 1] = $value;
            $sort = false;
        } else {
            $prev = $value;
        }
    }
    return $sort ? $list : sortAr($list);
}

// test
$ar = [10, 6, 3, 1, 7, 2, 9];
print_r(sortAr($ar));