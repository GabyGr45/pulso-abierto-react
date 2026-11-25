import type { Currency } from '../types/api'

export function formatCurrency(
    amount: number,
    currency: Currency,
): string {
    return new Intl.NumberFormat('es-Ar', {
        style: 'currency',
        currency: currency.toUpperCase(),
    }).format(amount)
}
