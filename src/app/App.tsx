import styles from "./App.module.css";
import FloralDecoration from "@shared/floral-decoration/ui/FloralDecoration";
import BirthdayGreeting from "@widgets/birthday-greeting/ui/BirthdayGreeting";
import ConfettiOnLoad from "./ConfettiOnLoad";

function App() {
  return (
    <main className={styles.stage}>
      <ConfettiOnLoad />
      <FloralDecoration />
      <BirthdayGreeting />
    </main>
  );
}

export default App;
