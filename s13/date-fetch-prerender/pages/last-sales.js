import { useEffect, useState } from "react";
import useSWR from "swr";

export default function LastSalesPage() {
  const [sales, setSales] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Utilizzo di SWR per il data fetching
  const { data, error } = useSWR("https://jsonplaceholder.typicode.com/todos");

  // Trasforma i dati quando arrivano da SWR
  useEffect(() => {
    if (data) {
      const transformedSales = [];

      for (const item of data) {
        transformedSales.push({
          id: item.id,
          title: item.title,
          completed: item.completed,
        });
      }

      setSales(transformedSales);
    }
  }, [data]);

  //   useEffect(() => {
  //     setIsLoading(true);
  //     fetch("https://jsonplaceholder.typicode.com/todos")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const transformedSales = [];

  //         for (const item of data) {
  //           transformedSales.push({
  //             id: item.id,
  //             title: item.title,
  //             completed: item.completed,
  //           });
  //         }

  //         setSales(transformedSales);
  //         setIsLoading(false);
  //       });
  //   }, []);

  // Gestione degli stati di loading ed errore
  if (error) {
    return <p>Failed to load</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  // Renderizza la lista dei dati trasformati
  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          <div>
            <span>{sale.title}</span>
            <span> - {sale.completed ? 'Completato' : 'In corso'}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
