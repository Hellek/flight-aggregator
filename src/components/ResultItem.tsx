import { Card } from "./Card";
import logoS7 from '../assets/s7-not-optimized.png'
import { FlightInfo } from "./FlightInfo";

interface CompanyLogo {
  logo: string
}

interface FlightDetails {
  airport: string
  time: number
}

export interface Flight {
  departure: FlightDetails
  arrival: FlightDetails
  transfers: string[]
}

const companies: Record<string, CompanyLogo> = {
  s7: { logo: logoS7 }
}

export interface ResultItemProps {
  id: number
  company: string
  price: number
  flights: Flight[]
}

const priceFormatter = new Intl.NumberFormat('ru-RU')

export function ResultItem({ result: r }: { result: ResultItemProps }) {
  return (
    <Card
      className="h-44 bg-white p-5 pr-14"
    >
      <div className="flex justify-between items-center">
        <div className="text-[24px] text-blue-400">{priceFormatter.format(r.price)} Р</div>
        <img
          alt="Company logo"
          src={companies[r.company].logo}
          className="max-h-8"
        />
      </div>

      <div>
        {r.flights.map((data, i) => (
          <FlightInfo key={i} data={data} />
        ))}
      </div>
    </Card>
  );
}
