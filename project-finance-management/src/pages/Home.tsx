import { Header } from "../components/Header";
import { SearchForm } from "../components/SearchForm";
import { Summary } from "../components/Summary";
import { Transactions } from "../components/transaction";

export function Home() {
  return (
    <div>
      <Header />
      <Summary />
      <SearchForm />
      <Transactions />
    </div>
  );
}
