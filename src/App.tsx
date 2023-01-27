import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { ResultItem } from "./components/ResultItem";
import { results } from "./results";

function App() {
  return (
    <div className="mx-auto px-14 max-w-[834px]">
      <Header />

      <div className="flex gap-4 pb-12">
        <Card className="bg-white w-56 flex-shrink-0 px-5 py-3">
          <div className="mb-2 uppercase text-[13px] leading-6">Количество пересадок</div>
          <div>Все</div>
          <div>Без пересадок</div>
          <div>1 пересадка</div>
          <div>2 пересадки</div>
          <div>3 пересадки</div>
        </Card>

        <div className="flex flex-col gap-4 w-full">
          <Card className="bg-white flex w-full">
            <div className="flex-1 flex justify-center py-3 uppercase text-[13px] leading-6">Самый дешевый</div>
            <div className="flex-1 flex justify-center py-3 uppercase text-[13px] leading-6">Самый быстрый</div>
          </Card>

          {results.map(r => (
            <ResultItem
              key={r.id}
              result={r}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
