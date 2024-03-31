import { calculateMortgage } from '@banking-web-apps/mortgage-lib';
import { NextRequest, NextResponse } from 'next/server';
export async function GET(request: NextRequest) {
  const { homePrice, downPayment, interestRate, loanTerm, currency } =
    Object.fromEntries(request.nextUrl.searchParams);
  if (!homePrice || !downPayment || !interestRate || !loanTerm || !currency) {
    return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
  }
  const payment = calculateMortgage({
    homePrice: +homePrice,
    downPayment: +downPayment,
    interestRate: +interestRate,
    loanTerm: +loanTerm,
    currency,
  });
  return NextResponse.json({ payment }, { status: 200 });
}
