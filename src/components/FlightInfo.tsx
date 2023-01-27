import { Flight } from "./ResultItem";

const flightTimeHuminized = (ms: number): string => {
  const minutesTotal = ms / 1000 / 60
  const hours = Math.floor(minutesTotal / 60)
  const minutesRest = minutesTotal % 60
  return hours + 'ч ' + minutesRest + 'м'
}

export function FlightInfo({ data: d }: { data: Flight }) {
  const departureDateObject = new Date(d.departure.time)
  const arrivalDateObject = new Date(d.arrival.time)
  const departureMinutes = departureDateObject.getUTCMinutes()
  const depString = departureDateObject.getUTCHours() + ':' + (departureMinutes > 9 ? departureMinutes : `0${departureMinutes}`)
  const arrivalMinutes = arrivalDateObject.getUTCMinutes()
  const arrString = arrivalDateObject.getUTCHours() + ':' + (arrivalMinutes > 9 ? arrivalMinutes : `0${arrivalMinutes}`)

  return (
    <div className="flex mt-4 text-[12px]">
      <div className="flex-1 pr-12">
        <div className="text-slate-500">{d.departure.airport} - {d.arrival.airport}</div>
        <div className="font-semibold">{depString} &ndash; {arrString}</div>
      </div>
      <div className="flex-1 pr-12">
        <div className="text-slate-500 uppercase">В пути</div>
        <div>{flightTimeHuminized(d.arrival.time - d.departure.time)}</div>
      </div>
      <div className="flex-1">
        {/* No handling 'ок' ending */}
        <div className="text-slate-500 uppercase">{d.transfers.length} пересадк{d.transfers.length === 1 ? 'а' : 'и'}</div>
        <div>{d.transfers.join(', ')}</div>
      </div>
    </div>
  );
}
