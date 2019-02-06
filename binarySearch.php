<?php

/**
 * Класическй бнарный поиск
 *
 * @param array $list сортированный массив
 * @param integer $value искомое значение
 * @return integer|null index искомого значения или null
 */
function binary_search(array $list, int $value) : ?int
{
    $low = 0;
    $high = count($list) - 1;

    while ($low <= $high) {
        $mid = ceil(($low + $high) / 2);
        $current = $list[$mid];
        
        if($current == $value) {
            return $mid;
        } elseif ($value > $current) {
            $low = $mid + 1;
        } else {
            $high = $mid - 1;
        }
    }
    return null;
}

/**
 * Бинарный поиск через рекурсию
 *
 * @param array $list
 * @param integer $value
 * @param integer|null $low
 * @param integer|null $high
 * @return integer|null index искомого значения или null
 */
function recursion_binary_search(array $list, int $value, ?int $low = null, ?int $high = null)
{
    if ($low > $high) return null;

    $low = $low ?? 0;
    $high = $high ?? count($list) - 1;
    $mid = ceil(($low + $high) / 2);
    $current = $list[$mid];

    if ($value > $current) {
        $low = $mid + 1;
    } elseif($value < $current) {
        $high = $mid - 1;
    }

    return $current == $value ? $mid : recursion_binary_search($list, $value, $low, $high);
}

$a = [2,3,4,5,6,7,8,9,10];
print_r(
    [
        binary_search($a, 9),
        recursion_binary_search($a, 9)
    ]
);