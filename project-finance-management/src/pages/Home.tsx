import { Header } from "../components/Header";
import { Summary } from "../components/Summary";
import { Transactions } from "../components/transaction";

export function Home() {
  return (
    <div>
      <Header />
      <Summary />
      <Transactions />
    </div>
  );
}
