import AlertDialogSample from "./partials/AlertDialogSample"
import FaqSection from "./partials/FaqSection"
import { TopMenu } from "./partials/TopMenu"


export function App() {
  return (
    <div>
      <TopMenu />
      <div>
        <AlertDialogSample />
      </div>
      <div>
        <FaqSection />
      </div>
    </div>
  )
}

export default App