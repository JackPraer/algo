<?php

/**
 * Сумирование через reduce
 *
 * @param array $list
 * @return integer
 */
function sum(array $list): int 
{
    return array_reduce($list, function($acc, $current) {
        return $acc + $current;
    });
}

/**
 * Рекурсивное сумироване
 *
 * @param array $list
 * @return integer
 */
function recursion_sum(array $list): int
{
    return empty($list) ? 0 : array_shift($list) + recursion_sum($list);
}

/**
 * Сумирование хвостовой рекурсией 
 *
 * @param array $list
 * @param integer $value аккумулирующее значение суммы
 * @return integer
 */
function tail_recursion_sum(array $list, int $value = 0): int
{
    if(empty($list)) {
        return $value;
    } else {
        $value = array_shift($list) + $value;
        return tail_recursion_sum($list, $value);
    } 
}

$ar = [10, 6, 3, 1, -7, 2, 9];
print_r(
    [
        sum($ar),
        recursion_sum($ar),
        tail_recursion_sum($ar),
    ]
);