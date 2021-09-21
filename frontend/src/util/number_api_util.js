export const numToDollars = new Intl.NumberFormat('en-US',
    {
        style: 'currency',
        currency: 'USD',
    }
);